// Module ID: 8698
// Function ID: 8699
// Name: MarkupInvisibleUnicode
// Dependencies: [2]
// Exports: stripLeadingInvisibleUnicode

// Module 8698 (MarkupInvisibleUnicode)
import size from "module_2" /* 2 */;

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = size.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export function stripLeadingInvisibleUnicode(value) {
  return value.replace(re0, "");
}
