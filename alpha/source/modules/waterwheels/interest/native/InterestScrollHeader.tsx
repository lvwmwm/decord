// Module ID: 18710
// Function ID: 18711
// Name: InterestScrollHeader
// Dependencies: [19, 17, 21, 5170, 1652, 5781, 2]
// Exports: InterestCompactTitle, interestHeaderElevation, useInterestScrollHeader

// Module 18710 (InterestScrollHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let max, min, value;

let tmp3;
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 }, normal: { maxWidth: "100%" } });
let closure_6 = { code: "(function InterestScrollHeaderTsx1(event){let[scrollY]=this.__closure;return scrollY.set(event.contentOffset.y);})" };
let items = [{ code: "(function interestHeaderElevation_InterestScrollHeaderTsx2(scrollOffset,collapseOffset){return Math.max(0,Math.min(1,(scrollOffset-collapseOffset)/12));})" }];
[tmp3] = items;
function interestHeaderElevation(arg0, arg1) {
  return Math.max(0, Math.min(1, (arg0 - arg1) / 12));
}
interestHeaderElevation.__workletHash = 17152021821049;
interestHeaderElevation.__initData = tmp3;
let closure_7 = { code: "(function InterestScrollHeaderTsx3(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})" };
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader() {
  let tmp2;
  let tmp3;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const items = [closure_6, sharedValue];
  let c0;
  [tmp2, tmp3] = items;
  const obj2 = _mod1652;
  class InterestScrollHeaderTsx1 {
    constructor(arg0) {
      return closure_0.set(arg0.contentOffset.y);
    }
  }
  const items1 = [tmp3];
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 14965981204412;
  InterestScrollHeaderTsx1.__initData = tmp2;
  const obj3 = { scrollY: sharedValue, onScroll: obj2.useAnimatedScrollHandler(InterestScrollHeaderTsx1) };
  return obj3;
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
