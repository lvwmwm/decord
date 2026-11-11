// Module ID: 16470
// Function ID: 16471
// Name: StylesheetUtils
// Dependencies: [2150, 2]
// Exports: getClass

// Module 16470 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2150 */;
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
