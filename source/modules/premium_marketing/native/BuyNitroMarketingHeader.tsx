// Module ID: 7528
// Function ID: 60009
// Name: BuyNitroMarketingHeader
// Dependencies: [31, 27, 6671, 33, 689, 4130, 3991, 4133, 4131, 4066, 7529, 477, 7530, 7526, 668, 5085, 6673, 7116, 4554, 1212, 7532, 4126, 7533, 7535, 2]
// Exports: default

// Module 7528 (BuyNitroMarketingHeader)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Platform, StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  let obj = {};
  obj = {};
  let num = 0;
  if (arg1) {
    num = 0;
    if (arg2) {
      num = importDefault(689).space.PX_8;
    }
  }
  obj.marginHorizontal = -importDefault(689).space.PX_16 + num;
  let PX_8;
  if (arg1) {
    if (arg2) {
      PX_8 = importDefault(689).space.PX_8;
    }
  }
  obj.marginTop = PX_8;
  obj.marginBottom = importDefault(689).space.PX_16;
  let str;
  if (arg1) {
    if (arg2) {
      str = "hidden";
    }
  }
  obj.overflow = str;
  obj.banner = obj;
  obj = {};
  const merged = Object.assign(closure_4.absoluteFillObject);
  if (!arg1) {
    let num2 = 5 * -importDefault(689).space.PX_192;
  } else {
    num2 = 0;
  }
  obj["top"] = num2;
  obj["color"] = importDefault(689).colors.BACKGROUND_BASE_LOWER;
  let sm;
  if (arg1) {
    if (arg2) {
      sm = importDefault(689).radii.sm;
    }
  }
  obj["borderRadius"] = sm;
  obj.background = obj;
  const tmp = -importDefault(689).space.PX_16;
  obj.clouds = { position: "absolute", top: -importDefault(689).space.PX_16, right: undefined, left: undefined, alignSelf: "center" };
  const obj1 = { position: "absolute", top: -importDefault(689).space.PX_16, right: undefined, left: undefined, alignSelf: "center" };
  obj.wumpus = { position: "absolute", top: arg0 + importDefault(689).space.PX_20, right: importDefault(689).space.PX_4 };
  const obj3 = { height: importDefault(689).space.PX_80 + importDefault(689).space.PX_4 };
  obj.wumpusImage = obj3;
  const obj4 = { position: "absolute" };
  let num4 = 0;
  if (arg1) {
    num4 = importDefault(689).space.PX_8;
  }
  obj4.top = arg0 - num4;
  let num5 = 0;
  if (!arg1) {
    num5 = importDefault(689).space.PX_8;
  }
  obj4.left = importDefault(689).space.PX_8 + num5;
  const items = [{ scaleX: -1 }];
  obj4.transform = items;
  obj.backButton = obj4;
  const obj5 = { alignItems: "center", gap: importDefault(689).space.PX_8 };
  const sum = arg0 + importDefault(689).space.PX_80;
  obj5.paddingTop = sum + importDefault(689).space.PX_4;
  obj5.paddingHorizontal = importDefault(689).space.PX_16;
  const space = importDefault(689).space;
  obj5.paddingBottom = arg1 ? space.PX_24 : space.PX_32;
  obj.content = obj5;
  const obj6 = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj6["height"] = importDefault(689).space.PX_96;
  obj6["position"] = "absolute";
  obj6["top"] = undefined;
  obj.fade = obj6;
  return obj;
});
let closure_12 = { code: "function BuyNitroMarketingHeaderTsx1(){const{floatX,floatY}=this.__closure;return{transform:[{translateX:floatX.get()},{translateY:floatY.get()}]};}" };
let closure_13 = { code: "function BuyNitroMarketingHeaderTsx2(){const{cloudsOpacity}=this.__closure;return{opacity:cloudsOpacity.get()};}" };
let result = require("items").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingHeader.tsx");

export default function BuyNitroMarketingHeader(arg0) {
  let cloudsPulseStyle;
  let onBackPress;
  let selectedTier;
  let topInset;
  let wumpusFloatStyle;
  ({ topInset, onBackPress, selectedTier } = arg0);
  const tmp2 = importDefault(4066)() === require(7529) /* items */.ThemeTypes.LIGHT;
  let tmp3 = tmp2;
  if (tmp2) {
    let obj = require(477) /* set */;
    tmp3 = !obj.isAndroid();
  }
  const tmp6 = callback3(topInset, tmp2, tmp3);
  const color = tmp6.background.color;
  const tmp = importDefault(4066)();
  obj = { style: tmp6.banner };
  ({ wumpusFloatStyle, cloudsPulseStyle } = (function useAnimatedStyles() {
    let obj = outer1_0(outer1_2[6]);
    const sharedValue = obj.useSharedValue(0);
    const sharedValue1 = outer1_0(outer1_2[6]).useSharedValue(0);
    const obj2 = outer1_0(outer1_2[6]);
    const sharedValue2 = outer1_0(outer1_2[6]).useSharedValue(1);
    let items = [sharedValue, sharedValue1, sharedValue2];
    const effect = outer1_3.useEffect(() => {
      const accessibilityPreferencesSharedValue = outer2_0(outer2_2[7]).accessibilityPreferencesSharedValue;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        let obj = outer2_0(outer2_2[6]);
        let obj1 = outer2_0(outer2_2[8]);
        obj = { duration: 3400 };
        const result = sharedValue.set(obj.withRepeat(obj1.withTiming(outer2_9, obj), -1, true));
        const obj4 = outer2_0(outer2_2[6]);
        obj = { duration: 2600 };
        const result1 = sharedValue1.set(obj4.withRepeat(outer2_0(outer2_2[8]).withTiming(-outer2_10, obj), -1, true));
        const obj5 = outer2_0(outer2_2[8]);
        const obj7 = outer2_0(outer2_2[6]);
        obj1 = { duration: 2800 };
        const result2 = sharedValue2.set(obj7.withRepeat(outer2_0(outer2_2[8]).withTiming(0.6, obj1), -1, true));
        const obj8 = outer2_0(outer2_2[8]);
      }
    }, items);
    obj = {};
    const obj3 = outer1_0(outer1_2[6]);
    const fn = function s() {
      let obj = {};
      obj = { translateX: sharedValue.get() };
      const items = [obj, ];
      obj = { translateY: sharedValue1.get() };
      items[1] = obj;
      obj.transform = items;
      return obj;
    };
    fn.__closure = { floatX: sharedValue, floatY: sharedValue1 };
    fn.__workletHash = 17204816956621;
    fn.__initData = outer1_12;
    obj.wumpusFloatStyle = outer1_0(outer1_2[6]).useAnimatedStyle(fn);
    let obj5 = outer1_0(outer1_2[6]);
    const fn2 = function o() {
      return { opacity: sharedValue2.get() };
    };
    fn2.__closure = { cloudsOpacity: sharedValue2 };
    fn2.__workletHash = 10630022886341;
    fn2.__initData = outer1_13;
    obj.cloudsPulseStyle = outer1_0(outer1_2[6]).useAnimatedStyle(fn2);
    return obj;
  })());
  let obj2 = require(477) /* set */;
  let isAndroidResult = obj2.isAndroid();
  if (isAndroidResult) {
    obj = { barStyle: "light-content" };
    isAndroidResult = callback(importDefault(7530), obj);
  }
  let items = [isAndroidResult, , , , , , ];
  let obj1 = { selectedTier, nitroColors: Gradients.PREMIUM_TIER_2, basicColors: Gradients.PREMIUM_TIER_0 };
  const tmp7 = (function useAnimatedStyles() {
    let obj = outer1_0(outer1_2[6]);
    const sharedValue = obj.useSharedValue(0);
    const sharedValue1 = outer1_0(outer1_2[6]).useSharedValue(0);
    const obj2 = outer1_0(outer1_2[6]);
    const sharedValue2 = outer1_0(outer1_2[6]).useSharedValue(1);
    let items = [sharedValue, sharedValue1, sharedValue2];
    const effect = outer1_3.useEffect(() => {
      const accessibilityPreferencesSharedValue = outer2_0(outer2_2[7]).accessibilityPreferencesSharedValue;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        let obj = outer2_0(outer2_2[6]);
        let obj1 = outer2_0(outer2_2[8]);
        obj = { duration: 3400 };
        const result = sharedValue.set(obj.withRepeat(obj1.withTiming(outer2_9, obj), -1, true));
        const obj4 = outer2_0(outer2_2[6]);
        obj = { duration: 2600 };
        const result1 = sharedValue1.set(obj4.withRepeat(outer2_0(outer2_2[8]).withTiming(-outer2_10, obj), -1, true));
        const obj5 = outer2_0(outer2_2[8]);
        const obj7 = outer2_0(outer2_2[6]);
        obj1 = { duration: 2800 };
        const result2 = sharedValue2.set(obj7.withRepeat(outer2_0(outer2_2[8]).withTiming(0.6, obj1), -1, true));
        const obj8 = outer2_0(outer2_2[8]);
      }
    }, items);
    obj = {};
    const obj3 = outer1_0(outer1_2[6]);
    const fn = function s() {
      let obj = {};
      obj = { translateX: sharedValue.get() };
      const items = [obj, ];
      obj = { translateY: sharedValue1.get() };
      items[1] = obj;
      obj.transform = items;
      return obj;
    };
    fn.__closure = { floatX: sharedValue, floatY: sharedValue1 };
    fn.__workletHash = 17204816956621;
    fn.__initData = outer1_12;
    obj.wumpusFloatStyle = outer1_0(outer1_2[6]).useAnimatedStyle(fn);
    let obj5 = outer1_0(outer1_2[6]);
    const fn2 = function o() {
      return { opacity: sharedValue2.get() };
    };
    fn2.__closure = { cloudsOpacity: sharedValue2 };
    fn2.__workletHash = 10630022886341;
    fn2.__initData = outer1_13;
    obj.cloudsPulseStyle = outer1_0(outer1_2[6]).useAnimatedStyle(fn2);
    return obj;
  })();
  const tmp8 = callback2;
  const tmp9 = closure_5;
  obj1.start = require(668) /* keys */.HorizontalGradient.START;
  obj1.end = require(668) /* keys */.HorizontalGradient.END;
  obj1.style = tmp6.background;
  items[1] = callback(importDefault(7526), obj1);
  obj2 = { style: items1 };
  items1 = [tmp6.clouds, cloudsPulseStyle];
  let obj3 = {};
  const tmp14 = importDefault(7526);
  obj3.source = importDefault(6673);
  obj3.resizeMode = "contain";
  obj2.children = callback(importDefault(5085), obj3);
  items[2] = callback(importDefault(3991).View, obj2);
  let obj4 = { style: items2 };
  items2 = [tmp6.wumpus, wumpusFloatStyle];
  let obj5 = { style: tmp6.wumpusImage };
  const tmp15 = importDefault(5085);
  obj5.source = importDefault(7116);
  obj5.resizeMode = "contain";
  obj4.children = callback(importDefault(5085), obj5);
  items[3] = callback(importDefault(3991).View, obj4);
  let tmp17 = !tmp2;
  if (!tmp2) {
    const obj6 = { style: tmp6.fade };
    const _HermesInternal = HermesInternal;
    const items3 = ["" + color + "00", color];
    obj6.colors = items3;
    obj6.start = require(668) /* keys */.VerticalGradient.START;
    obj6.end = require(668) /* keys */.VerticalGradient.END;
    tmp17 = callback(importDefault(4554), obj6);
    const tmp21 = importDefault(4554);
  }
  items[4] = tmp17;
  let obj7 = { style: tmp6.content };
  let obj8 = { accessible: true, accessibilityRole: "header", accessibilityLabel: null, source: null, resizeMode: "contain" };
  const tmp16 = importDefault(5085);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj8.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lpNrPu);
  obj8.source = importDefault(7532);
  const items4 = [callback(importDefault(5085), obj8), ];
  const obj9 = { variant: "text-md/medium", color: "text-overlay-light" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj9.children = intl2.string(require(1212) /* getSystemLocale */.t.SD5MJW);
  items4[1] = callback(require(4126) /* Text */.Text, obj9);
  obj7.children = items4;
  items[5] = callback2(closure_5, obj7);
  const obj10 = { style: tmp6.backButton };
  const obj11 = { variant: "secondary-overlay" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj11.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj11.icon = importDefault(7535);
  obj11.size = "md";
  obj11.onPress = onBackPress;
  obj10.children = callback(require(7533) /* IconButton */.IconButton, obj11);
  items[6] = callback(closure_5, obj10);
  obj.children = items;
  return tmp8(tmp9, obj);
};
