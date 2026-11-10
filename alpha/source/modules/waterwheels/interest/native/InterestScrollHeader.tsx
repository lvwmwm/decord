// Module ID: 18801
// Function ID: 18802
// Name: InterestScrollHeader
// Dependencies: [19, 17, 21, 5142, 1652, 1705, 575, 5753, 2]
// Exports: InterestCompactTitle, interestHeaderElevation, useInterestScrollHeader

// Module 18801 (InterestScrollHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let max, min, value;

let tmp3;
let tmp4;
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 }, normal: { maxWidth: "100%" } });
let closure_6 = { code: "(function InterestScrollHeaderTsx1(event){let[scrollY,onViewportScroll,scheduleOnRN]=this.__closure;scrollY.set(event.contentOffset.y);if(onViewportScroll!=null)scheduleOnRN(onViewportScroll,event.contentOffset.y,event.layoutMeasurement.height);})" };
let items = [{ code: "(function interestHeaderElevation_InterestScrollHeaderTsx2(scrollOffset,collapseOffset){let[tokens]=this.__closure;const progress=Math.max(0,Math.min(1,(scrollOffset-collapseOffset-tokens.space.PX_16)/tokens.space.PX_48));return progress*progress*(3-2*progress);})" }, nativeDefault];
let c0;
[tmp3, tmp4] = items;
function interestHeaderElevation(arg0, arg1) {
  const bound = Math.max(0, Math.min(1, (arg0 - arg1 - _undefined.space.PX_16) / _undefined.space.PX_48));
  return bound * bound * (3 - 2 * bound);
}
let items1 = [tmp4];
interestHeaderElevation.__closure = items1;
interestHeaderElevation.__workletHash = 4728423726260;
interestHeaderElevation.__initData = tmp3;
let closure_7 = { code: "(function InterestScrollHeaderTsx3(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})" };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader(onScroll) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const tmp2 = _mod1652;
  const items = [closure_6, sharedValue, onScroll, ];
  const useAnimatedScrollHandler = tmp2.useAnimatedScrollHandler;
  items[3] = _mod1705.scheduleOnRN;
  let c0;
  let c1;
  let c2;
  [tmp3, tmp4, tmp5, tmp6] = items;
  class InterestScrollHeaderTsx1 {
    constructor(arg0) {
      result = closure_0.set(onScroll.contentOffset.y);
      if (null != closure_1) {
        tmp3 = closure_2;
        tmp4 = closure_2(tmp2, onScroll.contentOffset.y, onScroll.layoutMeasurement.height);
      }
      return;
    }
  }
  const items1 = [tmp4, tmp5, tmp6];
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 6332981046127;
  InterestScrollHeaderTsx1.__initData = tmp3;
  const obj2 = { scrollY: sharedValue, onScroll: useAnimatedScrollHandler(InterestScrollHeaderTsx1) };
  return obj2;
}
export { interestHeaderElevation };
export function InterestCompactTitle(collapseOffset) {
  let scrollY;
  let title;
  let tmp4;
  let tmp5;
  let tmp6;
  let num = collapseOffset.collapseOffset;
  ({ title, scrollY } = collapseOffset);
  if (num === undefined) {
    num = 160;
  }
  const tmp = closure_5();
  let obj = _mod1652;
  const items = [closure_7, scrollY, num];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class InterestScrollHeaderTsx3 {
    constructor() {
      obj = { opacity: null };
      max = Math.max;
      min = Math.min;
      value = closure_0.get();
      obj.opacity = max(0, min(1, (value - Math.max(0, closure_1 - 64)) / 64));
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  InterestScrollHeaderTsx3.__closure = items1;
  InterestScrollHeaderTsx3.__workletHash = 14684811456024;
  InterestScrollHeaderTsx3.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(InterestScrollHeaderTsx3);
  const items2 = [tmp.normal, animatedStyle];
  View = _modDef1652.View;
  return <View style={tmp.title} collapsable={false}>{null}</View>;
}
