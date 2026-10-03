// Module ID: 13897
// Function ID: 13898
// Name: StylesheetUtils
// Dependencies: [2018, 2]
// Exports: getClass

// Module 13897 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2018 */;
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
