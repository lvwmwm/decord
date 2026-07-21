// Module ID: 5089
// Function ID: 43439
// Name: BottomSheetHostingContainer
// Dependencies: []

// Module 5089 (BottomSheetHostingContainer)
const _module = require(dependencyMap[0]);
({ useMemo: closure_2, useRef: closure_3 } = _module);
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ StatusBar: closure_4, View: closure_5 } = _module1);
const jsx = require(dependencyMap[2]).jsx;
const memoResult = _module.memo(function BottomSheetHostingContainerComponent(bottomInset) {
  let topInset;
  ({ containerHeight: closure_0, containerOffset: closure_1, topInset } = bottomInset);
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
  const items = [style, detached, num, num2];
  let obj = require(dependencyMap[4]);
  obj = { ref: tmp2, pointerEvents: "box-none" };
  let stableCallback;
  if (tmp) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = tmp2.current;
      if (null != current) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (value.value) {
            const obj = { onLoadEnd: null, useInsertionEffect: 1, FAB_BUTTON_ICON_SIZE: 0.5 };
            let num2 = 0;
            if (null != arg5) {
              num2 = arg5;
            }
            obj.top = num2;
            let num4 = 0;
            if (null != arg5) {
              num4 = arg5;
            }
            const currentHeight = currentHeight.currentHeight;
            let num5 = 0;
            const sum = num4 + height;
            if (null != currentHeight) {
              num5 = currentHeight;
            }
            obj.bottom = Math.max(0, height(value[5]).WINDOW_HEIGHT - (sum + num5));
            value.value = obj;
            const tmp = value;
          }
        });
      }
    });
  }
  obj.onLayout = stableCallback;
  obj.style = num(() => {
    const items = [style, callback(closure_1[3]).styles.container, ];
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
  return <style {...obj} />;
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;
