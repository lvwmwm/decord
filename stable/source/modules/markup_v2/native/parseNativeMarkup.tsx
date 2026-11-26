// Module ID: 9365
// Function ID: 9366
// Name: parseNativeMarkup
// Dependencies: [12, 9366, 9370, 2]
// Exports: default

// Module 9365 (parseNativeMarkup)
import Syntax from "Syntax" /* 9366 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 9370 */;
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
