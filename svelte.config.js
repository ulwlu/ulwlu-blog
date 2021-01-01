const sveltePreprocess = require('svelte-preprocess');
const postcss = require("./postcss.config");
module.exports = {
  preprocess: [
		sveltePreprocess({
			defaults: {
        script: 'typescript',
				style: 'postcss',
			},
      postcss,
		}),
	],
	kit: {
		adapter: '@sveltejs/adapter-node',
		target: '#svelte'
	}
};
