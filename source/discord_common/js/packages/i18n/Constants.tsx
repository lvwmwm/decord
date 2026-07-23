// Module ID: 15949
// Function ID: 123216
// Name: FORMAT_RE
// Dependencies: [2]

// Module 15949 (FORMAT_RE)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/Constants.tsx");

export const FORMAT_RE = /\{.+?\}/;
export const MARKDOWN_RE = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/;
export const UNSAFE_RE = /!!/;
export const UNSAFE_RE_ALL = /!!/g;
