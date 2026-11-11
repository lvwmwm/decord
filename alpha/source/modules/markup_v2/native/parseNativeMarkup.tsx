// Module ID: 9299
// Function ID: 9300
// Name: parseNativeMarkup
// Dependencies: [12, 9300, 9304, 2]
// Exports: default

// Module 9299 (parseNativeMarkup)
import Syntax from "Syntax" /* 9300 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 9304 */;
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
