// Module ID: 14932
// Function ID: 113843
// Name: HappeningNowCardPlaceholder
// Dependencies: [31, 27, 14183, 33, 4130, 689, 3991, 4131, 14184, 2]
// Exports: HappeningNowCardPlaceholder

// Module 14932 (HappeningNowCardPlaceholder)
import result from "result";
import { View } from "get ActivityIndicator";
import { HAPPENING_NOW_CONTENT_HEIGHT } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { placeholderContainer: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.placeholderIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.placeholderContent = { flex: 1 };
let obj1 = { height: 12, borderRadius: 5, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.placeholderText = obj1;
_createForOfIteratorHelperLoose.placeholderTextTop = { width: "75%" };
_createForOfIteratorHelperLoose.placeholderTextBottom = { width: "50%", marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}" };
let closure_9 = { code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  let str = "medium";
  const tmp2 = (function useBlinkStyle(duration) {
    duration = duration.duration;
    const endOpacity = duration.endOpacity;
    const sharedValue = outer1_0(outer1_2[6]).useSharedValue(duration.startOpacity);
    const items = [sharedValue, duration, endOpacity];
    const effect = outer1_3.useEffect(() => {
      let obj = outer2_0(outer2_2[6]);
      const fn = function t() {
        let obj = outer3_0(outer3_2[6]);
        obj = { duration: outer1_0, easing: outer3_0(outer3_2[6]).Easing.ease };
        const result = outer1_2.set(obj.withRepeat(outer3_0(outer3_2[7]).withTiming(outer1_1, obj), -1, true));
      };
      obj = { opacity: sharedValue, withRepeat: outer2_0(outer2_2[6]).withRepeat, withTiming: outer2_0(outer2_2[7]).withTiming, endOpacity, duration, Easing: outer2_0(outer2_2[6]).Easing };
      fn.__closure = obj;
      fn.__workletHash = 14338250108016;
      fn.__initData = outer2_8;
      obj.runOnUI(fn)();
    }, items);
    let obj = outer1_0(outer1_2[6]);
    let fn = function c() {
      return { opacity: sharedValue.get() };
    };
    fn.__closure = { opacity: sharedValue };
    fn.__workletHash = 17547739379389;
    fn.__initData = outer1_9;
    return outer1_0(outer1_2[6]).useAnimatedStyle(fn);
  })({ duration: 1000, startOpacity: 0.3, endOpacity: 0.6 });
  const tmp3 = callback;
  if (panelVariant.fullWidth) {
    str = "full";
  }
  obj.width = str;
  obj.panelVariant = flag;
  obj = { style: items };
  items = [tmp2, tmp.placeholderContainer];
  obj = { style: tmp.placeholderIcon };
  const items1 = [callback(View, obj), ];
  const obj1 = { style: tmp.placeholderContent };
  const items2 = [, ];
  ({ placeholderText: arr3[0], placeholderTextTop: arr3[1] } = tmp);
  const items3 = [callback(View, { style: items2 }), ];
  const items4 = [, ];
  ({ placeholderText: arr5[0], placeholderTextBottom: arr5[1] } = tmp);
  items3[1] = callback(View, { style: items4 });
  obj1.children = items3;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  obj.children = callback2(importDefault(3991).View, obj);
  return tmp3(importDefault(14184), obj);
};
