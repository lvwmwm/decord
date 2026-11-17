// Module ID: 16623
// Function ID: 16624
// Name: StylesheetUtils
// Dependencies: [2153, 2]
// Exports: getClass

// Module 16623 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2153 */;
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
