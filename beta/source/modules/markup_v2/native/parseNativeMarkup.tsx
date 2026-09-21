// Module ID: 8368
// Function ID: 8369
// Name: parseNativeMarkup
// Dependencies: [12, 8369, 8372, 2]
// Exports: default

// Module 8368 (parseNativeMarkup)
import _mod8369 from "module_8369" /* 8369 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8372 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod8369.parse);
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
