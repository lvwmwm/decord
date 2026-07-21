// Module ID: 11415
// Function ID: 88751
// Name: EmojiConfetti
// Dependencies: []
// Exports: default

// Module 11415 (EmojiConfetti)
function EmojiConfetti(children) {
  let bottom;
  let left;
  let right;
  const top = children.top;
  const arg1 = top;
  ({ bottom, left } = children);
  const importDefault = left;
  ({ right, leading: closure_2 } = children);
  const sharedValue = arg1(dependencyMap[12]).useSharedValue(0);
  let closure_3 = sharedValue;
  const obj = arg1(dependencyMap[12]);
  const sharedValue1 = arg1(dependencyMap[12]).useSharedValue(0);
  let closure_4 = sharedValue1;
  const obj2 = arg1(dependencyMap[12]);
  const sharedValue2 = arg1(dependencyMap[12]).useSharedValue(0.2);
  let closure_5 = sharedValue2;
  const obj3 = arg1(dependencyMap[12]);
  const sharedValue3 = arg1(dependencyMap[12]).useSharedValue(0);
  const View = sharedValue3;
  const obj4 = arg1(dependencyMap[12]);
  const mountLayoutEffect = arg1(dependencyMap[14]).useMountLayoutEffect(() => {
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
    let obj1 = top(closure_2[12]);
    let obj2 = top(closure_2[13]);
    obj = { duration: num };
    let obj4 = top(closure_2[13]);
    obj = { duration: 600 };
    const result = 10 * Math.random();
    const Easing = top(closure_2[12]).Easing;
    obj.easing = Easing.out(top(closure_2[12]).Easing.ease);
    const result1 = positionValue.set(obj1.withSequence(obj2.withTiming(0, obj), obj4.withTiming(result + 35, obj)));
    const withTimingResult = obj2.withTiming(0, obj);
    const obj7 = top(closure_2[12]);
    obj1 = { duration: num };
    const obj8 = top(closure_2[13]);
    const withTimingResult1 = top(closure_2[13]).withTiming(0, obj1);
    obj2 = { duration: 600 };
    const result2 = 40 * Math.random();
    obj2.easing = top(closure_2[12]).Easing.ease;
    const result3 = rotationValue.set(obj7.withSequence(withTimingResult1, top(closure_2[13]).withTiming(result2 + 20, obj2)));
    const obj10 = top(closure_2[13]);
    const obj12 = top(closure_2[12]);
    const obj3 = { duration: num };
    const obj13 = top(closure_2[13]);
    const withTimingResult2 = top(closure_2[13]).withTiming(0, obj3);
    const obj15 = top(closure_2[13]);
    const withTimingResult3 = top(closure_2[13]).withTiming(0.3 * Math.random() + 0.5, { duration: 240 });
    const result4 = sizeValue.set(obj12.withSequence(withTimingResult2, withTimingResult3, top(closure_2[13]).withTiming(0.5, { duration: 360 })));
    const obj16 = top(closure_2[13]);
    const obj17 = top(closure_2[12]);
    obj4 = { duration: num };
    const obj18 = top(closure_2[13]);
    const withTimingResult4 = top(closure_2[13]).withTiming(0, obj4);
    const obj20 = top(closure_2[13]);
    const withTimingResult5 = top(closure_2[13]).withTiming(1, { duration: 360 });
    const result5 = opacityValue.set(obj17.withSequence(withTimingResult4, withTimingResult5, top(closure_2[13]).withTiming(0, { duration: 240 })));
  });
  const obj5 = arg1(dependencyMap[14]);
  const fn = function f() {
    let obj = { position: "absolute" };
    obj = { scale: sharedValue2.get() };
    const items = [obj, ];
    obj = {};
    let num = 1;
    if (true === left) {
      num = -1;
    }
    obj.rotate = `${num * closure_4.get()}deg`;
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
  const style = arg1(dependencyMap[12]).useAnimatedStyle(fn);
  return callback4(importDefault(dependencyMap[12]).View, { style, children: children.emojiComponent });
}
function EmojiBurstAnimation(emojiComponent) {
  emojiComponent = emojiComponent.emojiComponent;
  let obj = { style: callback6().burstContainer };
  obj = { 1286424402: true, -704095584: true, -705178107: true, 928372124: true, emojiComponent };
  const items = [callback4(EmojiConfetti, obj), , , ];
  obj = { themeColorContainer: null, abuf: null, ORDER_UPDATE: null, emojiComponent };
  items[1] = callback4(EmojiConfetti, obj);
  const obj1 = { yqX4Dr: null, _handleContentOnLayout: null, fullScreenSwipeEnabled: null, emojiComponent };
  items[2] = callback4(EmojiConfetti, obj1);
  const obj2 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, emojiComponent };
  items[3] = callback4(EmojiConfetti, obj2);
  obj.children = items;
  return callback5(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[7]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { emoji: {}, selectedCustomEmoji: { bhk: null, bic: null } };
obj = {};
let obj3 = arg1(dependencyMap[10]);
let num = 36;
if (obj3.isIOS()) {
  num = 48;
}
obj.fontSize = num;
let obj4 = arg1(dependencyMap[10]);
let num2;
if (obj4.isIOS()) {
  num2 = 56;
}
obj.lineHeight = num2;
obj.textAlign = "center";
obj.color = importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_DEFAULT;
obj.selectedTextEmoji = obj;
const obj1 = { marginLeft: importDefault(dependencyMap[11]).space.PX_16, fontSize: 40 };
let obj6 = arg1(dependencyMap[10]);
let num3;
if (obj6.isIOS()) {
  num3 = 56;
}
obj1.lineHeight = num3;
obj.selectedEmojiText = obj1;
const tmp2 = arg1(dependencyMap[8]);
obj.content = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4, paddingTop: importDefault(dependencyMap[11]).space.PX_32, paddingBottom: importDefault(dependencyMap[11]).space.PX_12 };
obj3 = { flexDirection: "row", backgroundColor: importDefault(dependencyMap[11]).colors.CARD_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[11]).colors.BORDER_STRONG, borderWidth: 4, paddingVertical: importDefault(dependencyMap[11]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, borderRadius: importDefault(dependencyMap[11]).radii.xl, justifyContent: "center", alignItems: "center" };
obj.emojiContainer = obj3;
obj.alignCenter = { textAlign: "center" };
obj4 = { marginVertical: importDefault(dependencyMap[11]).space.PX_24 };
obj.emojiSelectRow = obj4;
const obj2 = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4, paddingTop: importDefault(dependencyMap[11]).space.PX_32, paddingBottom: importDefault(dependencyMap[11]).space.PX_12 };
obj.header = { marginBottom: importDefault(dependencyMap[11]).space.PX_8, gap: importDefault(dependencyMap[11]).space.PX_8 };
obj6 = { marginTop: importDefault(dependencyMap[11]).space.PX_8, marginBottom: importDefault(dependencyMap[11]).space.PX_24 };
obj.emojiName = obj6;
obj.burstContainer = {};
let closure_13 = obj.createStyles(obj);
let closure_14 = { code: "function DoubleTapToReactActionSheetTsx1(){const{sizeValue,left,rotationValue,top,positionValue,opacityValue}=this.__closure;return{position:'absolute',transform:[{scale:sizeValue.get()},{rotate:(left===true?-1:1)*rotationValue.get()+\"deg\"}],top:top===true?-positionValue.get():positionValue.get(),left:left===true?-positionValue.get()*1.5:positionValue.get()*1.5,opacity:opacityValue.get()};}" };
let closure_15 = { code: "function DoubleTapToReactActionSheetTsx2(){const{interpolate,sharedSaveValue}=this.__closure;return{transform:[{scale:interpolate(sharedSaveValue.get(),[0,1],[1,1.3])},{translateY:interpolate(sharedSaveValue.get(),[0,1],[0,-20])}]};}" };
let closure_16 = { code: "function DoubleTapToReactActionSheetTsx3(){const{scaleChangeValue,opacityChangeValue}=this.__closure;return{transform:[{scale:scaleChangeValue.get()}],opacity:opacityChangeValue.get()};}" };
let closure_17 = { code: "function DoubleTapToReactActionSheetTsx4(){const{runOnJS,setAnimateConfetti}=this.__closure;return runOnJS(setAnimateConfetti)(true);}" };
const obj5 = { marginBottom: importDefault(dependencyMap[11]).space.PX_8, gap: importDefault(dependencyMap[11]).space.PX_8 };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx");

export default function DoubleTapToReactActionSheet(emoji) {
  emoji = emoji.emoji;
  let callback1;
  const tmp = callback6();
  const tmp2 = callback3(React.useState(false), 2);
  let callback = tmp2[1];
  let obj = callback(dependencyMap[15]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_7.useReducedMotion);
  const importDefault = stateFromStores;
  const tmp4 = callback3(React.useState(emoji), 2);
  const first = tmp4[0];
  const dependencyMap = first;
  let callback2 = tmp4[1];
  let callback3 = React.useRef(true);
  const tmp6 = callback3(React.useState(false), 2);
  const first1 = tmp6[0];
  const React = first1;
  let closure_6 = tmp6[1];
  closure_7 = React.useRef(null);
  let obj1 = callback(dependencyMap[12]);
  const sharedValue = obj1.useSharedValue(0);
  let closure_8 = sharedValue;
  let obj2 = callback(dependencyMap[12]);
  class S {
    constructor() {
      obj = {};
      obj = {};
      obj3 = useState(closure_2[12]);
      obj.scale = obj3.interpolate(useSharedValue.get(), ["Text", "lc"], [1077146943, 113]);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = useState(closure_2[12]);
      items1 = [0.229];
      items1[1] = -20;
      obj1.translateY = obj5.interpolate(useSharedValue.get(), ["Text", "lc"], items1);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { interpolate: callback(dependencyMap[12]).interpolate, sharedSaveValue: sharedValue };
  S.__closure = obj;
  S.__workletHash = 14159749218638;
  S.__initData = closure_15;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = callback(dependencyMap[12]);
  const sharedValue1 = obj4.useSharedValue(1);
  const AnalyticEvents = sharedValue1;
  let obj5 = callback(dependencyMap[12]);
  const sharedValue2 = obj5.useSharedValue(1);
  const EMOJI_URL_BASE_SIZE = sharedValue2;
  let obj6 = callback(dependencyMap[12]);
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
  const items1 = [sharedValue1, sharedValue2, stateFromStores, first1];
  const animatedStyle1 = obj6.useAnimatedStyle(C);
  const items2 = [first];
  callback = React.useCallback((arg0, arg1) => {
    const callback = arg0;
    const stateFromStores = arg1;
    if (!first1) {
      if (stateFromStores) {
        const result = set(1);
        const result1 = sharedValue2.set(1);
      } else {
        let obj = callback(first[12]);
        obj = { duration: 0 };
        const obj2 = callback(first[13]);
        const withTimingResult = callback(first[13]).withTiming(0.7, obj);
        const result2 = set(obj.withSequence(withTimingResult, callback(first[16]).withSpring(1, {})));
        const obj4 = callback(first[16]);
        const obj5 = callback(first[12]);
        obj = { duration: 0 };
        const obj6 = callback(first[13]);
        const withTimingResult1 = callback(first[13]).withTiming(0.6, obj);
        const result3 = sharedValue2.set(obj5.withSequence(withTimingResult1, callback(first[16]).withSpring(1, {})));
        const obj8 = callback(first[16]);
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(arg0);
        closure_4.current = arg1;
      }, 0);
    }
  }, items1);
  const memo = React.useMemo(() => {
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
  const memo1 = React.useMemo(() => {
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
  const tmp16Result = memo(importDefault(dependencyMap[21]), obj);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [memo, first];
  callback1 = React.useCallback(callback2(obj), items4);
  const items5 = [stateFromStores, sharedValue, callback1];
  const items6 = [callback1];
  callback2 = React.useCallback(() => {
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
        return callback(closure_2[12]).runOnJS(callback)(true);
      };
      const obj2 = { runOnJS: callback(first[12]).runOnJS, setAnimateConfetti: callback };
      fn.__closure = obj2;
      fn.__workletHash = 13953384401061;
      fn.__initData = closure_17;
      const obj4 = callback(first[13]);
      const withTimingResult2 = obj6.withTiming(1, obj1, undefined, fn);
      const result1 = set(obj.withSequence(withTimingResult, withTimingResult1, withTimingResult2, callback(first[16]).withSpring(0, {})));
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
      closure_7.current = null;
      callback3();
      callback2(closure_2[25]).hideActionSheet();
    }, num10);
  }, items5);
  callback3 = React.useCallback(() => {
    if (null != closure_7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = null;
    }
    callback1();
  }, items6);
  obj1 = { onDismiss: callback3 };
  obj2 = { style: tmp.content };
  const obj3 = { style: tmp.emojiContainer };
  obj4 = { style: items7 };
  const items7 = [animatedStyle, animatedStyle1];
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
  const items9 = [callback1(importDefault(dependencyMap[12]).View, obj4), ];
  obj6 = { style: tmp.selectedEmojiText };
  items9[1] = memo(callback(dependencyMap[27]).Text, obj6);
  obj3.children = items9;
  const items10 = [callback1(closure_6, obj3), , , , , ];
  const obj7 = { style: tmp.emojiName, children: ":" + first.name + ":" };
  items10[1] = memo(callback(dependencyMap[27]).Text, obj7);
  const obj8 = { style: tmp.header };
  const obj9 = { style: tmp.alignCenter };
  const intl = callback(dependencyMap[28]).intl;
  obj9.children = intl.string(callback(dependencyMap[28]).t.F6lRAI);
  const items11 = [memo(callback(dependencyMap[27]).Text, obj9), memo(callback(dependencyMap[29]).NewBadge, {})];
  obj8.children = items11;
  items10[2] = callback1(closure_6, obj8);
  const obj10 = { style: tmp.alignCenter };
  const intl2 = callback(dependencyMap[28]).intl;
  obj10.children = intl2.string(callback(dependencyMap[28]).t.yIax8g);
  items10[3] = memo(callback(dependencyMap[27]).Text, obj10);
  items10[4] = memo(importDefault(dependencyMap[30]), { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback });
  const obj12 = { 9223372036854775807: "WireType", 9223372036854775807: "Array", 0: "isArray", 0: "accessibilityRole" };
  const obj11 = { style: tmp.emojiSelectRow, selectedEmoji: first, onPressEmoji: callback };
  const tmp16 = memo;
  const tmp17 = importDefault(dependencyMap[21]);
  const tmp22 = memo;
  const tmp23 = callback1;
  const tmp24 = closure_6;
  const tmp25 = callback1;
  const tmp26 = closure_6;
  const tmp27 = callback1;
  const tmp31 = memo;
  const obj21 = callback(dependencyMap[19]);
  const intl3 = callback(dependencyMap[28]).intl;
  const string = intl3.string;
  const t = callback(dependencyMap[28]).t;
  if (areEmojisEqualResult) {
    let stringResult = string(t.NX+WJN);
  } else {
    stringResult = string(t.tdsiO9);
  }
  obj12.text = stringResult;
  obj12.onPress = callback2;
  obj12.disabled = first1;
  items10[5] = tmp31(callback(dependencyMap[31]).Button, obj12);
  obj2.children = items10;
  obj1.children = tmp23(tmp24, obj2);
  return tmp22(callback(dependencyMap[26]).ActionSheet, obj1);
};
