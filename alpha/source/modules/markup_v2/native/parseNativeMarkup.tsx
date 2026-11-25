// Module ID: 14151
// Function ID: 14152
// Name: parseNativeMarkup
// Dependencies: [12, 14152, 14156, 2]
// Exports: default

// Module 14151 (parseNativeMarkup)
import Syntax from "Syntax" /* 14152 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 14156 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_2 = module_12.once(() => Syntax.parse);
let result = size.fileFinishedImporting("modules/markup_v2/native/parseNativeMarkup.tsx");

export default function parseNativeMarkupToAST(arg0, arg1, channelId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const obj = transformNativeMarkupNode;
  const result = obj.transformNativeBlocks(closure_2()(arg0), channelId);
  let tmpResult = result;
  if (null != tmp) {
    tmpResult = tmp(result, arg1, false);
  }
  return tmpResult;
};
