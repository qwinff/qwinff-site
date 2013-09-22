title: Translator's Notes
date: 2013-09-22 00:05:03
---

Introduction
------------

QWinFF uses the translation mechanism provided by Qt. Translatable strings in the source code are enclosed by a special macro, and are later extracted and converted into a *ts* file automatically. This *ts* file can then be edited by translators to provide translated text. We recommend using [Qt Linguist](http://qt-apps.org/content/show.php/Qt+Linguist+Download?content=89360) to edit the *ts* file, because it provides some handy functions like keyboard shortcuts and translation memory. If you insist on editing the *ts* file manually, please read the instructions below.

Translation File Header
-----------------------

In the beginning of the file are the following lines:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="zh_TW">
```

The first two lines indicates that the file is an xml file. Please leave these two lines intact. The Third line is the beginning tag of the translation file, the _language_ attribute records the target language/country of this file. Please fill in the code of the language/country you are translating into (zh_TW in this case). The code is consisted with a language code and a country code separated by an underscore. For example, Chinese(zh) used in Taiwan(TW) is encoded as zh_TW. ([List of language codes](http://www.gnu.org/software/gettext/manual/gettext.html#Language-Codes), [List of country codes](http://www.gnu.org/software/gettext/manual/gettext.html#Country-Codes))

Messages
--------

If you scroll down furthur, you will see many message tags, for example:

```xml
 <message>
	  <location filename="../ui/aboutdialog.ui" line="51"/>
	  <source>Translators</source>
	  <translation type="unfinished"></translation>
 </message>
```

Each message tag represents a translatable string. The original text is enclosed with a `<source>`. Please fill in the translation in the `<translation>` tag and remove `type="unfinished"`, like this:
```xml
 <message>
	  <location filename="../ui/aboutdialog.ui" line="51"/>
	  <source>Translators</source>
	  <translation>翻譯者</translation>
 </message>
```

Extra Comment
-------------

In some messages, you may see an additional `<extracomment>` tag which provides explanation or disambiguation to the original text. The text in the tag is intended to help translators better understand the meaning of the source text, so please don't translate them. For example:

```xml
 <message>
	  <location filename="../ui/convertlist.cpp" line="217"/>
	  <source>%1: %2</source>
	  <extracomment>FieldName: Value</extracomment>
	  <translation></translation>
 </message>
```

Formatting Strings and Escape Sequences
---------------------------------------

Some messages contains formatting strings or escape sequences, such as

```xml
    <message>
        <location filename="ui/poweroffdialog.cpp" line="120"/>
        <source>Operation Failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
```

or

```xml
    <message>
        <location filename="ui/poweroffdialog.cpp" line="144"/>
        <source>The computer will shutdown in &lt;b&gt;%1&lt;/b&gt; seconds</source>
        <translation type="unfinished"></translation>
    </message>
```

where `%1` is a formatting string, and `&lt;`, `&gt;`, `/b` are escape sequences. Please directly copy and insert them into the translated message. For example:

```xml
    <message>
        <location filename="ui/poweroffdialog.cpp" line="120"/>
        <source>Operation Failed: %1</source>
        <translation>執行失敗: %1</translation>
    </message>
    <message>
        <location filename="ui/poweroffdialog.cpp" line="144"/>
        <source>The computer will shutdown in &lt;b&gt;%1&lt;/b&gt; seconds</source>
        <translation>電腦將於 &lt;b&gt;%1&lt;/b&gt; 秒後關機</translation>
    </message>
```

Other Conditions
----------------

If you think that a string doesn't need to be translated, just remove `type="unfinished"` and leave the translation empty. The program will use the original text. Please keep anything else unmodified unless you are certain about what you are doing.
