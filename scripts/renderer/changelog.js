/* Highlight labels in changelog in markdown format
 * process: input.changelog -> highlight labels -> markdown -> output.html
 */

var changelog_labels = [
	["add", '#00ff00'],
	["fixed", '#ff0000'],
	[], // do not remove this line
];

var highlight_label = function(text, label, color) {
	var pattern = '[' + label + ']';
	return text.replace(pattern, '<span style="color:' + color + '">' + pattern + '</span>');
}

var highlight_article = function(text) {
	for (var i=0; i<changelog_labels.length-1; i++) {
		text = highlight_label(text, changelog_labels[i][0], changelog_labels[i][1]);
	}
	return text;
}

// import synchronous renderers
markdown = hexo.extend.renderer.list(true)["md"];

// register renderer plugin
hexo.extend.renderer.register('changelog', 'html', function(data, options) {
	// highlight labels
	var text = highlight_article(data.text);
	// process with markdown (marked)
	result = markdown({text: text}, options);
	return result;
}, true);
