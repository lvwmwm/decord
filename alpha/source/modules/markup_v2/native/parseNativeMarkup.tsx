// Module ID: 7543
// Function ID: 7544
// Name: parseNativeMarkup
// Dependencies: [12, 7544, 7547, 2]
// Exports: default

// Module 7543 (parseNativeMarkup)
import _mod7544 from "module_7544" /* 7544 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 7547 */;
import apply from "module_12" /* 12 */;

require = fn;
let closure_2 = apply.once(() => _mod7544.parse);
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
