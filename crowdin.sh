#!/bin/sh

rm -rf i18n
mkdir i18n
cd i18n
curl -sS https://api.crowdin.com/api/project/dragonfruit/download/all.zip\?key\=$key > crowdin.zip
unzip crowdin.zip