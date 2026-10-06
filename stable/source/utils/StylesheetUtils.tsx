// Module ID: 12128
// Function ID: 12129
// Name: StylesheetUtils
// Dependencies: [2017, 2]
// Exports: getClass

// Module 12128 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2017 */;
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
