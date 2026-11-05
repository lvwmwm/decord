// Module ID: 16227
// Function ID: 16228
// Name: StylesheetUtils
// Dependencies: [2155, 2]
// Exports: getClass

// Module 16227 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => {
    const obj = StringUtils;
    return acc + obj.upperCaseFirstChar(item);
  }, "")];
  return null != tmp ? tmp : undefined;
}
