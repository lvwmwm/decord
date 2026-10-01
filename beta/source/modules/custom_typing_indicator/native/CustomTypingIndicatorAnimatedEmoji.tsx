// Module ID: 11464
// Function ID: 11465
// Name: CustomTypingIndicatorAnimatedEmoji
// Dependencies: [32, 19, 1980, 1074, 21, 4836, 4550, 2021, 4566, 504, 1380, 4837, 6551, 1397, 2]
// Exports: default

// Module 11464 (CustomTypingIndicatorAnimatedEmoji)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import user from "user" /* 1380 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

const AppStates = Constants.AppStates;
const jsx = Fragment.jsx;
let c8 = 320;
let closure_9 = createStyles.createStyles((fontSize) => ({ textEmoji: { fontSize }, imageEmoji: { width: fontSize, height: fontSize } }));
let __initData = { code: "function CustomTypingIndicatorAnimatedEmojiTsx1(){const{angle,scale,ringRadius,translateY}=this.__closure;const currentAngle=angle.get();return{transform:[{scale:scale.get()},{translateX:-ringRadius*Math.sin(currentAngle)},{translateY:translateY.get()+ringRadius*(Math.cos(currentAngle)-1)}]};}" };
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimatedEmoji.tsx");

export default function CustomTypingIndicatorAnimatedEmoji(emojiCount) {
  let animated;
  let c10;
  let duration;
  let emoji;
  let emojiURL;
  let index;
  let obj3;
  let tmp18;
  ({ emoji, index } = emojiCount);
  emojiCount = emojiCount.emojiCount;
  let num = emojiCount.size;
  if (num === undefined) {
    num = 16;
  }
  const animation = emojiCount.animation;
  let enabled;
  let closure_6;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  __initData = undefined;
  let stateFromStores;
  let tmp = sharedValue2(num);
  let obj = enabled;
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
  const callback = obj.useCallback(() => {
    closure_6(name);
  }, items);
  const AnimateEmoji = tmp2(tmp3[7]).AnimateEmoji;
  let tmp7 = AnimateEmoji.useSetting() && !enabled;
  const tmp2Result = index(tmp3[8]);
  sharedValue = tmp2Result.useSharedValue(1);
  const tmp2Result5 = index(tmp3[8]);
  sharedValue1 = tmp2Result5.useSharedValue(0);
  const tmp2Result6 = index(tmp3[8]);
  sharedValue2 = tmp2Result6.useSharedValue(0);
  let result = 0.0625 * num;
  __initData = result;
  const items1 = [name];
  const tmp2Result7 = index(tmp3[9]);
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
            const withDelay2 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat2 = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const withSequence = ReanimatedRexport.withSequence;
            ReanimatedRexport;
            let obj2 = { duration };
            const tmp9Result17 = timing;
            let obj3 = { duration };
            const withTimingResult = tmp9Result17.withTiming(1.16, obj2);
            const tmp9Result18 = timing;
            const obj4 = { duration: result4 };
            const withTimingResult1 = tmp9Result18.withTiming(1, obj3);
            const tmp9Result19 = timing;
            set2(withDelay2(result3, withRepeat2(withSequence(withTimingResult, withTimingResult1, tmp9Result19.withTiming(1, obj4)), -1)));
          } else if (user.TypingIndicatorAnimation.RING === animation) {
            set = tmp3.set;
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const _Math = Math;
            num = 2;
            let obj = { duration: 1600, easing: ReanimatedRexport.Easing.linear };
            const withTiming = timing.withTiming;
            const result5 = 2 * Math.PI;
            timing;
            const result6 = set(withDelay(result3, withRepeat(withTiming(result5, obj), -1)));
          } else if (user.TypingIndicatorAnimation.WAVE === animation) {
            set3 = tmp5.set;
            const withDelay3 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const withRepeat3 = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            const withSequence2 = ReanimatedRexport.withSequence;
            ReanimatedRexport;
            const obj5 = { duration };
            const tmp9Result26 = timing;
            const obj6 = { duration };
            const withTimingResult2 = tmp9Result26.withTiming(-0.12 * num, obj5);
            const tmp9Result27 = timing;
            const obj7 = { duration: result4 };
            const withTimingResult3 = tmp9Result27.withTiming(0, obj6);
            const tmp9Result28 = timing;
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
  const tmp2Result8 = index(tmp3[8]);
  class Y {
    constructor() {
      let items;
      let value2;
      const value = sharedValue1.get();
      const obj = { transform: items };
      items = [{ scale: sharedValue.get() }, , ];
      ({ scale: sharedValue.get() });
      items[1] = { translateX: -c10 * Math.sin(value) };
      const obj4 = { translateY: value2 + c10 * (Math.cos(value) - 1) };
      ({ translateX: -c10 * Math.sin(value) });
      value2 = sharedValue2.get();
      items[2] = obj4;
      return obj;
    }
  }
  Y.__closure = { angle: sharedValue1, scale: sharedValue, ringRadius: result, translateY: sharedValue2 };
  Y.__workletHash = 2311631571202;
  Y.__initData = __initData;
  const animatedStyle = tmp2Result8.useAnimatedStyle(Y);
  let obj2 = { style: animatedStyle, children: sharedValue(tmp18, obj3, name) };
  const View = emojiCount(tmp3[8]).View;
  let str = "\u{1F615}";
  tmp18 = emojiCount(tmp3[12]);
  if (first !== name) {
    let str2 = "";
    if (null == emoji.id) {
      str2 = emoji.name;
    }
    str = str2;
  }
  obj3 = { name: str, src: emojiURL, fastImageStyle: null, textEmojiStyle: null, onError: callback };
  emojiURL = undefined;
  if (first !== name) {
    if (null != emoji.id) {
      let obj4 = { id: null, animated, size: num };
      ({ id: obj9.id, animated } = emoji);
      const getEmojiURL = tmp17(tmp3[13]).getEmojiURL;
      emojiCount(tmp3[13]);
      if (animated == null) {
        animated = false;
      }
      if (animated) {
        animated = tmp7;
      }
      emojiURL = getEmojiURL(obj4);
    }
  }
  ({ imageEmoji: obj8.fastImageStyle, textEmoji: obj8.textEmojiStyle } = tmp);
  return sharedValue(View, obj2);
};
