// Module ID: 8527
// Function ID: 8528
// Name: parseNativeMarkup
// Dependencies: [12, 8528, 8532, 2]
// Exports: default

// Module 8527 (parseNativeMarkup)
import Syntax from "Syntax" /* 8528 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8532 */;
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
