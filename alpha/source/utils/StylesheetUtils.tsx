// Module ID: 15193
// Function ID: 15194
// Name: StylesheetUtils
// Dependencies: [2034, 2]
// Exports: getClass

// Module 15193 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2034 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => {
    const obj = StringUtils;
    return acc + obj.upperCaseFirstChar(item);
  }, "")];
  return null != tmp ? tmp : undefined;
};
