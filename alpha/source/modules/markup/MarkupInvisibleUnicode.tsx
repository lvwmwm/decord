// Module ID: 9305
// Function ID: 9306
// Name: MarkupInvisibleUnicode
// Dependencies: [2]
// Exports: stripLeadingInvisibleUnicode

// Module 9305 (MarkupInvisibleUnicode)
import size from "module_2" /* 2 */;

const re0 = /^[\u200B-\u200D\uFEFF\u180E\u061C]+/;
const result = size.fileFinishedImporting("modules/markup/MarkupInvisibleUnicode.tsx");

export const INVISIBLE_CHAR_REGEX = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
export function stripLeadingInvisibleUnicode(value) {
  return value.replace(re0, "");
}
