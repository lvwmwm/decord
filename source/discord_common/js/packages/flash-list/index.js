// Module ID: 7527
// Function ID: 60003
// Name: defaultMVCPConfig
// Dependencies: [31, 33, 477, 5354, 3991, 5353, 5189, 2]

// Module 7527 (defaultMVCPConfig)
import importAllResult from "result";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_3991";
import importDefaultResult1 from "module_3991";
import set from "set";

const require = arg1;
let tmp2;
if (set.isAndroid()) {
  const obj = { disabled: true };
  tmp2 = obj;
}
let closure_4 = tmp2;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(5354).FlashList, { maintainVisibleContentPosition: closure_4, ref });
});
let closure_5 = require("module_3991").createAnimatedComponent(require("module_5354").FlashList);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_5 maintainVisibleContentPosition={closure_4} ref={arg1} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(5354).FlashList, { ref, maintainVisibleContentPosition: closure_4, masonry: true });
});
let closure_6 = require("module_3991").createAnimatedComponent(require("module_5354").FlashList);
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(importDefault(5353), { ref, maintainVisibleContentPosition: closure_4 });
});
const result = set.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10067 in require("module_5354")) {
  let tmp9 = key10067;
  arg5[key10067] = require("module_5354")[key10067];
  continue;
}

export const defaultMVCPConfig = tmp2;
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_6 ref={arg1} maintainVisibleContentPosition={closure_4} masonry renderScrollComponent={require(5189) /* BottomSheetModal */.BottomSheetScrollView} />;
});
