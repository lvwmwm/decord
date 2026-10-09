// Module ID: 14316
// Function ID: 14317
// Name: StylesheetUtils
// Dependencies: [2031, 2]
// Exports: getClass

// Module 14316 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2031 */;
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
