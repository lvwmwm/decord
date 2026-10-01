// Module ID: 11870
// Function ID: 11871
// Name: DoubleTapToReactActionSheet
// Dependencies: [5, 32, 19, 17, 4825, 5771, 1074, 1375, 21, 4836, 1364, 576, 4566, 4837, 5298, 504, 5280, 2021, 4483, 7410, 1397, 6551, 1241, 6603, 10586, 4800, 6618, 4832, 1115, 11774, 11871, 5281, 2]
// Exports: default

// Module 11870 (DoubleTapToReactActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserSettings from "UserSettings" /* 2021 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, set, set2, set3;

let closure_12;
let num2;
let num3;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp;
let unpackModuleId;
const DoubleTapToReactUtils = tmp(7410);
function EmojiConfetti(top) {
  let bottom;
  let left;
  let right;
  top = top.top;
  ({ bottom, left } = top);
  ({ right, leading: dependencyMap } = top);
  const children = top.emojiComponent;
  let obj = top(4566);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = top(4566);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = top(4566);
  const sharedValue2 = obj3.useSharedValue(0.2);
  let obj4 = top(4566);
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = top(5298);
  const mountLayoutEffect = obj5.useMountLayoutEffect(() => {
    let Easing;
    let num = 0;
    const tmp = sharedValue;
    const tmp2 = sharedValue1;
    const tmp3 = sharedValue2;
    const tmp4 = sharedValue3;
    if (!dependencyMap) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    set = tmp.set;
    const withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj = timing;
    const withTimingResult = obj.withTiming(0, { duration: num });
    const withTiming = timing.withTiming;
    const obj2 = { duration: 600, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    timing;
    const result = 10 * Math.random();
    Easing = ReanimatedRexport.Easing;
    const result1 = set(withSequence(withTimingResult, withTiming(result + 35, obj2)));
    set2 = tmp2.set;
    const withSequence2 = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj3 = timing;
    const withTimingResult1 = obj3.withTiming(0, { duration: num });
    const withTiming2 = timing.withTiming;
    const obj4 = { duration: 600, easing: ReanimatedRexport.Easing.ease };
    timing;
    const result2 = 40 * Math.random();
    set2(withSequence2(withTimingResult1, withTiming2(result2 + 20, obj4)));
    set3 = tmp3.set;
    const withSequence3 = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj5 = timing;
    const withTimingResult2 = obj5.withTiming(0, { duration: num });
    const obj6 = timing;
    const withTimingResult3 = obj6.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const obj7 = timing;
    set3(withSequence3(withTimingResult2, withTimingResult3, obj7.withTiming(0.5, { duration: 360 })));
    const set4 = tmp4.set;
    const withSequence4 = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj8 = timing;
    const withTimingResult4 = obj8.withTiming(0, { duration: num });
    const obj9 = timing;
    const withTimingResult5 = obj9.withTiming(1, { duration: 360 });
    const obj10 = timing;
    set4(withSequence4(withTimingResult4, withTimingResult5, obj10.withTiming(0, { duration: 240 })));
  });
  let obj6 = top(4566);
  const fn = function f() {
    let obj4;
    let result;
    let value;
    const items = [{ scale: sharedValue2.get() }, ];
    let num = 1;
    ({ scale: sharedValue2.get() });
    if (true === left) {
      num = -1;
    }
    const rect = { position: "absolute", transform: items, top: value, left: result, opacity: sharedValue3.get() };
    items[1] = { rotate: `${num * sharedValue1.get()}deg` };
    ({ rotate: `${num * sharedValue1.get()}deg` });
    if (true === top) {
      value = -sharedValue.get();
      obj4 = sharedValue;
    } else {
      obj4 = sharedValue;
      value = sharedValue.get();
    }
    const value2 = obj4.get();
    if (true === left) {
      result = 1.5 * -value2;
    } else {
      result = 1.5 * value2;
    }
    return rect;
  };
  fn.__closure = { sizeValue: sharedValue2, left, rotationValue: sharedValue1, top, positionValue: sharedValue, opacityValue: sharedValue3 };
  fn.__workletHash = 1455873119263;
  fn.__initData = __initData;
  const style = obj6.useAnimatedStyle(fn);
  return closure_11(left(4566).View, { style, children });
}
function EmojiBurstAnimation(emojiComponent) {
  let items;
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: closure_13().burstContainer, children: items };
  items = [unpackModuleId(EmojiConfetti, { emojiComponent, top: true, left: true, leading: true }), unpackModuleId(EmojiConfetti, { emojiComponent, top: true, right: true }), unpackModuleId(EmojiConfetti, { emojiComponent, bottom: true, left: true }), unpackModuleId(EmojiConfetti, { emojiComponent, bottom: true, right: true })];
  return closure_12(View, obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { emoji: { width: 48, height: 48, zIndex: 2 }, selectedCustomEmoji: { width: 48, height: 48 }, selectedTextEmoji: obj2, selectedEmojiText: obj3, content: obj4, emojiContainer: obj5, alignCenter: { textAlign: "center" }, emojiSelectRow: obj6, header: obj7, emojiName: obj8, burstContainer: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 } };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 36;
if (PlatformUtils.isIOS()) {
  num = 48;
}
obj2 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 56;
}
obj3 = { marginLeft: nativeDefault.space.PX_16, fontSize: 40, lineHeight: num3 };
PlatformUtils = PlatformUtils_mod;
num3 = undefined;
if (PlatformUtils.isIOS()) {
  num3 = 56;
}
obj4 = { flexDirection: "column", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 4, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, justifyContent: "center", alignItems: "center" };
obj6 = { marginVertical: nativeDefault.space.PX_24 };
obj7 = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
const __initData = { code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
const __initData2 = { code: "function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
const __initData3 = { code: "function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_19 = { code: "function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  let closure_3;
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items7;
  let items8;
  let items9;
  let obj11;
  let str;
  let stringResult;
  emoji = emoji.emoji;
  _require = undefined;
  first1 = undefined;
  _asyncToGenerator = undefined;
  first2 = undefined;
  closure_6 = undefined;
  let ref;
  let sharedValue1;
  let sharedValue2;
  let memo;
  let callback1;
  let tmp = closure_13();
  let obj = first2;
  [first, _require] = first2.useState(false);
  const tmp4 = _require;
  let obj2 = require("get initialized");
  let items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => ref.useReducedMotion);
  [first1, _asyncToGenerator] = first2.useState(emoji);
  _slicedToArray = first2.useRef(true);
  [first2, closure_6] = first2.useState(false);
  ref = first2.useRef(null);
  let obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  class S {
    constructor() {
      let items;
      let obj3;
      let obj5;
      const obj = { transform: items };
      const obj2 = { scale: obj3.interpolate(sharedValue.get(), [0, 1], [1, 1.3]) };
      items = [obj2, ];
      obj3 = ReanimatedRexport;
      const obj4 = { translateY: obj5.interpolate(sharedValue.get(), [0, 1], [0, -20]) };
      items[1] = obj4;
      obj5 = ReanimatedRexport;
      return obj;
    }
  }
  let obj5 = { interpolate: require("ReanimatedRexport").interpolate, sharedSaveValue: sharedValue };
  S.__closure = obj5;
  S.__workletHash = 14159749218638;
  S.__initData = __initData2;
  const animatedStyle = obj4.useAnimatedStyle(S);
  let obj6 = require("ReanimatedRexport");
  sharedValue1 = obj6.useSharedValue(1);
  const obj7 = require("ReanimatedRexport");
  sharedValue2 = obj7.useSharedValue(1);
  const obj8 = require("ReanimatedRexport");
  class C {
    constructor() {
      let items;
      const obj = { transform: items, opacity: sharedValue2.get() };
      items = [{ scale: sharedValue1.get() }];
      ({ scale: sharedValue1.get() });
      return obj;
    }
  }
  C.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  C.__workletHash = 17229591239241;
  C.__initData = __initData3;
  const items1 = [sharedValue1, sharedValue2, stateFromStores, first2];
  const animatedStyle1 = obj8.useAnimatedStyle(C);
  const items2 = [first1];
  const callback = first2.useCallback((arg0, current) => {
    let closure_0;
    setAnimateConfetti = arg0;
    const tmp = first2;
    if (!tmp) {
      if (current) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        const withSequence = setAnimateConfetti(first1[12]).withSequence;
        setAnimateConfetti(first1[12]);
        const obj = setAnimateConfetti(first1[13]);
        const withTimingResult = obj.withTiming(0.7, { duration: 0 });
        const obj2 = setAnimateConfetti(first1[16]);
        const result2 = set(withSequence(withTimingResult, obj2.withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        set2 = sharedValue2.set;
        const withSequence2 = setAnimateConfetti(first1[12]).withSequence;
        setAnimateConfetti(first1[12]);
        const obj3 = setAnimateConfetti(first1[13]);
        const withTimingResult1 = obj3.withTiming(0.6, { duration: 0 });
        const obj4 = setAnimateConfetti(first1[16]);
        set2(withSequence2(withTimingResult1, obj4.withSpring(1, { duration: 200, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3(closure_0);
        closure_4.current = current;
      }, 0);
    }
  }, items1);
  memo = first2.useMemo(() => {
    let customEmojiById;
    let emojiId;
    let emojiName;
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    ({ emojiId, emojiName } = setting);
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(emojiId);
    } else {
      customEmojiById = null;
      if (null != emojiName) {
        const obj = UnicodeEmojisDefault;
        customEmojiById = obj.getByName(emojiName);
      }
    }
    let tmp7 = null == customEmojiById;
    if (!tmp7) {
      const tmpResult = DoubleTapToReactUtils;
      tmp7 = !tmpResult.areEmojisEqual(customEmojiById, first1);
    }
    return tmp7;
  }, items2);
  const items3 = [first1, stateFromStores];
  const memo1 = first2.useMemo(() => {
    let animated;
    let url;
    if (null != first1.id) {
      const obj = { id: first1.id, animated, size: EMOJI_URL_BASE_SIZE };
      animated = !stateFromStores;
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (!stateFromStores) {
        animated = tmp.animated;
      }
      url = getEmojiURL(obj);
    } else {
      url = tmp.url;
    }
    return url;
  }, items3);
  const obj9 = { style: tmp.emoji, fastImageStyle: tmp.selectedCustomEmoji, textEmojiStyle: tmp.selectedTextEmoji, name: str, src: memo1 };
  str = "";
  const tmp21 = stateFromStores(first1[21]);
  if (null == first1.id) {
    str = first1.surrogates;
  }
  const tmp19Result = memo(tmp21, obj9);
  const items4 = [memo, first1];
  callback1 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === first1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp28 = memo;
            if (tmp28) {
              const DoubleTapReactionEmoji = tmp(first1[17]).DoubleTapReactionEmoji;
              const obj4 = { emojiId: first1.id, emojiName: first1.name, animated: first1.animated, disableDoubleTap: false };
              first1 = 1;
              c3 = 1;
              const obj5 = { value: DoubleTapReactionEmoji.updateSetting(obj4), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        const obj6 = { emoji_id: closure_129_2.id, emoji_name: closure_129_2.name, emoji_animated: closure_129_2.animated, recommended: closure_129_4.current, location: tmp2(first1[23]).DOUBLE_TAP_TO_REACT_ACTION_SHEET };
        const track = tmp2(first1[22]).track;
        const DOUBLE_TAP_REACT_EMOJI_UPDATED = constants.DOUBLE_TAP_REACT_EMOJI_UPDATED;
        const tmp9 = tmp2(first1[22]);
        track(DOUBLE_TAP_REACT_EMOJI_UPDATED, obj6);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const obj = setAnimateConfetti(emoji[24]);
          const obj2 = { emoji };
          return obj.showDoubleTapEmojiUpdatedToast(obj2);
        }, 500);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp24) {
        c3 = 3;
        throw tmp24;
      }
    }
  }), items4);
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  const callback2 = obj.useCallback(() => {
    let Easing;
    closure_6(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      const withSequence = ReanimatedRexport.withSequence;
      let obj = timing;
      const withTimingResult = obj.withTiming(0, { duration: 0 });
      const obj2 = { duration: 100, easing: Easing.out(ReanimatedRexport.Easing.quad) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const withTimingResult1 = withTiming(1, obj2);
      const fn = function t() {
        const obj = closure_0(first1[12]);
        return obj.runOnJS(closure_1_0)(true);
      };
      const tmp10 = timing;
      const withTiming2 = tmp10.withTiming;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
      fn.__workletHash = 13953384401061;
      fn.__initData = __initData;
      const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setAnimateConfetti };
      const withTiming2Result = withTiming2(1, { duration: 100 }, undefined, fn);
      const obj4 = spring;
      const result1 = set(withSequence(withTimingResult, withTimingResult1, withTiming2Result, obj4.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    let num6 = 900;
    const _setTimeout = setTimeout;
    if (stateFromStores) {
      num6 = 0;
    }
    ref.current = _setTimeout(() => {
      ref.current = null;
      callback1();
      const obj = stateFromStores(first1[25]);
      obj.hideActionSheet();
    }, num6);
  }, items5);
  const callback3 = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    callback1();
  }, items6);
  const obj10 = { onDismiss: callback3, children: tmp26(tmp27, obj11) };
  obj11 = { style: tmp.content, children: items10 };
  const obj12 = { style: tmp.emojiContainer, children: items9 };
  const ActionSheet = tmp4(tmp5[26]).ActionSheet;
  const obj13 = { style: items7, children: items8 };
  items7 = [animatedStyle, animatedStyle1];
  items8 = [tmp19Result, ];
  let tmp19Result2 = null;
  View = tmp20(tmp5[12]).View;
  if (!stateFromStores) {
    tmp19Result2 = null;
    if (first) {
      const obj14 = { emojiComponent: tmp19Result };
      tmp19Result2 = tmp19(EmojiBurstAnimation, obj14);
    }
  }
  items8[1] = tmp19Result2;
  items9 = [tmp26(View, obj13), ];
  const obj15 = { variant: "text-lg/semibold", style: tmp.selectedEmojiText, color: "interactive-text-default", children: "1" };
  items9[1] = memo(tmp4(first1[27]).Text, obj15);
  items10 = [tmp26(tmp27, obj12), , , , , ];
  const obj16 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.emojiName, children: ":" + first1.name + ":" };
  const Text = tmp4(tmp5[27]).Text;
  items10[1] = memo(Text, obj16);
  const obj17 = { style: tmp.header, children: items11 };
  const obj18 = { style: tmp.alignCenter, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl.string(tmp4(first1[28]).t.F6lRAI) };
  const Text2 = tmp4(tmp5[27]).Text;
  intl = tmp4(tmp5[28]).intl;
  items11 = [tmp19(Text2, obj18), tmp19(tmp4(tmp5[29]).NewBadge, {})];
  items10[2] = callback1(closure_6, obj17);
  const obj19 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default", children: intl2.string(tmp4(first1[28]).t.yIax8g) };
  const Text3 = tmp4(tmp5[27]).Text;
  intl2 = tmp4(tmp5[28]).intl;
  items10[3] = memo(Text3, obj19);
  const obj20 = { style: tmp.emojiSelectRow, selectedEmoji: first1, onPressEmoji: callback };
  items10[4] = memo(stateFromStores(first1[30]), obj20);
  const Button = tmp4(tmp5[31]).Button;
  const tmp4Result = tmp4(first1[19]);
  const areEmojisEqualResult = tmp4Result.areEmojisEqual(first1, emoji);
  const intl3 = tmp4(tmp5[28]).intl;
  const string = intl3.string;
  const t = tmp4(tmp5[28]).t;
  if (areEmojisEqualResult) {
    stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items10[5] = memo(Button, { grow: true, size: "lg", text: stringResult, variant: "primary", onPress: callback2, disabled: first2 });
  return memo(ActionSheet, obj10);
};
