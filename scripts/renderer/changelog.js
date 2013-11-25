/* Highlight labels in changelog in markdown format
 * process: input.changelog -> highlight labels -> markdown -> output.html
 */

// list of labels to replace
// Labels can only contain alphabets, numbers, underscore and hyphen and must
// not begin with a number.
var changelog_labels = [
	"Add",
	"Fixed"
    "General"
    "Windows"
    "Linux"
    "Packaging"
    "UI"
    "Improve"
];

var highlight_label = function(text, label) {
	var re = new RegExp('\\[' + label + '\\]', 'g');
	var class_name = "changelog-tag-" + label.toLowerCase();
	return text.replace(re, '<span class="changelog-tag ' + class_name + '">'
			+ label
			+ '</span>');
}

var highlight_article = function(text) {
	for (var i=0; i<changelog_labels.length; i++) {
		text = highlight_label(text, changelog_labels[i]);
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
