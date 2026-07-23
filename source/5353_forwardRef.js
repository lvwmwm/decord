// Module ID: 5353
// Function ID: 45953
// Name: forwardRef
// Dependencies: [29, 31, 33, 5354, 5351]

// Module 5353 (forwardRef)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";
import module_5354 from "module_5354";

let closure_7;
let memo;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
let closure_3 = ["data"];
const forwardRef = result.forwardRef;
({ useMemo: closure_7, memo } = result);
const memoResult = memo(forwardRef((focusHook, ref) => {
  focusHook = focusHook.focusHook;
  const scrollEventsHandlersHook = focusHook.scrollEventsHandlersHook;
  const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
  callback2(() => {
    if (!outer1_4) {
      throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
    }
  }, []);
  const items = [focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment];
  let tmp = callback(focusHook, enableFooterMarginAdjustment);
  return <module_5354.FlashList {...Object.assign({
    ref: arg1,
    renderScrollComponent: callback2(() => outer1_6((arg0, ref) => {
      let obj = { ref };
      obj = { focusHook: outer1_0, scrollEventsHandlersHook: outer1_1, enableFooterMarginAdjustment: outer1_2 };
      const tmp = outer2_5(arg0, outer2_3);
      return outer2_8(focusHook(scrollEventsHandlersHook[4]), Object.assign(obj, tmp, obj));
    }), items)
  }, tmp)} />;
}));

export default memoResult;
export const BottomSheetFlashList = memoResult;
