// Module ID: 18746
// Function ID: 18747
// Name: ForYouMentionPlaceholder
// Dependencies: [19, 17, 5142, 21, 5141, 575, 504, 1652, 5378, 2]
// Exports: ForYouMentionPlaceholder

// Module 18746 (ForYouMentionPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let closure_9 = { code: "(function ForYouMentionPlaceholderTsx1(){let[reducedMotion,opacity]=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export function ForYouMentionPlaceholder() {
  let Easing;
  let items3;
  let items4;
  let items5;
  let items6;
  let placeholderText;
  let tmp10;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("module_1652");
  const sharedValue = obj2.useSharedValue(0.3);
  set = sharedValue.set;
  const withRepeat = require("module_1652").withRepeat;
  require("module_1652");
  const obj3 = { duration: 1000, easing: Easing.inOut(require("module_1652").Easing.ease) };
  const withTiming = require("timing/timing").withTiming;
  require("timing/timing");
  Easing = require("module_1652").Easing;
  const result = set(withRepeat(withTiming(0.7, obj3), -1, true));
  const items1 = [closure_9, stateFromStores, sharedValue];
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items1;
  const obj4 = require("module_1652");
  class ForYouMentionPlaceholderTsx1 {
    constructor() {
      let opacity = 0.7;
      if (!c0) {
        opacity = _undefined.get();
      }
      return { opacity };
    }
  }
  const items2 = [tmp9, tmp10];
  ForYouMentionPlaceholderTsx1.__closure = items2;
  ForYouMentionPlaceholderTsx1.__workletHash = 12937076119429;
  ForYouMentionPlaceholderTsx1.__initData = tmp8;
  const animatedStyle = obj4.useAnimatedStyle(ForYouMentionPlaceholderTsx1);
  const obj5 = { style: items3, children: items4 };
  items3 = [tmp.placeholder, animatedStyle];
  const obj6 = { style: tmp.placeholderImage };
  View = _modDef1652.View;
  items4 = [closure_5(View, obj6), ];
  const obj7 = { children: items5 };
  items5 = [, ];
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
  items5[0] = closure_5(View, obj8);
  const obj9 = { style: items6 };
  items6 = [tmp.placeholderBody, { width: "85%" }];
  items5[1] = closure_5(View, obj9);
  items4[1] = closure_6(View, obj7);
  return closure_6(View, obj5);
}
