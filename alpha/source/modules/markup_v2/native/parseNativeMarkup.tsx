// Module ID: 8148
// Function ID: 8149
// Name: parseNativeMarkup
// Dependencies: [12, 8149, 8152, 2]
// Exports: default

// Module 8148 (parseNativeMarkup)
import _mod8149 from "module_8149" /* 8149 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 8152 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_2 = module_12.once(() => _mod8149.parse);
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
