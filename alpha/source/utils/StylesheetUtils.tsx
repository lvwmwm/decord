// Module ID: 15256
// Function ID: 15257
// Name: StylesheetUtils
// Dependencies: [2151, 2]
// Exports: getClass

// Module 15256 (StylesheetUtils)
import StringUtils from "StringUtils" /* 2151 */;
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
