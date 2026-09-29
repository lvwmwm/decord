// Module ID: 8395
// Function ID: 8396
// Name: parseNativeMarkup
// Dependencies: [12, 8396, 8399, 2]
// Exports: default

// Module 8395 (parseNativeMarkup)
import _mod8396 from "module_8396" /* 8396 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8399 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod8396.parse);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup_v2/native/parseNativeMarkup.tsx");

export default function parseNativeMarkupToAST(arg0, arg1, channelId) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const result = transformNativeMarkupNode.transformNativeBlocks(closure_2()(arg0), channelId);
  let tmpResult = result;
  if (null != tmp) {
    tmpResult = tmp(result, arg1, false);
  }
  return tmpResult;
};
