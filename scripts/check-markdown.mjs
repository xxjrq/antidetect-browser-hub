import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.cwd());
const markdown = [];

function walk(dir) {
	for (const item of readdirSync(dir, { withFileTypes: true })) {
		const file = join(dir, item.name);
		if (item.name.startsWith('.git')) continue;
		if (item.isDirectory()) walk(file);
		else if (extname(file) === '.md') markdown.push(file);
	}
}

function targetFor(file, href) {
	const clean = href.split('#')[0].split('?')[0];
	if (!clean || clean.startsWith('http') || clean.startsWith('mailto:') || clean.startsWith('#')) return null;
	return resolve(dirname(file), clean);
}

walk(root);
const broken = [];
for (const file of markdown) {
	const source = readFileSync(file, 'utf8');
	const links = source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g);
	for (const match of links) {
		const target = targetFor(file, match[1]);
		if (!target || !target.startsWith(root)) continue;
		const candidates = [target, `${target}.md`, join(target, 'README.md')];
		if (!candidates.some((candidate) => {
			try { return statSync(candidate).isFile(); } catch { return false; }
		})) broken.push(`${file.replace(root + '/', '')} -> ${match[1]}`);
	}
}

if (broken.length) {
	console.error(`Broken local Markdown links: ${broken.length}`);
	for (const item of broken) console.error(`- ${item}`);
	process.exit(1);
}
console.log(`Markdown check passed: ${markdown.length} files`);

