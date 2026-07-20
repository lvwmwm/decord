// Module ID: 15813
// Function ID: 120932
// Name: FORMAT_RE
// Dependencies: []

// Module 15813 (FORMAT_RE)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/i18n/Constants.tsx");

export const FORMAT_RE = /\{.+?\}/;
export const MARKDOWN_RE = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/;
export const UNSAFE_RE = /!!/;
export const UNSAFE_RE_ALL = /!!/g;
