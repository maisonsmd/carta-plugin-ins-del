![carta-plugin-ins-del](https://img.shields.io/npm/v/carta-plugin-ins-del)

# carta-plugin-ins-del

`<ins>` and `<del>` tags support for [Carta](https://github.com/BearToCode/carta).

## Breaking changes in v2

- Update to support Carta v4
- Now this plugin is just a wrapper for [remark-ins](https://github.com/ipikuka/remark-ins)
- For del tag, use double tilde `~~` instead of double hyphen `--` to align with the rest of the markdown parsers

## Installation

```shell
npm i carta-plugin-ins-del
```

## Setup

### Styles

No default style are applied, you need to apply your own.  
Example custom styles:

```css
.markdown-body ins {
	text-decoration: none;
	background-color: #d4fcbc;
}

.markdown-body del {
	text-decoration: line-through;
	background-color: #fbb;
	color: #555;
}
```

### Extension

```svelte
<script>
	import { Carta, CartaEditor } from 'carta-md';
	import { insdel } from 'carta-plugin-ins-del';

	const carta = new Carta({
		extensions: [insdel()],
	});
</script>

<CartaEditor {carta} />
```

## Usage

This snippet:

```
There is ~~nothing~~ ++no code++ either good or bad, but ~~thinking~~ ++running it++ makes it so.
```

will generate this output:

![output](./static/output.png)
