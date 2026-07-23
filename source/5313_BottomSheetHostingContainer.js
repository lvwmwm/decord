// Module ID: 5313
// Function ID: 45828
// Name: BottomSheetHostingContainer
// Dependencies: [31, 27, 33, 5314, 5194, 5190]

// Module 5313 (BottomSheetHostingContainer)
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ useMemo: closure_2, useRef: closure_3 } = result);
({ StatusBar: closure_4, View: closure_5 } = get_ActivityIndicator);
const memoResult = result.memo(function BottomSheetHostingContainerComponent(bottomInset) {
  let dependencyMap;
  let require;
  let topInset;
  ({ containerHeight: require, containerOffset: dependencyMap, topInset } = bottomInset);
  let num = 0;
  if (undefined !== topInset) {
    num = topInset;
  }
  bottomInset = bottomInset.bottomInset;
  let num2 = 0;
  if (undefined !== bottomInset) {
    num2 = bottomInset;
  }
  const shouldCalculateHeight = bottomInset.shouldCalculateHeight;
  const detached = bottomInset.detached;
  const style = bottomInset.style;
  const tmp2 = num2(null);
  const jsx = tmp2;
  let items = [style, detached, num, num2];
  let obj = require(5194) /* useBottomSheet */;
  obj = { ref: tmp2, pointerEvents: "box-none" };
  let stableCallback;
  if (tmp) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = tmp2.current;
      if (null != current) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (outer1_1.value) {
            const obj = { top: null, left: 0, right: 0 };
            let num2 = 0;
            if (null != arg5) {
              num2 = arg5;
            }
            obj.top = num2;
            let num4 = 0;
            if (null != arg5) {
              num4 = arg5;
            }
            const currentHeight = detached.currentHeight;
            let num5 = 0;
            const sum = num4 + height;
            if (null != currentHeight) {
              num5 = currentHeight;
            }
            obj.bottom = Math.max(0, outer2_0(outer2_1[5]).WINDOW_HEIGHT - (sum + num5));
            outer1_1.value = obj;
            const tmp = outer1_1;
          }
        });
      }
    });
  }
  obj.onLayout = stableCallback;
  obj.style = num(() => {
    const items = [style, outer1_0(outer1_1[3]).styles.container, ];
    const obj = { top: num, bottom: num2 };
    let str = "hidden";
    if (detached) {
      str = "visible";
    }
    obj.overflow = str;
    items[2] = obj;
    return items;
  }, items);
  obj.collapsable = true;
  obj.children = bottomInset.children;
  return <style ref={tmp2} pointerEvents="box-none" />;
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;
