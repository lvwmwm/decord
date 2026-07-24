// Module ID: 15191
// Function ID: 115695
// Name: ForYouMentionPlaceholder
// Dependencies: [31, 27, 4122, 33, 4130, 689, 566, 3991, 4131, 2]
// Exports: ForYouMentionPlaceholder

// Module 15191 (ForYouMentionPlaceholder)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { placeholder: { flexDirection: "row", marginBottom: 16, marginHorizontal: 24 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, height: 52, width: 52, borderRadius: 26, marginEnd: 12 };
_createForOfIteratorHelperLoose.placeholderImage = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, height: 15, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 12, marginBottom: 4 };
_createForOfIteratorHelperLoose.placeholderText = obj1;
_createForOfIteratorHelperLoose.placeholderTextContainer = { flexDirection: "row", flexWrap: "wrap" };
_createForOfIteratorHelperLoose.placeholderBody = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = [70, 50];
let closure_9 = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 4 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(sharedValue[6]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  let obj1 = require(sharedValue[7]);
  sharedValue = obj1.useSharedValue(0.3);
  let obj3 = require(sharedValue[7]);
  obj = { duration: 1000 };
  const Easing = require(sharedValue[7]).Easing;
  obj.easing = Easing.inOut(require(sharedValue[7]).Easing.ease);
  const result = sharedValue.set(obj3.withRepeat(require(sharedValue[8]).withTiming(0.7, obj), -1, true));
  const obj5 = require(sharedValue[8]);
  const fn = function y() {
    const obj = {};
    let num = 0.7;
    if (!stateFromStores) {
      num = sharedValue.get();
    }
    obj.opacity = num;
    return obj;
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 8828208724188;
  fn.__initData = closure_9;
  const animatedStyle = require(sharedValue[7]).useAnimatedStyle(fn);
  obj = { style: items1 };
  items1 = [tmp.placeholder, animatedStyle];
  obj1 = { style: tmp.placeholderImage };
  const items2 = [callback(View, obj1), ];
  const obj2 = {};
  obj3 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((arg0, arg1) => {
      let obj = {};
      const items = [tmp.placeholderText, ];
      obj = { width: "" + arg0 + "%" };
      items[1] = obj;
      obj.style = items;
      return outer1_5(outer1_3, obj, arg1);
    })
  };
  const items3 = [callback(View, obj3), ];
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  items3[1] = callback(View, { style: items4 });
  obj2.children = items3;
  items2[1] = callback2(View, obj2);
  obj.children = items2;
  return callback2(stateFromStores(sharedValue[7]).View, obj);
};
