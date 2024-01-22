import type { CartaExtension } from 'carta-md';
import type { TokenizerAndRendererExtension } from 'marked';

export const insdel = (): CartaExtension => {
	return {
		markedExtensions: [
			{
				extensions: [insTokenizerAndRenderer(), delTokenizerAndRenderer()],
			},
		],
	};
};

function insTokenizerAndRenderer(): TokenizerAndRendererExtension {
	return {
		name: 'ins',
		level: 'inline',
		start(src) {
			return src.match(/\+\+(.+?)\+\+/)?.index;
		},
		tokenizer(src) {
			const match = src.match(/^\+\+(.+?)\+\+/);

			if (!match) return undefined;

			return {
				type: 'ins',
				raw: match[0],
				text: match[1],
			};
		},

		renderer(token) {
			return `<ins>${token.text}</ins>`;
		},
	};
}

function delTokenizerAndRenderer(): TokenizerAndRendererExtension {
	return {
		name: 'del',
		level: 'inline',
		start(src) {
			return src.match(/--(.+?)--/)?.index;
		},
		tokenizer(src) {
			const match = src.match(/^--(.+?)--/);

			if (!match) return undefined;

			return {
				type: 'del',
				raw: match[0],
				text: match[1],
			};
		},

		renderer(token) {
			return `<del>${token.text}</del>`;
		},
	};
}
