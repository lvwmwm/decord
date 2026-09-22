// Module ID: 5203
// Function ID: 5204
// Name: MarkupInvisibleUnicode
// Dependencies: [2]
// Exports: stripLeadingInvisibleUnicode

// Module 5203 (MarkupInvisibleUnicode)
import size from "module_2" /* 2 */;

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = size.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export const stripLeadingInvisibleUnicode = function stripLeadingInvisibleUnicode(value) {
  return value.replace(re0, "");
};
