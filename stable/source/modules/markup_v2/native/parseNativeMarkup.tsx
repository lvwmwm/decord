// Module ID: 8523
// Function ID: 8524
// Name: parseNativeMarkup
// Dependencies: [12, 8524, 8527, 2]
// Exports: default

// Module 8523 (parseNativeMarkup)
import _mod8524 from "module_8524" /* 8524 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8527 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_2 = module_12.once(() => _mod8524.parse);
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
