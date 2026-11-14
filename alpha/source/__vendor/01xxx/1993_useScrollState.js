// Module ID: 1993
// Function ID: 1994
// Name: useScrollState
// Dependencies: [19, 1655, 1971]
// Exports: default

// Module 1993 (useScrollState)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1971 from "module_1971" /* 1971 */;
import react from "react" /* 19 */;

let c2;
let c3;
({ useCallback: c2, useEffect: c3 } = react);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
let closure_5 = { code: "(function pnpm_useScrollStateTs1(event){let[offset,layout,size]=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;})" };

export default function _default(arg0) {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = _mod1655;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = _mod1655;
  const sharedValue1 = obj2.useSharedValue({ width: 0, height: 0 });
  const obj3 = _mod1655;
  const sharedValue2 = obj3.useSharedValue({ width: 0, height: 0 });
  const obj4 = _mod1971;
  let closure_2 = obj4.useEventHandlerRegistration(arg0);
  const items = [closure_5, sharedValue, sharedValue1, sharedValue2];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_useScrollStateTs1(contentOffset) {
    c0.value = contentOffset.contentOffset.y;
    c1.value = contentOffset.layoutMeasurement;
    c2.value = contentOffset.contentSize;
  }
  const items1 = [tmp5, tmp6, tmp7];
  pnpm_useScrollStateTs1.__closure = items1;
  pnpm_useScrollStateTs1.__workletHash = 3992989127478;
  pnpm_useScrollStateTs1.__initData = tmp4;
  const obj5 = _mod1655;
  let c3 = obj5.useEvent(pnpm_useScrollStateTs1, closure_4);
  _false(() => {
    let closure_0 = closure_2(closure_3);
    return () => {
      closure_0();
    };
  }, []);
  const items2 = [sharedValue1];
  const items3 = [sharedValue2];
  const tmp9 = React2((nativeEvent) => {
    sharedValue1.value = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
  }, items2);
  const obj6 = {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: tmp9,
    onContentSizeChange: React2((width, height) => {
      size = { width, height };
      sharedValue2.value = size;
    }, items3)
  };
  return obj6;
};
