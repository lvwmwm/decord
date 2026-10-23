// Module ID: 8489
// Function ID: 8490
// Name: parseNativeMarkup
// Dependencies: [12, 8490, 8493, 2]
// Exports: default

// Module 8489 (parseNativeMarkup)
import _mod8490 from "module_8490" /* 8490 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8493 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_2 = module_12.once(() => _mod8490.parse);
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
