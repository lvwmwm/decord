// Module ID: 16415
// Function ID: 16416
// Name: useTryItOutUpsellScrollTracking
// Dependencies: [19, 5090, 2]
// Exports: default

// Module 16415 (useTryItOutUpsellScrollTracking)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/useTryItOutUpsellScrollTracking.tsx");

export default function useTryItOutUpsellScrollTracking(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(true);
  let closure_3 = react.useRef({ contentHeight: 0, viewportHeight: 0, tryItOutSectionHeight: 0 });
  const items = [arg0, sharedValue, arg1];
  const callback = react.useCallback((arg0) => {
    let contentHeight;
    let viewportHeight;
    const merged = Object.assign(ref.current, arg0);
    ({ contentHeight, viewportHeight } = ref.current);
    if (contentHeight > 0) {
      if (viewportHeight > 0) {
        const _Math = Math;
        const diff = contentHeight - viewportHeight;
        const result = sharedValue.set(Math.max(0, diff - closure_0.get()) > tmp2 + closure_1);
      }
    }
  }, items);
  const items1 = [sharedValue, callback];
  return react.useMemo(() => {
    let obj = {
      isScrolledAboveTryItOutSection: sharedValue,
      onScroll(contentHeight) {
        const obj = { contentHeight: contentHeight.contentSize.height, viewportHeight: contentHeight.layoutMeasurement.height };
        return callback(obj);
      },
      onContentSizeChange(arg0, contentHeight) {
        const obj = { contentHeight };
        return callback(obj);
      },
      onScrollViewLayout(nativeEvent) {
        const obj = { viewportHeight: nativeEvent.nativeEvent.layout.height };
        return callback(obj);
      },
      onTryItOutSectionLayout(nativeEvent) {
        const obj = { tryItOutSectionHeight: nativeEvent.nativeEvent.layout.height };
        return callback(obj);
      }
    };
    return obj;
  }, items1);
};
