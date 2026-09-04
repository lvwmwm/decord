// Module ID: 5083
// Function ID: 5084
// Name: INVISIBLE_CHAR_REGEX
// Dependencies: [2]
// Exports: stripLeadingInvisibleUnicode

// Module 5083 (INVISIBLE_CHAR_REGEX)
import set from "set" /* 2 */;

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = set.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export const stripLeadingInvisibleUnicode = function stripLeadingInvisibleUnicode(str) {
  return str.replace(closure_0, "");
};
