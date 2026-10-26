// Module ID: 15385
// Function ID: 15386
// Name: StylesheetUtils
// Dependencies: [2033, 2]
// Exports: getClass

// Module 15385 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2033 */;
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
