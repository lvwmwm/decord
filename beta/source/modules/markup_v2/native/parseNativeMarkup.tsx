// Module ID: 7555
// Function ID: 7556
// Name: parseNativeMarkup
// Dependencies: [12, 7556, 7559, 2]
// Exports: default

// Module 7555 (parseNativeMarkup)
import _mod7556 from "module_7556" /* 7556 */;
import transformNativeMarkupNode from "transformNativeMarkupNode" /* 7559 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_2 = module_12.once(() => _mod7556.parse);
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
