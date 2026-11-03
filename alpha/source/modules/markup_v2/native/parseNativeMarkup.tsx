// Module ID: 8715
// Function ID: 8716
// Name: parseNativeMarkup
// Dependencies: [12, 8716, 8720, 2]
// Exports: default

// Module 8715 (parseNativeMarkup)
import Syntax from "Syntax" /* 8716 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8720 */;
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
