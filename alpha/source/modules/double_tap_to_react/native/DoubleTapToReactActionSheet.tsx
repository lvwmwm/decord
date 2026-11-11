// Module ID: 14683
// Function ID: 14684
// Name: DoubleTapToReactActionSheet
// Dependencies: [5, 32, 19, 17, 5244, 6906, 1072, 1388, 21, 5243, 1377, 575, 1652, 5485, 5836, 504, 5876, 5068, 5189, 9130, 1411, 7828, 1252, 7871, 9489, 1705, 5489, 7885, 5866, 1113, 14579, 14684, 5873, 2]
// Exports: default

// Module 14683 (DoubleTapToReactActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import UserSettings from "UserSettings" /* 5068 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5189 */;
import timing_timing from "timing/timing" /* 5485 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, set, set2, set3;

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
const DoubleTapToReactUtils = tmp(9130);
function EmojiConfetti(arg0) {
  let bottom;
  let emojiComponent;
  let left;
  let require;
  let right;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp8;
  let tmp9;
  let top;
  ({ bottom, right, leading: require } = arg0);
  let sharedValue1;
  ({ emojiComponent, top, left } = arg0);
  let tmp = sharedValue1;
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0);
  let obj2 = require("module_1652");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("module_1652");
  const sharedValue2 = obj3.useSharedValue(0.2);
  let obj4 = require("module_1652");
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = require("useMountEffect");
  const mountLayoutEffect = obj5.useMountLayoutEffect(() => {
    let Easing;
    let num = 0;
    const tmp = sharedValue;
    const tmp2 = sharedValue1;
    const tmp3 = sharedValue2;
    const tmp4 = sharedValue3;
    if (!_require) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    set = tmp.set;
    const withSequence = _mod1652.withSequence;
    _mod1652;
    const obj = timing_timing;
    const withTimingResult = obj.withTiming(0, { duration: num });
    const withTiming = timing_timing.withTiming;
    const obj2 = { duration: 600, easing: Easing.out(_mod1652.Easing.ease) };
    timing_timing;
    const result = 10 * Math.random();
    Easing = _mod1652.Easing;
    const result1 = set(withSequence(withTimingResult, withTiming(result + 35, obj2)));
    set2 = tmp2.set;
    const withSequence2 = _mod1652.withSequence;
    _mod1652;
    const obj3 = timing_timing;
    const withTimingResult1 = obj3.withTiming(0, { duration: num });
    const withTiming2 = timing_timing.withTiming;
    const obj4 = { duration: 600, easing: _mod1652.Easing.ease };
    timing_timing;
    const result2 = 40 * Math.random();
    set2(withSequence2(withTimingResult1, withTiming2(result2 + 20, obj4)));
    set3 = tmp3.set;
    const withSequence3 = _mod1652.withSequence;
    _mod1652;
    const obj5 = timing_timing;
    const withTimingResult2 = obj5.withTiming(0, { duration: num });
    const obj6 = timing_timing;
    const withTimingResult3 = obj6.withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const obj7 = timing_timing;
    set3(withSequence3(withTimingResult2, withTimingResult3, obj7.withTiming(0.5, { duration: 360 })));
    const set4 = tmp4.set;
    const withSequence4 = _mod1652.withSequence;
    _mod1652;
    const obj8 = timing_timing;
    const withTimingResult4 = obj8.withTiming(0, { duration: num });
    const obj9 = timing_timing;
    const withTimingResult5 = obj9.withTiming(1, { duration: 360 });
    const obj10 = timing_timing;
    set4(withSequence4(withTimingResult4, withTimingResult5, obj10.withTiming(0, { duration: 240 })));
  });
  let obj6 = require("module_1652");
  let items = [closure_14, sharedValue2, left, sharedValue1, top, sharedValue, sharedValue3];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class DoubleTapToReactActionSheetTsx1 {
    constructor() {
      let obj4;
      let result;
      let value;
      const items = [{ scale: _undefined.get() }, ];
      let num = 1;
      ({ scale: _undefined.get() });
      if (true === c1) {
        num = -1;
      }
      const rect = { position: "absolute", transform: items, top: value, left: result, opacity: _undefined4.get() };
      items[1] = { rotate: `${num * c2.get()}deg` };
      ({ rotate: `${num * c2.get()}deg` });
      if (true === c3) {
        value = -_undefined3.get();
        obj4 = _undefined3;
      } else {
        obj4 = _undefined3;
        value = _undefined3.get();
      }
      const value2 = obj4.get();
      if (true === c1) {
        result = 1.5 * -value2;
      } else {
        result = 1.5 * value2;
      }
      return rect;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  DoubleTapToReactActionSheetTsx1.__closure = items1;
  DoubleTapToReactActionSheetTsx1.__workletHash = 7386139842022;
  DoubleTapToReactActionSheetTsx1.__initData = tmp7;
  const style = obj6.useAnimatedStyle(DoubleTapToReactActionSheetTsx1);
  return closure_11(sharedValue(tmp[12]).View, { style, children });
}
function EmojiBurstAnimation(emojiComponent) {
  let items;
  emojiComponent = emojiComponent.emojiComponent;
  const obj = { style: closure_13().burstContainer, children: items };
  items = [unpackModuleId(EmojiConfetti, { emojiComponent, top: true, left: true, leading: true }), unpackModuleId(EmojiConfetti, { emojiComponent, top: true, right: true }), unpackModuleId(EmojiConfetti, { emojiComponent, bottom: true, left: true }), unpackModuleId(EmojiConfetti, { emojiComponent, bottom: true, right: true })];
  return authStore2(View, obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
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
let closure_14 = { code: "(function DoubleTapToReactActionSheetTsx1(){let[sizeValue,left,rotationValue,top,positionValue,opacityValue]=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};})" };
let closure_17 = { code: "(function DoubleTapToReactActionSheetTsx2(){let[interpolate,sharedSaveValue]=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};})" };
let closure_18 = { code: "(function DoubleTapToReactActionSheetTsx3(){let[scaleChangeValue,opacityChangeValue]=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};})" };
let closure_19 = { code: "(function DoubleTapToReactActionSheetTsx4(){let[scheduleOnRN,setAnimateConfetti]=this.__closure;return scheduleOnRN(setAnimateConfetti,true);})" };
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  let closure_3;
  let intl;
  let intl2;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let obj6;
  let str;
  let stringResult;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp21;
  emoji = emoji.emoji;
  let first1;
  let closure_4;
  let first2;
  let ref;
  let sharedValue1;
  let sharedValue2;
  let memo;
  let callback1;
  let tmp = closure_13();
  let obj = first2;
  const tmp2 = closure_4(first2.useState(false), 2);
  _require = tmp2[1];
  let tmp4 = _require;
  const first = tmp2[0];
  let obj2 = require("get initialized");
  let items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => ref.useReducedMotion);
  let tmp7 = closure_4(first2.useState(emoji), 2);
  first1 = tmp7[0];
  _asyncToGenerator = tmp7[1];
  closure_4 = first2.useRef(true);
  let tmp9 = closure_4(first2.useState(false), 2);
  first2 = tmp9[0];
  let closure_6 = tmp9[1];
  ref = first2.useRef(null);
  let obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(0);
  let items1 = [closure_17, , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  const tmp12 = require("module_1652");
  items1[1] = require("module_1652").interpolate;
  items1[2] = sharedValue;
  let c0;
  let c1;
  [tmp13, tmp14, tmp15] = items1;
  class DoubleTapToReactActionSheetTsx2 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined(_undefined2.get(), [0, 1], [1, 1.3]) }, ];
      ({ scale: _undefined(_undefined2.get(), [0, 1], [1, 1.3]) });
      items[1] = { translateY: _undefined(_undefined2.get(), [0, 1], [0, -20]) };
      ({ translateY: _undefined(_undefined2.get(), [0, 1], [0, -20]) });
      return obj;
    }
  }
  const items2 = [tmp14, tmp15];
  DoubleTapToReactActionSheetTsx2.__closure = items2;
  DoubleTapToReactActionSheetTsx2.__workletHash = 4658248494487;
  DoubleTapToReactActionSheetTsx2.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(DoubleTapToReactActionSheetTsx2);
  let tmp4Result = tmp4(tmp5[12]);
  sharedValue1 = tmp4Result.useSharedValue(1);
  const tmp4Result4 = tmp4(first1[12]);
  sharedValue2 = tmp4Result4.useSharedValue(1);
  const items3 = [closure_18, sharedValue1, sharedValue2];
  c0 = undefined;
  c1 = undefined;
  [tmp19, tmp20, tmp21] = items3;
  const tmp4Result5 = tmp4(first1[12]);
  class DoubleTapToReactActionSheetTsx3 {
    constructor() {
      let items;
      const obj = { transform: items, opacity: _undefined2.get() };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items4 = [tmp20, tmp21];
  DoubleTapToReactActionSheetTsx3.__closure = items4;
  DoubleTapToReactActionSheetTsx3.__workletHash = 2167494599504;
  DoubleTapToReactActionSheetTsx3.__initData = tmp19;
  const items5 = [sharedValue1, sharedValue2, stateFromStores, first2];
  const animatedStyle1 = tmp4Result5.useAnimatedStyle(DoubleTapToReactActionSheetTsx3);
  const items6 = [first1];
  const callback = obj.useCallback((arg0, current) => {
    closure_0 = arg0;
    const tmp = first2;
    if (!tmp) {
      if (current) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        const withSequence = closure_0(first1[12]).withSequence;
        closure_0(first1[12]);
        const obj = closure_0(first1[13]);
        const withTimingResult = obj.withTiming(0.7, { duration: 0 });
        const obj2 = closure_0(first1[16]);
        const result2 = set(withSequence(withTimingResult, obj2.withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        set2 = sharedValue2.set;
        const withSequence2 = closure_0(first1[12]).withSequence;
        closure_0(first1[12]);
        const obj3 = closure_0(first1[13]);
        const withTimingResult1 = obj3.withTiming(0.6, { duration: 0 });
        const obj4 = closure_0(first1[16]);
        set2(withSequence2(withTimingResult1, obj4.withSpring(1, { duration: 133, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3(closure_0);
        closure_4.current = current;
      }, 0);
    }
  }, items5);
  memo = obj.useMemo(() => {
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
  }, items6);
  const items7 = [first1, stateFromStores];
  const memo1 = obj.useMemo(() => {
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
  }, items7);
  let obj4 = { style: tmp.emoji, fastImageStyle: tmp.selectedCustomEmoji, textEmojiStyle: tmp.selectedTextEmoji, name: str, src: memo1 };
  str = "";
  let tmp28 = stateFromStores(tmp5[21]);
  if (null == first1.id) {
    str = first1.surrogates;
  }
  const tmp26Result = memo(tmp28, obj4);
  const items8 = [memo, first1];
  callback1 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
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
          const obj = closure_0(emoji[24]);
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
  }), items8);
  const items9 = [stateFromStores, sharedValue, callback1];
  const items10 = [callback1];
  const callback2 = obj.useCallback(() => {
    let Easing;
    let tmp14;
    let tmp15;
    let tmp16;
    closure_6(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      const withSequence = _mod1652.withSequence;
      let obj = timing_timing;
      const withTimingResult = obj.withTiming(0, { duration: 0 });
      const obj2 = { duration: 100, easing: Easing.out(_mod1652.Easing.quad) };
      const withTiming = timing_timing.withTiming;
      timing_timing;
      Easing = _mod1652.Easing;
      const withTimingResult1 = withTiming(1, obj2);
      const items = [closure_19, , ];
      const withTiming2 = timing_timing.withTiming;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = closure_0;
      let c0;
      let c1;
      [tmp14, tmp15, tmp16] = items;
      const tmp4 = require;
      class DoubleTapToReactActionSheetTsx4 {
        constructor() {
          return _undefined(c1, true);
        }
      }
      const items1 = [tmp15, tmp16];
      DoubleTapToReactActionSheetTsx4.__closure = items1;
      DoubleTapToReactActionSheetTsx4.__workletHash = 601184467601;
      DoubleTapToReactActionSheetTsx4.__initData = tmp14;
      const withTiming2Result = withTiming2(1, { duration: 100 }, undefined, DoubleTapToReactActionSheetTsx4);
      const tmp4Result = tmp4(5876);
      const result1 = set(withSequence(withTimingResult, withTimingResult1, withTiming2Result, tmp4Result.withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
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
      const obj = stateFromStores(first1[26]);
      obj.hideActionSheet();
    }, num6);
  }, items9);
  const callback3 = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    callback1();
  }, items10);
  let obj5 = { onDismiss: callback3, children: callback1(closure_6, obj6) };
  obj6 = { style: tmp.content, children: items14 };
  const obj7 = { style: tmp.emojiContainer, children: items13 };
  const ActionSheet = tmp4(tmp5[27]).ActionSheet;
  const obj8 = { style: items11, children: items12 };
  items11 = [animatedStyle, animatedStyle1];
  items12 = [tmp26Result, ];
  let tmp26Result2 = null;
  View = tmp27(tmp5[12]).View;
  if (!stateFromStores) {
    tmp26Result2 = null;
    if (first) {
      const obj9 = { emojiComponent: tmp26Result };
      tmp26Result2 = tmp26(EmojiBurstAnimation, obj9);
    }
  }
  items12[1] = tmp26Result2;
  items13 = [callback1(View, obj8), ];
  const obj10 = { variant: "body-lg/semibold", style: tmp.selectedEmojiText, color: "interactive-text-default", children: "1" };
  items13[1] = memo(tmp4(first1[28]).Text, obj10);
  items14 = [callback1(closure_6, obj7), , , , , ];
  const obj11 = { variant: "body-sm/normal", color: "text-subtle", style: tmp.emojiName, children: ":" + first1.name + ":" };
  const Text = tmp4(tmp5[28]).Text;
  items14[1] = memo(Text, obj11);
  const obj12 = { style: tmp.header, children: items15 };
  const obj13 = { style: tmp.alignCenter, variant: "body-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp4(first1[29]).t.F6lRAI) };
  const Text2 = tmp4(tmp5[28]).Text;
  intl = tmp4(tmp5[29]).intl;
  items15 = [tmp26(Text2, obj13), tmp26(tmp4(tmp5[30]).NewBadge, {})];
  items14[2] = callback1(closure_6, obj12);
  const obj14 = { style: tmp.alignCenter, variant: "body-md/medium", color: "text-default", children: intl2.string(tmp4(first1[29]).t.yIax8g) };
  const Text3 = tmp4(tmp5[28]).Text;
  intl2 = tmp4(tmp5[29]).intl;
  items14[3] = memo(Text3, obj14);
  const obj15 = { style: tmp.emojiSelectRow, selectedEmoji: first1, onPressEmoji: callback };
  items14[4] = memo(stateFromStores(first1[31]), obj15);
  const Button = tmp4(tmp5[32]).Button;
  const tmp4Result6 = tmp4(first1[19]);
  const areEmojisEqualResult = tmp4Result6.areEmojisEqual(first1, emoji);
  const intl3 = tmp4(tmp5[29]).intl;
  const string = intl3.string;
  const t = tmp4(tmp5[29]).t;
  if (areEmojisEqualResult) {
    stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  items14[5] = memo(Button, { grow: true, size: "lg", text: stringResult, variant: "primary", onPress: callback2, disabled: first2 });
  return memo(ActionSheet, obj5);
};
