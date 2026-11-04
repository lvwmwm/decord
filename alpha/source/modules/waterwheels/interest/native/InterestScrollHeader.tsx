// Module ID: 18676
// Function ID: 18677
// Name: InterestScrollHeader
// Dependencies: [19, 17, 21, 5141, 1652, 5761, 2]
// Exports: InterestCompactTitle, useInterestScrollHeader

// Module 18676 (InterestScrollHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let max, min, value;

let View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ title: { flex: 1, alignItems: "center", justifyContent: "center", minWidth: 0 }, normal: { maxWidth: "100%" } });
let closure_7 = { code: "(function InterestScrollHeaderTsx1(){let[scrollY,collapseOffset]=this.__closure;return{opacity:Math.max(0,Math.min(1,(scrollY.get()-Math.max(0,collapseOffset-64))/64))};})" };
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestScrollHeader.tsx");

export function useInterestScrollHeader() {
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const obj2 = { scrollY: sharedValue, onScroll: react.useCallback((nativeEvent) => sharedValue.set(nativeEvent.nativeEvent.contentOffset.y), items) };
  return obj2;
}
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
  const tmp = closure_6();
  let obj = _mod1652;
  const items = [closure_7, scrollY, num];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class InterestScrollHeaderTsx1 {
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
  InterestScrollHeaderTsx1.__closure = items1;
  InterestScrollHeaderTsx1.__workletHash = 8899095355994;
  InterestScrollHeaderTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(InterestScrollHeaderTsx1);
  const items2 = [tmp.normal, animatedStyle];
  View = _modDef1652.View;
  return <View style={tmp.title} collapsable={false}>{null}</View>;
}
