// Module ID: 12999
// Function ID: 13000
// Name: StylesheetUtils
// Dependencies: [2010, 2]
// Exports: getClass

// Module 12999 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
