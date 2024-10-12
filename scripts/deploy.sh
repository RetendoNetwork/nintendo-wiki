#!/bin/bash

npm run build

npx gh-pages -d build

git checkout -b gh-pages
git push origin gh-pages