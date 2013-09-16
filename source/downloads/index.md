title: Downloads
date: 2013-09-15 17:14:03
---

Downloads of QWinFF are hosted at SourceForge: https://sourceforge.net/projects/qwinff/files/.

Translation files included in the release are sometimes out-of-date because they are frequently updated. You can download the latest translation files ([20130911](http://sourceforge.net/projects/qwinff/files/translation/qwinff-ts-20130911.zip)) and copy all the ``*.qm`` files to the translation file directory (typically /usr/share/qwinff/translations on GNU/Linux and C:\Program Files (x86)\QWinFF\translations on Windows).

QWinFF depends on the following programs at runtime:

- ffmpeg (required)
- ffprobe (required)
- ffplay (optional, for previewing audio/video cutting)
- sox (optional, for adjusting audio speed)

The current version is 0.1.9, released on September 10, 2013.

## Source Code

[tar.bz2 format](http://sourceforge.net/projects/qwinff/files/release/v0.1.9/qwinff_0.1.9.tar.bz2/download)
[tar.gz format](http://sourceforge.net/projects/qwinff/files/release/v0.1.9/qwinff_0.1.9.tar.gz/download)

## Windows

[QWinFF Installer](http://sourceforge.net/projects/qwinff/files/release/v0.1.9/qwinff_0.1.9-setup.exe/download): install QWinFF on your computer
[QWinFF Portable](http://sourceforge.net/projects/qwinff/files/release/v0.1.9/qwinff-portable-0.1.9.7z/download): Portable version that doesn't require installation (7zip archive)

## Ubuntu/Mint

PPA for QWinFF is available at https://launchpad.net/~lzh9102/+archive/qwinff. You can install from the ppa by the following command:

``` bash
sudo apt-add-repository ppa:lzh9102/qwinff
sudo apt-get update
sudo apt-get install qwinff
```

## openSUSE

QWinFF packages for openSUSE are provided via openSUSE Build Service repositories. Supported releases are

- openSUSE 12.1
- openSUSE 12.2
- openSUSE 12.3

``` bash
# get opensuse release
RELEASE=`cat /etc/SuSE-release | sed -n "s/VERSION = \(.*\)$/openSUSE_\1/p"`

# add repository
sudo zypper addrepo http://download.opensuse.org/repositories/home:lzh9102/$RELEASE/home:lzh9102.repo
sudo zypper refresh

# install qwinff
sudo zypper install qwinff
```

## Fedora

QWinFF packages for Fedora are also available via openSUSE Build Service. The following releases are supported currently:

- Fedora 17
- Fedora 18
- Fedora 19

However, FFmpeg is not included in the official repository of Fedora. The recommended way to install ffmpeg on Fedora is using the [rpm-fusion](http://rpmfusion.org/) repository. The complete installation process is as follow:

``` bash
# get fedora release
RELEASE=`cat /etc/fedora-release | grep -o '[0-9][0-9]*'`

# install rpm-fusion (for ffmpeg)
sudo yum install \
   "http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-${RELEASE}.noarch.rpm"

# add qwinff repo
sudo yum-config-manager --add-repo \
   "http://download.opensuse.org/repositories/home:/lzh9102/Fedora_${RELEASE}/home:lzh9102.repo"

# install qwinff
sudo yum install qwinff
```
