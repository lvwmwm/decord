// Module ID: 11426
// Function ID: 88826
// Name: EmojiConfetti
// Dependencies: [5, 57, 31, 27, 4122, 4991, 653, 1852, 33, 4130, 477, 689, 3991, 4131, 4559, 566, 4542, 3803, 3771, 7656, 1392, 5151, 675, 5484, 9339, 4098, 5500, 4126, 1212, 11390, 11427, 4543, 2]
// Exports: default

// Module 11426 (EmojiConfetti)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { View } from "Text";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "set";
import set from "result";

let closure_11;
let closure_12;
const require = arg1;
function EmojiConfetti(children) {
  let bottom;
  let dependencyMap;
  let left;
  let right;
  const top = children.top;
  ({ bottom, left } = children);
  ({ right, leading: dependencyMap } = children);
  const sharedValue = top(3991).useSharedValue(0);
  let obj = top(3991);
  const sharedValue1 = top(3991).useSharedValue(0);
  let obj2 = top(3991);
  const sharedValue2 = top(3991).useSharedValue(0.2);
  let obj3 = top(3991);
  const sharedValue3 = top(3991).useSharedValue(0);
  let obj4 = top(3991);
  const mountLayoutEffect = top(4559).useMountLayoutEffect(() => {
    let opacityValue;
    let positionValue;
    let rotationValue;
    let sizeValue;
    let obj = { positionValue: sharedValue, rotationValue: sharedValue1, sizeValue: sharedValue2, opacityValue: sharedValue3, leading: closure_2 };
    ({ positionValue, rotationValue, sizeValue, opacityValue } = obj);
    let num = 0;
    if (!obj.leading) {
      const _Math = Math;
      num = 50 + 150 * Math.random();
    }
    let obj1 = top(outer1_2[12]);
    let obj2 = top(outer1_2[13]);
    obj = { duration: num };
    let obj4 = top(outer1_2[13]);
    obj = { duration: 600 };
    const result = 10 * Math.random();
    const Easing = top(outer1_2[12]).Easing;
    obj.easing = Easing.out(top(outer1_2[12]).Easing.ease);
    const result1 = positionValue.set(obj1.withSequence(obj2.withTiming(0, obj), obj4.withTiming(result + 35, obj)));
    const withTimingResult = obj2.withTiming(0, obj);
    const obj7 = top(outer1_2[12]);
    obj1 = { duration: num };
    const obj8 = top(outer1_2[13]);
    const withTimingResult1 = top(outer1_2[13]).withTiming(0, obj1);
    obj2 = { duration: 600 };
    const result2 = 40 * Math.random();
    obj2.easing = top(outer1_2[12]).Easing.ease;
    const result3 = rotationValue.set(obj7.withSequence(withTimingResult1, top(outer1_2[13]).withTiming(result2 + 20, obj2)));
    const obj10 = top(outer1_2[13]);
    const obj12 = top(outer1_2[12]);
    const obj3 = { duration: num };
    const obj13 = top(outer1_2[13]);
    const withTimingResult2 = top(outer1_2[13]).withTiming(0, obj3);
    const obj15 = top(outer1_2[13]);
    const withTimingResult3 = top(outer1_2[13]).withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const result4 = sizeValue.set(obj12.withSequence(withTimingResult2, withTimingResult3, top(outer1_2[13]).withTiming(0.5, { duration: 360 })));
    const obj16 = top(outer1_2[13]);
    const obj17 = top(outer1_2[12]);
    obj4 = { duration: num };
    const obj18 = top(outer1_2[13]);
    const withTimingResult4 = top(outer1_2[13]).withTiming(0, obj4);
    const obj20 = top(outer1_2[13]);
    const withTimingResult5 = top(outer1_2[13]).withTiming(1, { duration: 360 });
    const result5 = opacityValue.set(obj17.withSequence(withTimingResult4, withTimingResult5, top(outer1_2[13]).withTiming(0, { duration: 240 })));
  });
  const obj5 = top(4559);
  const fn = function f() {
    let obj = { position: "absolute" };
    obj = { scale: sharedValue2.get() };
    const items = [obj, ];
    obj = {};
    let num = 1;
    if (true === left) {
      num = -1;
    }
    obj.rotate = `${num * sharedValue1.get()}deg`;
    items[1] = obj;
    obj.transform = items;
    if (true === top) {
      let value = -sharedValue.get();
    } else {
      value = sharedValue.get();
    }
    obj.top = value;
    if (true === left) {
      let result = 1.5 * -sharedValue.get();
    } else {
      result = 1.5 * sharedValue.get();
    }
    obj.left = result;
    obj.opacity = sharedValue3.get();
    return obj;
  };
  fn.__closure = { sizeValue: sharedValue2, left, rotationValue: sharedValue1, top, positionValue: sharedValue, opacityValue: sharedValue3 };
  fn.__workletHash = 1455873119263;
  fn.__initData = closure_14;
  const style = top(3991).useAnimatedStyle(fn);
  return callback3(left(3991).View, { style, children: children.emojiComponent });
}
function EmojiBurstAnimation(emojiComponent) {
  emojiComponent = emojiComponent.emojiComponent;
  let obj = { style: _createForOfIteratorHelperLoose().burstContainer };
  obj = { emojiComponent, top: true, left: true, leading: true };
  const items = [callback3(EmojiConfetti, obj), , , ];
  obj = { emojiComponent, top: true, right: true };
  items[1] = callback3(EmojiConfetti, obj);
  const obj1 = { emojiComponent, bottom: true, left: true };
  items[2] = callback3(EmojiConfetti, obj1);
  const obj2 = { emojiComponent, bottom: true, right: true };
  items[3] = callback3(EmojiConfetti, obj2);
  obj.children = items;
  return callback4(View, obj);
}
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { emoji: { width: 48, height: 48, zIndex: 2 }, selectedCustomEmoji: { width: 48, height: 48 } };
_createForOfIteratorHelperLoose = {};
let num = 36;
if (set.isIOS()) {
  num = 48;
}
_createForOfIteratorHelperLoose.fontSize = num;
let num2;
if (set.isIOS()) {
  num2 = 56;
}
_createForOfIteratorHelperLoose.lineHeight = num2;
_createForOfIteratorHelperLoose.textAlign = "center";
_createForOfIteratorHelperLoose.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT;
_createForOfIteratorHelperLoose.selectedTextEmoji = _createForOfIteratorHelperLoose;
let obj1 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, fontSize: 40 };
let num3;
if (set.isIOS()) {
  num3 = 56;
}
obj1.lineHeight = num3;
_createForOfIteratorHelperLoose.selectedEmojiText = obj1;
let obj2 = { flexDirection: "column", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_32, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.content = obj2;
set = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderWidth: 4, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.emojiContainer = set;
_createForOfIteratorHelperLoose.alignCenter = { textAlign: "center" };
set = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.emojiSelectRow = set;
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.header = obj5;
set = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.emojiName = set;
_createForOfIteratorHelperLoose.burstContainer = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = { code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
let closure_15 = { code: "function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
let closure_16 = { code: "function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_17 = { code: "function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  emoji = emoji.emoji;
  let callback1;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback2(first1.useState(false), 2);
  const _require = tmp2[1];
  let obj = _require(first[15]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_7.useReducedMotion);
  const tmp4 = callback2(first1.useState(emoji), 2);
  first = tmp4[0];
  let callback = tmp4[1];
  callback2 = first1.useRef(true);
  let tmp6 = callback2(first1.useState(false), 2);
  first1 = tmp6[0];
  let closure_6 = tmp6[1];
  closure_7 = first1.useRef(null);
  let obj1 = _require(first[12]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = _require(first[12]);
  class S {
    constructor() {
      obj = {};
      obj = {};
      obj3 = useState(outer1_2[12]);
      obj.scale = obj3.interpolate(useSharedValue.get(), [0, 1], [1, 1.3]);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = useState(outer1_2[12]);
      items1 = [0];
      items1[1] = -20;
      obj1.translateY = obj5.interpolate(useSharedValue.get(), [0, 1], items1);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { interpolate: _require(first[12]).interpolate, sharedSaveValue: sharedValue };
  S.__closure = obj;
  S.__workletHash = 14159749218638;
  S.__initData = closure_15;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = _require(first[12]);
  const sharedValue1 = obj4.useSharedValue(1);
  let obj5 = _require(first[12]);
  const sharedValue2 = obj5.useSharedValue(1);
  let obj6 = _require(first[12]);
  class C {
    constructor() {
      obj = {};
      obj = { scale: closure_9.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.opacity = useSharedValue.get();
      return obj;
    }
  }
  C.__closure = { scaleChangeValue: sharedValue1, opacityChangeValue: sharedValue2 };
  C.__workletHash = 17229591239241;
  C.__initData = closure_16;
  let items1 = [sharedValue1, sharedValue2, stateFromStores, first1];
  const animatedStyle1 = obj6.useAnimatedStyle(C);
  const items2 = [first];
  callback = first1.useCallback((arg0, arg1) => {
    const callback = arg0;
    let closure_1 = arg1;
    if (!first1) {
      if (closure_1) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        let obj = callback(first[12]);
        obj = { duration: 0 };
        const obj2 = callback(first[13]);
        const withTimingResult = callback(first[13]).withTiming(0.7, obj);
        const result2 = set(obj.withSequence(withTimingResult, callback(first[16]).withSpring(1, { stiffness: 1500, damping: 60, mass: 3 })));
        const obj4 = callback(first[16]);
        const obj5 = callback(first[12]);
        obj = { duration: 0 };
        const obj6 = callback(first[13]);
        const withTimingResult1 = callback(first[13]).withTiming(0.6, obj);
        const result3 = sharedValue2.set(obj5.withSequence(withTimingResult1, callback(first[16]).withSpring(1, { duration: 200, dampingRatio: 0.45, mass: 10, overshootClamping: true })));
        const obj8 = callback(first[16]);
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer1_3(closure_0);
        outer1_4.current = closure_1;
      }, 0);
    }
  }, items1);
  const memo = first1.useMemo(() => {
    let emojiId;
    let emojiName;
    const DoubleTapReactionEmoji = callback(first[17]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    ({ emojiId, emojiName } = setting);
    if (null != emojiId) {
      let customEmojiById = sharedValue.getCustomEmojiById(emojiId);
    } else {
      customEmojiById = null;
      if (null != emojiName) {
        customEmojiById = stateFromStores(first[18]).getByName(emojiName);
        const obj = stateFromStores(first[18]);
      }
    }
    let tmp6 = null == customEmojiById;
    if (!tmp6) {
      tmp6 = !callback(first[19]).areEmojisEqual(customEmojiById, first);
      const obj2 = callback(first[19]);
    }
    return tmp6;
  }, items2);
  const items3 = [first, stateFromStores];
  const memo1 = first1.useMemo(() => {
    if (null != first.id) {
      let obj = stateFromStores(first[20]);
      obj = { id: first.id };
      let animated = !stateFromStores;
      if (animated) {
        animated = first.animated;
      }
      obj.animated = animated;
      obj.size = sharedValue2;
      let url = obj.getEmojiURL(obj);
    } else {
      url = first.url;
    }
    return url;
  }, items3);
  obj = { style: tmp.emoji, fastImageStyle: tmp.selectedCustomEmoji, textEmojiStyle: tmp.selectedTextEmoji };
  let str = "";
  if (null == first.id) {
    str = first.surrogates;
  }
  obj.name = str;
  obj.src = memo1;
  const tmp16Result = memo(stateFromStores(first[21]), obj);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [memo, first];
  callback1 = first1.useCallback(callback(obj), items4);
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  callback2 = first1.useCallback(() => {
    callback2(true);
    if (stateFromStores) {
      const result = set(0);
    } else {
      let obj = callback(first[12]);
      let obj1 = callback(first[13]);
      obj = { duration: 0 };
      const withTimingResult = obj1.withTiming(0, obj);
      obj = { duration: 100 };
      const Easing = callback(first[12]).Easing;
      obj.easing = Easing.out(callback(first[12]).Easing.quad);
      const withTimingResult1 = callback(first[13]).withTiming(1, obj);
      const obj6 = callback(first[13]);
      obj1 = { duration: 100 };
      const fn = function t() {
        return callback(first[12]).runOnJS(outer1_0)(true);
      };
      const obj2 = { runOnJS: callback(first[12]).runOnJS, setAnimateConfetti: callback };
      fn.__closure = obj2;
      fn.__workletHash = 13953384401061;
      fn.__initData = outer1_17;
      const obj4 = callback(first[13]);
      const withTimingResult2 = obj6.withTiming(1, obj1, undefined, fn);
      const result1 = set(obj.withSequence(withTimingResult, withTimingResult1, withTimingResult2, callback(first[16]).withSpring(0, { stiffness: 2000, damping: 70, mass: 3 })));
      const obj9 = callback(first[16]);
    }
    if (null != closure_7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
    }
    let num10 = 900;
    if (stateFromStores) {
      num10 = 0;
    }
    closure_7.current = setTimeout(() => {
      outer1_7.current = null;
      outer1_12();
      stateFromStores(first[25]).hideActionSheet();
    }, num10);
  }, items5);
  const callback3 = first1.useCallback(() => {
    if (null != closure_7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = null;
    }
    callback1();
  }, items6);
  obj1 = { onDismiss: callback3 };
  obj2 = { style: tmp.content };
  let obj3 = { style: tmp.emojiContainer };
  obj4 = { style: items7 };
  items7 = [animatedStyle, animatedStyle1];
  const items8 = [tmp16Result, ];
  let tmp28 = null;
  if (!stateFromStores) {
    tmp28 = null;
    if (tmp2[0]) {
      obj5 = { emojiComponent: tmp16Result };
      tmp28 = memo(EmojiBurstAnimation, obj5);
    }
  }
  items8[1] = tmp28;
  obj4.children = items8;
  const items9 = [callback1(stateFromStores(first[12]).View, obj4), ];
  obj6 = { variant: "text-lg/semibold", style: tmp.selectedEmojiText, color: "interactive-text-default", children: "1" };
  items9[1] = memo(_require(first[27]).Text, obj6);
  obj3.children = items9;
  const items10 = [callback1(closure_6, obj3), , , , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.emojiName, children: ":" + first.name + ":" };
  items10[1] = memo(_require(first[27]).Text, obj7);
  let obj8 = { style: tmp.header };
  let obj9 = { style: tmp.alignCenter, variant: "text-lg/bold", color: "mobile-text-heading-primary" };
  const intl = _require(first[28]).intl;
  obj9.children = intl.string(_require(first[28]).t.F6lRAI);
  const items11 = [memo(_require(first[27]).Text, obj9), memo(_require(first[29]).NewBadge, {})];
  obj8.children = items11;
  items10[2] = callback1(closure_6, obj8);
  const obj10 = { style: tmp.alignCenter, variant: "text-md/medium", color: "text-default" };
  const intl2 = _require(first[28]).intl;
  obj10.children = intl2.string(_require(first[28]).t.yIax8g);
  items10[3] = memo(_require(first[27]).Text, obj10);
  items10[4] = memo(stateFromStores(first[30]), { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback });
  const obj12 = { grow: true, size: "lg", text: null, variant: "primary" };
  const obj11 = { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback };
  const tmp16 = memo;
  const tmp17 = stateFromStores(first[21]);
  const tmp22 = memo;
  const tmp23 = callback1;
  const tmp24 = closure_6;
  const tmp25 = callback1;
  const tmp26 = closure_6;
  const tmp27 = callback1;
  const tmp31 = memo;
  const obj21 = _require(first[19]);
  const intl3 = _require(first[28]).intl;
  const string = intl3.string;
  const t = _require(first[28]).t;
  if (areEmojisEqualResult) {
    let stringResult = string(t["NX+WJN"]);
  } else {
    stringResult = string(t.tdsiO9);
  }
  obj12.text = stringResult;
  obj12.onPress = callback2;
  obj12.disabled = first1;
  items10[5] = tmp31(_require(first[31]).Button, obj12);
  obj2.children = items10;
  obj1.children = tmp23(tmp24, obj2);
  return tmp22(_require(first[26]).ActionSheet, obj1);
};
