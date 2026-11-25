// Module ID: 15387
// Function ID: 15388
// Name: StylesheetUtils
// Dependencies: [2152, 2]
// Exports: getClass

// Module 15387 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2152 */;
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
