// Module ID: 12942
// Function ID: 12943
// Name: StylesheetUtils
// Dependencies: [2009, 2]
// Exports: getClass

// Module 12942 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
