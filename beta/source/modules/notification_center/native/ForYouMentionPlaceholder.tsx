// Module ID: 16054
// Function ID: 16055
// Name: ForYouMentionPlaceholder
// Dependencies: [19, 17, 4825, 21, 4836, 576, 504, 4566, 4837, 2]
// Exports: ForYouMentionPlaceholder

// Module 16054 (ForYouMentionPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 }, placeholderImage: size, placeholderText: obj2, placeholderTextContainer: { flexDirection: "row", flexWrap: "wrap" }, placeholderBody: obj3 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: nativeDefault.radii.sm, marginRight: 12, marginBottom: 4 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: nativeDefault.radii.sm, marginTop: 4 };
let closure_7 = createStyles(obj);
let closure_8 = [70, 50];
const __initData = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  let Easing;
  let items1;
  let items2;
  let items3;
  let items4;
  let placeholderText;
  let sharedValue;
  let useReducedMotion;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0.3);
  set = sharedValue.set;
  const withRepeat = require("ReanimatedRexport").withRepeat;
  require("ReanimatedRexport");
  const obj3 = { duration: 1000, easing: Easing.inOut(require("ReanimatedRexport").Easing.ease) };
  const withTiming = require("timing").withTiming;
  require("timing");
  Easing = require("ReanimatedRexport").Easing;
  const result = set(withRepeat(withTiming(0.7, obj3), -1, true));
  const fn = function y() {
    let opacity = 0.7;
    if (!stateFromStores) {
      opacity = sharedValue.get();
    }
    return { opacity };
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 8828208724188;
  fn.__initData = __initData;
  const obj4 = require("ReanimatedRexport");
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { style: items1, children: items2 };
  items1 = [tmp.placeholder, animatedStyle];
  const obj6 = { style: tmp.placeholderImage };
  View = stateFromStores(sharedValue[7]).View;
  items2 = [closure_5(View, obj6), ];
  const obj7 = { children: items3 };
  items3 = [, ];
  const obj8 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((item, index) => {
      let items;
      const obj = { style: items };
      items = [placeholderText.placeholderText, { width: "" + item + "%" }];
      ({ width: "" + item + "%" });
      return hasOwnProperty(View, obj, index);
    })
  };
  items3[0] = closure_5(View, obj8);
  const obj9 = { style: items4 };
  items4 = [tmp.placeholderBody, { width: "85%" }];
  items3[1] = closure_5(View, obj9);
  items2[1] = closure_6(View, obj7);
  return closure_6(View, obj5);
};
