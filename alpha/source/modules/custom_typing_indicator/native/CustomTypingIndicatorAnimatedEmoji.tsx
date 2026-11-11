// Module ID: 14485
// Function ID: 14486
// Name: CustomTypingIndicatorAnimatedEmoji
// Dependencies: [32, 19, 2117, 1072, 21, 5243, 5257, 14486, 1652, 504, 1398, 5485, 7828, 1411, 2]
// Exports: default

// Module 14485 (CustomTypingIndicatorAnimatedEmoji)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import user from "user" /* 1398 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let set, set2, set3;

const AppStates = Constants.AppStates;
const jsx = Fragment.jsx;
let c8 = 320;
let closure_9 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: { width, height: width, alignItems: "center", justifyContent: "center" }, textEmoji: size, imageEmoji: { width, height: width } };
  size = { width: 18 * width / 14, height: 18 * width / 14, textAlign: "center", fontSize: 12 * width / 14, lineHeight: 18 * width / 14 };
  return obj;
});
let closure_10 = { code: "(function CustomTypingIndicatorAnimatedEmojiTsx1(){let[angle,scale,ringRadius,translateY]=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
  let animated;
  let duration;
  let emoji;
  let emojiURL;
  let index;
  let obj3;
  let str;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp7Result;
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  let num = emojiCount.size;
  const emojisKey = emojiCount.emojisKey;
  if (num === undefined) {
    num = 16;
  }
  const animation = emojiCount.animation;
  let enabled;
  let closure_6;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let stateFromStores;
  let tmp = sharedValue2(num);
  let obj = enabled;
  let tmp2 = index;
  let tmp3 = num;
  enabled = enabled.useContext(index(num[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  const tmp4 = animation(obj.useState(null), 2);
  closure_6 = tmp4[1];
  let items = [name];
  const first = tmp4[0];
  let tmp7 = emojiCount;
  const callback = obj.useCallback(() => {
    closure_6(name);
  }, items);
  const tmp8 = emojiCount(tmp3[7])();
  const tmp2Result = tmp2(tmp3[8]);
  sharedValue = tmp2Result.useSharedValue(1);
  const tmp2Result5 = tmp2(tmp3[8]);
  sharedValue1 = tmp2Result5.useSharedValue(0);
  const tmp2Result6 = tmp2(tmp3[8]);
  sharedValue2 = tmp2Result6.useSharedValue(0);
  const items1 = [name];
  const tmp2Result7 = tmp2(tmp3[9]);
  stateFromStores = tmp2Result7.useStateFromStores(items1, () => name.getState() === closure_6.ACTIVE);
  const items2 = [animation, index, emojiCount, enabled, stateFromStores, sharedValue1, sharedValue, sharedValue2, num];
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue1.set(0);
    const result2 = sharedValue2.set(0);
    const tmp = sharedValue;
    const tmp3 = sharedValue1;
    const tmp5 = sharedValue2;
    const tmp7 = enabled;
    if (!tmp7) {
      if (animation !== user.TypingIndicatorAnimation.UNSPECIFIED) {
        const tmp28 = stateFromStores;
        if (tmp28) {
          const result3 = index * duration;
          const result4 = duration * (emojiCount - 1);
          if (user.TypingIndicatorAnimation.PULSE === animation) {
            set2 = tmp.set;
            const withDelay2 = _mod1652.withDelay;
            _mod1652;
            const withRepeat2 = _mod1652.withRepeat;
            _mod1652;
            const withSequence = _mod1652.withSequence;
            _mod1652;
            let obj2 = { duration };
            const tmp9Result17 = timing_timing;
            let obj3 = { duration };
            const withTimingResult = tmp9Result17.withTiming(1.16, obj2);
            const tmp9Result18 = timing_timing;
            const obj4 = { duration: result4 };
            const withTimingResult1 = tmp9Result18.withTiming(1, obj3);
            const tmp9Result19 = timing_timing;
            set2(withDelay2(result3, withRepeat2(withSequence(withTimingResult, withTimingResult1, tmp9Result19.withTiming(1, obj4)), -1)));
          } else if (user.TypingIndicatorAnimation.RING === animation) {
            set = tmp3.set;
            const withDelay = _mod1652.withDelay;
            _mod1652;
            const withRepeat = _mod1652.withRepeat;
            _mod1652;
            const _Math = Math;
            num = 2;
            let obj = { duration: 1600, easing: _mod1652.Easing.linear };
            const withTiming = timing_timing.withTiming;
            const result5 = 2 * Math.PI;
            timing_timing;
            const result6 = set(withDelay(result3, withRepeat(withTiming(result5, obj), -1)));
          } else if (user.TypingIndicatorAnimation.WAVE === animation) {
            set3 = tmp5.set;
            const withDelay3 = _mod1652.withDelay;
            _mod1652;
            const withRepeat3 = _mod1652.withRepeat;
            _mod1652;
            const withSequence2 = _mod1652.withSequence;
            _mod1652;
            const obj5 = { duration };
            const tmp9Result26 = timing_timing;
            const obj6 = { duration };
            const withTimingResult2 = tmp9Result26.withTiming(-0.12 * num, obj5);
            const tmp9Result27 = timing_timing;
            const obj7 = { duration: result4 };
            const withTimingResult3 = tmp9Result27.withTiming(0, obj6);
            const tmp9Result28 = timing_timing;
            set3(withDelay3(result3, withRepeat3(withSequence2(withTimingResult2, withTimingResult3, tmp9Result28.withTiming(0, obj7)), -1)));
          }
          return () => {
            const obj = index(num[8]);
            obj.cancelAnimation(sharedValue);
            const obj2 = index(num[8]);
            obj2.cancelAnimation(sharedValue1);
            const obj3 = index(num[8]);
            obj3.cancelAnimation(sharedValue2);
          };
        }
      }
    }
  }, items2);
  const items3 = [stateFromStores, sharedValue1, sharedValue, 0.0625 * num, sharedValue2];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
  const tmp2Result8 = tmp2(tmp3[8]);
  class CustomTypingIndicatorAnimatedEmojiTsx1 {
    constructor() {
      let items;
      let tmp2;
      let value2;
      const value = _undefined.get();
      const obj = { transform: items };
      items = [{ scale: _undefined2.get() }, , ];
      const obj3 = { translateX: tmp2 * Math.sin(value) };
      ({ scale: _undefined2.get() });
      tmp2 = -c2;
      items[1] = obj3;
      const obj4 = { translateY: value2 + c2 * (Math.cos(value) - 1) };
      value2 = _undefined3.get();
      items[2] = obj4;
      return obj;
    }
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18];
  CustomTypingIndicatorAnimatedEmojiTsx1.__closure = items4;
  CustomTypingIndicatorAnimatedEmojiTsx1.__workletHash = 1185511828923;
  CustomTypingIndicatorAnimatedEmojiTsx1.__initData = tmp14;
  const animatedStyle = tmp2Result8.useAnimatedStyle(CustomTypingIndicatorAnimatedEmojiTsx1);
  let obj2 = { style: animatedStyle, children: sharedValue(tmp7Result, obj3, emojisKey) };
  const View = tmp7(tmp3[8]).View;
  obj3 = { style: tmp.emojiContainer, name: str, src: emojiURL, fastImageStyle: null, textEmojiStyle: null, onError: callback };
  str = "\u{1F615}";
  tmp7Result = tmp7(tmp3[12]);
  if (first !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  emojiURL = undefined;
  if (first !== name) {
    if (null != emoji.id) {
      let obj4 = { id: null, animated, size: num };
      ({ id: obj9.id, animated } = emoji);
      const getEmojiURL = tmp7(tmp3[13]).getEmojiURL;
      tmp7(tmp3[13]);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp8;
      }
      emojiURL = getEmojiURL(obj4);
    }
  }
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  return sharedValue(View, obj2);
};
