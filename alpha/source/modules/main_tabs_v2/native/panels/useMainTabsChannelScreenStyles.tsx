// Module ID: 18992
// Function ID: 18993
// Name: useMainTabsChannelScreenStyles
// Dependencies: [19, 17, 5142, 575, 1652, 2]
// Exports: useMainTabsChannelScreenStyles

// Module 18992 (useMainTabsChannelScreenStyles)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
let createStyles = createStyles_mod;
let obj = { elevation: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_3 = createStyles(obj);
let closure_4 = { code: "(function useMainTabsChannelScreenStylesTsx1(){let[freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered]=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, arg3, parentFreezeValue) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const tmp = closure_3();
  let closure_0 = tmp;
  const elevation = tmp.elevation;
  let obj = _mod1652;
  let items = [closure_4, parentFreezeValue, isDragging, translateX, maxWidth, elevation, arg3];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useMainTabsChannelScreenStylesTsx1() {
    let items;
    let num2;
    let num3;
    let num4;
    const obj = c0;
    if (c0 != null) {
      const value = obj.get();
    }
    let value3 = _undefined.get();
    if (!value3) {
      let tmp3 = 0 !== _undefined2.get();
      const obj2 = _undefined2;
      if (tmp3) {
        tmp3 = obj2.get() !== c3;
      }
      value3 = tmp3;
    }
    const obj3 = { transform: items, shadowOpacity: num2, elevation: num3, opacity: num4 };
    items = [{ translateX: _undefined2.get() }];
    num2 = 0;
    ({ translateX: _undefined2.get() });
    if (value3) {
      num2 = _undefined3.shadowOpacity;
    }
    num3 = 0;
    if (value3) {
      num3 = _undefined3.elevation;
    }
    let value4;
    const obj5 = c5;
    if (c5 != null) {
      value4 = obj5.get();
    }
    num4 = 1;
    if (value4) {
      num4 = 0;
    }
    return obj3;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  useMainTabsChannelScreenStylesTsx1.__closure = items1;
  useMainTabsChannelScreenStylesTsx1.__workletHash = 1877489175721;
  useMainTabsChannelScreenStylesTsx1.__initData = tmp2;
  const animatedStyle = obj.useAnimatedStyle(useMainTabsChannelScreenStylesTsx1);
  const items2 = [tmp, animatedStyle];
  return react.useMemo(() => {
    const items = [elevation.elevation, animatedStyle];
    return items;
  }, items2);
}
