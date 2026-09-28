// Module ID: 7551
// Function ID: 7552
// Name: parseNativeMarkup
// Dependencies: [12, 7552, 7555, 2]
// Exports: default

// Module 7551 (parseNativeMarkup)
import _mod7552 from "module_7552" /* 7552 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 7555 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod7552.parse);
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
