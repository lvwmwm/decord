// Module ID: 8400
// Function ID: 8401
// Name: parseNativeMarkup
// Dependencies: [12, 8401, 8404, 2]
// Exports: default

// Module 8400 (parseNativeMarkup)
import _mod8401 from "module_8401" /* 8401 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8404 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod8401.parse);
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
