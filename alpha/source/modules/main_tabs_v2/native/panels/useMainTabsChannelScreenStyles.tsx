// Module ID: 18552
// Function ID: 18553
// Name: useMainTabsChannelScreenStyles
// Dependencies: [19, 17, 5009, 575, 5090, 2]
// Exports: useMainTabsChannelScreenStyles

// Module 18552 (useMainTabsChannelScreenStyles)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let __initData = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue) {
  let closure_0 = isDragging;
  let closure_1 = translateX;
  let closure_2 = maxWidth;
  closure_3 = derivedValue;
  __initData = parentFreezeValue;
  const tmp = closure_3();
  let closure_5 = tmp;
  const elevation = tmp.elevation;
  let obj = ReanimatedRexport;
  const fn = function c() {
    let items;
    let num2;
    let num3;
    let num4;
    const obj = closure_4;
    if (closure_4 != null) {
      const value = obj.get();
    }
    let value3 = closure_0.get();
    if (!value3) {
      let tmp3 = 0 !== closure_1.get();
      const obj2 = closure_1;
      if (tmp3) {
        tmp3 = obj2.get() !== closure_2;
      }
      value3 = tmp3;
    }
    const obj3 = { transform: items, shadowOpacity: num2, elevation: num3, opacity: num4 };
    items = [{ translateX: closure_1.get() }];
    num2 = 0;
    ({ translateX: closure_1.get() });
    if (value3) {
      num2 = elevation.shadowOpacity;
    }
    num3 = 0;
    if (value3) {
      num3 = elevation.elevation;
    }
    let value4;
    const obj5 = closure_3;
    if (closure_3 != null) {
      value4 = obj5.get();
    }
    num4 = 1;
    if (value4) {
      num4 = 0;
    }
    return obj3;
  };
  fn.__closure = { freezeValue: parentFreezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered: derivedValue };
  fn.__workletHash = 16765484569296;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return react.useMemo(() => {
    const items = [elevation.elevation, animatedStyle];
    return items;
  }, items);
}
