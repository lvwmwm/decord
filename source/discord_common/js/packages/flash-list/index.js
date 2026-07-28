// Module ID: 6655
// Function ID: 58645
// Name: useModalDismissGuardRefreshControl
// Dependencies: [31, 27, 33, 477, 5389, 4026, 5388, 5223, 2]

// Module 6655 (useModalDismissGuardRefreshControl)
import importAllResult from "result";
import { RefreshControl } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_4026";
import importDefaultResult1 from "module_4026";
import set from "jsxProd";

const require = arg1;
function useModalDismissGuardRefreshControl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return importAllResult.useMemo(() => {
    if (null == closure_1) {
      if (true === callback) {
        let obj = callback(outer1_2[3]);
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: outer1_7, tintColor: "transparent" };
          let tmp4 = outer1_5(outer1_4, obj);
        }
        return tmp4;
      }
    }
    tmp4 = closure_1;
  }, items);
}
let tmp2;
if (set.isAndroid()) {
  let obj = { disabled: true };
  tmp2 = obj;
}
let closure_6 = tmp2;
function noop() {

}
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(5389).FlashList, { maintainVisibleContentPosition: closure_6, ref });
});
let closure_8 = require("module_4026").createAnimatedComponent(require("module_5389").FlashList);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={closure_6} ref={arg1} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  let obj = Object.create(null);
  obj.preventNativeModalDismiss = 0;
  const merged = Object.assign(arg0, obj);
  obj = { ref, maintainVisibleContentPosition: closure_6, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(require(5389).FlashList, { ref, maintainVisibleContentPosition: closure_6, masonry: true });
});
let closure_9 = require("module_4026").createAnimatedComponent(require("module_5389").FlashList);
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  let obj = Object.create(null);
  obj.preventNativeModalDismiss = 0;
  obj.refreshControl = 0;
  const merged = Object.assign(arg0, obj);
  obj = { ref, maintainVisibleContentPosition: closure_6 };
  const tmp3 = useModalDismissGuardRefreshControl(preventNativeModalDismiss, refreshControl);
  const merged1 = Object.assign(merged);
  obj["refreshControl"] = tmp3;
  return jsx(importDefault(5388), { ref, maintainVisibleContentPosition: closure_6 });
});
const result = set.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10073 in require("module_5389")) {
  let tmp9 = key10073;
  arg5[key10073] = require("module_5389")[key10073];
  continue;
}

export const defaultMVCPConfig = tmp2;
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = importAllResult.forwardRef((arg0, ref) => {
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  let obj = Object.create(null);
  obj.preventNativeModalDismiss = 0;
  obj.refreshControl = 0;
  const merged = Object.assign(arg0, obj);
  obj = { ref, maintainVisibleContentPosition: closure_6, masonry: true, renderScrollComponent: require(5223) /* BottomSheetModal */.BottomSheetScrollView };
  const merged1 = Object.assign(merged);
  obj["refreshControl"] = useModalDismissGuardRefreshControl(preventNativeModalDismiss, refreshControl);
  return <closure_9 ref={arg1} maintainVisibleContentPosition={closure_6} masonry renderScrollComponent={require(5223) /* BottomSheetModal */.BottomSheetScrollView} />;
});
