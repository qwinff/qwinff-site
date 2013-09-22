/* qwinff update information xml generator
 * 
 * The updateinfo xml structure and format of each entry is as follows:
 *
 * QWinFFVersionInfo
 *	├── Name: human-readable version number. ex: 0.1.9
 *	├── VersionId: version number integer = major*100 + minor*10 + patch, ex: 19
 *	├── ReleaseDate: release date in yyyymmss format, ex: 20120910
 *	├── ReleaseNotes: release notes html, ex: <![CDATA[<ul><li>item1</li></ul>]]>
 *	├── DownloadPage: url to download webpage, ex: http://qwinff.github.io/downloads.html
 *	└── DownloadLinks
 *	    ├── WindowsInstaller: download url of windows installer
 *	    ├── WindowsPortable: download url of windows portable version
 *	    └── Source: download url of source code
 */

var extend = hexo.extend,
	 route = hexo.route;

// convert version number integer to major.minor.patch format
// ex: 19 -> 0.1.9
var get_human_readable_release = function(release_id) {
	var major = Math.floor(release_id / 100);
	var minor = Math.floor((release_id % 100) / 10);
	var patch = Math.floor(release_id % 10);
	return major + "." + minor + "." + patch;
}

var generate_updateinfo = function(post, locals) {
	var config = hexo.config;
	var release_id = post.qwinff_release;
	var release_name = get_human_readable_release(release_id);
	var release_date = post.date.format("YYYYMMDD");
	var release_notes = post.content; // processed content
	var download_page = config.root + config.project.download_page;
	var url_installer = "http://sourceforge.net/projects/qwinff/files/release/v{VERSION}/qwinff_{VERSION}-setup.exe/download".replace(/{VERSION}/g, release_name);
	var url_portable = "http://sourceforge.net/projects/qwinff/files/release/v{VERSION}/qwinff-portable-{VERSION}.7z/download".replace(/{VERSION}/g, release_name);
	var url_source = "http://sourceforge.net/projects/qwinff/files/release/v{VERSION}/qwinff_{VERSION}.tar.bz2/download".replace(/{VERSION}/g, release_name);

	// generate xml
	result = ["<?xml version=\"1.0\"?>", "<QWinFFVersionInfo>",
			 "<Name>" + release_name + "</Name>",
			 "<VersionId>" + release_id + "</VersionId>",
			 "<ReleaseDate>" + release_date + "</ReleaseDate>",
			 "<ReleaseNotes type=\"text/html\"><![CDATA[",
			 release_notes,
			 "]]></ReleaseNotes>",
			 "<DownloadPage>" + download_page + "</DownloadPage>",
			 "<DownloadLinks>",
			 "<WindowsInstaller>" + url_installer + "</WindowsInstaller>",
			 "<WindowsPortable>" + url_portable + "</WindowsPortable>",
			 "<Source>" + url_source + "</Source>",
			 "</DownloadLinks>",
			 "</QWinFFVersionInfo>"].join("\n");

	route.set(config.project.updateinfo_xml, result);
}

extend.generator.register(function(locals, render, callback) {
	var latest_release_post = null;
	var latest_id = 0;

	// find the latest post with qwinff_release in front-matter
	var posts = locals.posts.toArray();
	posts.forEach(function(post) {
		if (post.qwinff_release && post.qwinff_release > latest_id) {
			latest_id = post.qwinff_release;
			latest_release_post = post;
		}
	});

	// generate updateinfo xml if a post is found
	if (latest_release_post)
		generate_updateinfo(latest_release_post, locals);

	callback();
});

