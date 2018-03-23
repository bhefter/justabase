# justabase
When you want to spin something up quickly, you just need a good base. This is my personal quickstart boilerplate for small, simple projects and rapid prototypes. This is not a framework. There are no helper methods or grid utilities. This is just a quick starting point.

It uses [TypeScript](https://github.com/Microsoft/TypeScript) and [SASS](http://sass-lang.com/) for JavaScript and CSS, respectively. It also includes [Sanitize](https://github.com/jonathantneal/sanitize.css) for CSS resets, [SassLint](https://github.com/sasstools/sass-lint) for Sass linting, and [TSLint](https://github.com/palantir/tslint) for TypeScript linting. [Webpack](https://github.com/webpack/webpack) is used for bundling and running a local dev server. [Closure Compiler JS](https://github.com/google/closure-compiler-js) is used for js compilation when building.

I also include some initial TypeScript files and utility styles that help get moving more quickly.

## Installation
Requires [NodeJS](https://nodejs.org).

Clone/download the repo and run `npm install` from the project root directory.

## Usage
Run `npm run dev` at the project root to spin up a local dev server at `http://localhost:9001/`.

Source js/css and other assets are located in the `src` folder at the project root.

HTML files live within the `site` folder at the project root.

Run `npm run build` at the project root to create a static build in the `static` folder within the `site` folder at the project root.

## License
[MIT](http://www.opensource.org/licenses/mit-license.php)