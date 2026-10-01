// Module ID: 15702
// Function ID: 15703
// Name: HappeningNowCardPlaceholder
// Dependencies: [19, 17, 14841, 21, 4836, 576, 4566, 4837, 14842, 2]
// Exports: HappeningNowCardPlaceholder

// Module 15702 (HappeningNowCardPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderContainer: { flexDirection: "row", alignItems: "center" }, placeholderIcon: size, placeholderContent: { flex: 1 }, placeholderText: obj2, placeholderTextTop: { width: "75%" }, placeholderTextBottom: { width: "50%", marginTop: 8 } };
size = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let closure_8 = { code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}" };
const __initData = { code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export const HappeningNowCardPlaceholder = function HappeningNowCardPlaceholder(panelVariant) {
  let duration;
  let endOpacity;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj4;
  let flag = panelVariant.panelVariant;
  const fullWidth = panelVariant.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_7();
  _require = 1000;
  importDefault = 0.6;
  let sharedValue;
  let obj = require("ReanimatedRexport");
  const tmp2 = sharedValue;
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue, 1000, 0.6];
  const effect = react.useEffect(() => {
    let obj = ReanimatedRexport;
    const fn = function t() {
      const withRepeat = duration(sharedValue[6]).withRepeat;
      duration(sharedValue[6]);
      const obj = duration(sharedValue[7]);
      const obj2 = { duration, easing: duration(sharedValue[6]).Easing.ease };
      const result = set(withRepeat(obj.withTiming(endOpacity, obj2), -1, true));
    };
    let obj2 = { opacity: sharedValue, withRepeat: ReanimatedRexport.withRepeat, withTiming: timing.withTiming, endOpacity, duration, Easing: ReanimatedRexport.Easing };
    fn.__closure = obj2;
    fn.__workletHash = 14338250108016;
    fn.__initData = __initData;
    const tmp = obj.runOnUI(fn)();
  }, items);
  let obj2 = require("ReanimatedRexport");
  let fn = function c() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17547739379389;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let str = "medium";
  const tmp7 = importDefault;
  const tmp8 = require("HappeningNowCard");
  if (fullWidth) {
    str = "full";
  }
  const obj3 = { width: str, panelVariant: flag, children: closure_6(View, obj4) };
  obj4 = { style: items1, children: items2 };
  items1 = [animatedStyle, tmp.placeholderContainer];
  const obj5 = { style: tmp.placeholderIcon };
  View = tmp7(tmp2[6]).View;
  items2 = [closure_5(View, obj5), ];
  const obj7 = { style: items3 };
  items3 = [, ];
  const obj6 = { style: tmp.placeholderContent, children: items4 };
  ({ placeholderText: arr4[0], placeholderTextTop: arr4[1] } = tmp);
  items4 = [closure_5(View, obj7), ];
  const obj8 = { style: items5 };
  items5 = [, ];
  ({ placeholderText: arr6[0], placeholderTextBottom: arr6[1] } = tmp);
  items4[1] = closure_5(View, obj8);
  items2[1] = closure_6(View, obj6);
  return closure_5(tmp8, obj3);
};
