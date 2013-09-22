http://qwinff.github.io source files

Release Notes
-------------

Release notes of each version is posted as a `post` in `source/_posts/`.  Each
release note post must contain `qwinff_release`, the integer representation of
the version number, in its front matter. `qwinff_release` is defined as
`major * 100 + minor * 10 + patch`; for example, the `qwinff_release` of version
  `0.1.9` is `19`.

The following is an example release note post:

```
title: QWinFF 0.1.9 released
date: 2013-09-10 14:27:52
qwinff_release: 19
---
Version 0.1.9 (2013-09-10)

- Added output formats: asf, swf, aiff, flac, au, mp2
```

UpdateInfo Xml Generator
------------------------

The release note post with the latest `qwinff_release` will be used to generate
a updateinfo xml file, which is used to provide version information to QWinFF
update finder. This functionality is implemented as a plugin located at
`scripts/generator/updateinfo.js`.

#### Options

The following options can be set in `_config.yml`:

- `project.updateinfo_xml`: file name of the generated updateinfo xml
- `project.download_page`: path of the download page
- `project.download_url`: template of download url, contains `{VERSION}` and `{FILE}` placeholders.
- `project.files.*`: filename templates of each download, contains `{VERSION}` placeholder; see below for example

Example settings in `_config.yml`:

```
project:
  updateinfo_xml: latest-version.xml
  download_page: downloads.html
  download_url: http://sourceforge.net/projects/qwinff/files/release/v{VERSION}/{FILE}/download
  files:
    tbz2: qwinff_{VERSION}.tar.bz2
    tgz: qwinff_{VERSION}.tar.gz
    w32_install: qwinff_{VERSION}-setup.exe
    w32_portable: qwinff-portable-{VERSION}.7z
```
