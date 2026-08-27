// Module ID: 16766
// Function ID: 16767
// Name: FORMAT_RE
// Dependencies: [2]

// Module 16766 (FORMAT_RE)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/Constants.tsx");

export const FORMAT_RE = /\{.+?\}/;
export const MARKDOWN_RE = /[~*_]{2}.+?[~*_]{2}|\[.*?\]\(.+?\)|\n\n/;
export const UNSAFE_RE = /!!/;
export const UNSAFE_RE_ALL = /!!/g;
