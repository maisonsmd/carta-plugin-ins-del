import type { Plugin as CartaPlugin } from 'carta-md';
import remarkIns from 'remark-ins';

export const insdel = (): CartaPlugin => {
	return {
		transformers: [
			{
				execution: 'sync',
				type: 'remark',
				transform: ({ processor }) => {
					processor.use(remarkIns);
				},
			},
		],
		grammarRules: [
			{
				name: 'ins',
				type: 'inline',
				definition: {
					match: '\\+{2}[^+]+?\\+{2}',
					name: 'markup.ins.markdown',
				},
			},
			// Carta already have highlight for del, so we don't need to add it here
		],
		highlightingRules: [
			{
				light: {
					scope: 'markup.ins',
					settings: {
						foreground: '#1fa81f',
					},
				},
				dark: {
					scope: 'markup.ins',
					settings: {
						foreground: '#1fa81f',
					},
				},
			},
		],
	};
};
