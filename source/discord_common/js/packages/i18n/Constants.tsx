// Module ID: 16784
// Function ID: 16785
// Name: FORMAT_RE
// Dependencies: [2]

// Module 16784 (FORMAT_RE)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/Constants.tsx");

export const FORMAT_RE = /\{.+?\}/;
export const MARKDOWN_RE = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/;
export const UNSAFE_RE = /!!/;
export const UNSAFE_RE_ALL = /!!/g;
