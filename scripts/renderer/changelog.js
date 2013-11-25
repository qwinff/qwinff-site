/* Highlight labels in changelog in markdown format
 * process: input.changelog -> highlight labels -> markdown -> output.html
 */
// [tag,color,bg-color]
var changelog_labels = [
	["add", '#688E1C', '#C6F26F'],
	["fixed", '#aa0000', '#ffbbbb'],
	[], // do not remove this line
];

var highlight_label = function(text, label, color, bgcolor) {
	var pattern = '[' + label + ']';
	var re = new RegExp('\\[' + label + '\\]', 'g');
	return text.replace(re, '<span style=\'color:' + color + ';background-color:' + bgcolor + ';padding:1px 2px;border-radius:2px;font-weight:bold;text-transform:capitalize;\'>' + pattern + '</span>');
}

var highlight_article = function(text) {
	for (var i=0; i<changelog_labels.length-1; i++) {
		text = highlight_label(text, changelog_labels[i][0], changelog_labels[i][1], changelog_labels[i][2]);
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
