# Static-Site-Minified-Generator
This reposity using gulp tasks to compress js, css, images into a single folder destination. Help you creating a simple static site.

## Installation

1. Clone this reposity
2. Run `npm install -g gulp` (optional - just if you don't have install `gulp`)
3. Run `npm install`

## Deployment

Run `gulp` and start editing

## Project structure

`/src/` - where you store a source

    src
    *.html
    ---js
    ---scss
    ---images

`/dist/` - where you store a minified site

    dist
    *.html
    ---assets
    ---------js
    ---------css
    ---------images

## FAQ

*How to change `src` or `dist` folders?*
You can easily change it. After cloning this git, edit `gulpfile.js` before running `npm install`

