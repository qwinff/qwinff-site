/* Combining markdown and ejs
 * process: input.mejs -> ejs -> markdown -> output.html
 */

// import synchronous renderers
markdown = hexo.extend.renderer.list(true)["md"];
ejs = hexo.extend.renderer.list(true)["ejs"];

// register renderer plugin
hexo.extend.renderer.register('mejs', 'html', function(data, options) {
	// process with ejs
	var result = ejs(data, options);
	// process with markdown (marked)
	result = markdown({text: result}, options);
	return result;
}, true);
