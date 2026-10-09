// Module ID: 15572
// Function ID: 15573
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1393, 21, 15573, 15575, 15577, 15579, 15581, 15583, 15585, 15587, 15589, 15591, 15593, 15595, 15597, 15599, 15601, 15603, 15605, 15607, 15609, 15611, 15613, 15615, 5091, 558, 576, 11610, 1415, 6816, 4811, 5375, 5379, 9397, 1126, 3829, 1411, 6188, 12, 5374, 2]

// Module 15572 (CustomTypingIndicatorEmojiSlots)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import spring from "spring" /* 5375 */;
import springPresets from "springPresets" /* 5379 */;
import EmojiDefault from "Emoji" /* 6816 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9397 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 11610 */;
import EmojiAngryFaceWithHornsIcon from "EmojiAngryFaceWithHornsIcon" /* 15573 */;
import EmojiColdFaceIcon from "EmojiColdFaceIcon" /* 15575 */;
import EmojiCowboyHatFaceIcon from "EmojiCowboyHatFaceIcon" /* 15577 */;
import EmojiCryingFaceIcon from "EmojiCryingFaceIcon" /* 15579 */;
import EmojiDisguisedFaceIcon from "EmojiDisguisedFaceIcon" /* 15581 */;
import EmojiFaceVomitingIcon from "EmojiFaceVomitingIcon" /* 15583 */;
import EmojiFaceWithMonocleIcon from "EmojiFaceWithMonocleIcon" /* 15585 */;
import EmojiFaceWithSpiralEyesIcon from "EmojiFaceWithSpiralEyesIcon" /* 15587 */;
import EmojiMeltingFaceIcon from "EmojiMeltingFaceIcon" /* 15589 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 15591 */;
import EmojiNerdFaceIcon from "EmojiNerdFaceIcon" /* 15593 */;
import EmojiPartyingFaceIcon from "EmojiPartyingFaceIcon" /* 15595 */;
import EmojiSalutingFaceIcon from "EmojiSalutingFaceIcon" /* 15597 */;
import EmojiSkullIcon from "EmojiSkullIcon" /* 15599 */;
import EmojiSmilingFaceWithHornsIcon from "EmojiSmilingFaceWithHornsIcon" /* 15601 */;
import EmojiSmilingFaceWithSunglassesIcon from "EmojiSmilingFaceWithSunglassesIcon" /* 15603 */;
import EmojiSquintingFaceWithTongueIcon from "EmojiSquintingFaceWithTongueIcon" /* 15605 */;
import EmojiUpsideDownFaceIcon from "EmojiUpsideDownFaceIcon" /* 15607 */;
import EmojiWoozyFaceIcon from "EmojiWoozyFaceIcon" /* 15609 */;
import EmojiZanyFaceIcon from "EmojiZanyFaceIcon" /* 15611 */;
import EmojiRollingOnTheFloorLaughingIcon from "EmojiRollingOnTheFloorLaughingIcon" /* 15613 */;
import EmojiSmilingFaceWithHeartsIcon from "EmojiSmilingFaceWithHeartsIcon" /* 15615 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let c7 = 28;
let c8 = 0.4;
let c9 = 1.14;
let items = [EmojiAngryFaceWithHornsIcon.EmojiAngryFaceWithHornsIcon, EmojiColdFaceIcon.EmojiColdFaceIcon, EmojiCowboyHatFaceIcon.EmojiCowboyHatFaceIcon, EmojiCryingFaceIcon.EmojiCryingFaceIcon, EmojiDisguisedFaceIcon.EmojiDisguisedFaceIcon, EmojiFaceVomitingIcon.EmojiFaceVomitingIcon, EmojiFaceWithMonocleIcon.EmojiFaceWithMonocleIcon, EmojiFaceWithSpiralEyesIcon.EmojiFaceWithSpiralEyesIcon, EmojiMeltingFaceIcon.EmojiMeltingFaceIcon, EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon, EmojiNerdFaceIcon.EmojiNerdFaceIcon, EmojiPartyingFaceIcon.EmojiPartyingFaceIcon, EmojiSalutingFaceIcon.EmojiSalutingFaceIcon, EmojiSkullIcon.EmojiSkullIcon, EmojiSmilingFaceWithHornsIcon.EmojiSmilingFaceWithHornsIcon, EmojiSmilingFaceWithSunglassesIcon.EmojiSmilingFaceWithSunglassesIcon, EmojiSquintingFaceWithTongueIcon.EmojiSquintingFaceWithTongueIcon, EmojiUpsideDownFaceIcon.EmojiUpsideDownFaceIcon, EmojiWoozyFaceIcon.EmojiWoozyFaceIcon, EmojiZanyFaceIcon.EmojiZanyFaceIcon, EmojiRollingOnTheFloorLaughingIcon.EmojiRollingOnTheFloorLaughingIcon, EmojiSmilingFaceWithHeartsIcon.EmojiSmilingFaceWithHeartsIcon];
let closure_11 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiGlyph(emoji) {
  let animated;
  const obj = react2;
  const cResult = obj.c(9);
  emoji = emoji.emoji;
  const tmp4 = useCanPlayAnimatedEmojiDefault();
  if (cResult[0] === tmp4) {
    if (cResult[1] === emoji.animated) {
      let tmp5;
      let tmp11;
      let tmp10;
      if (cResult[2] === emoji.id) {
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        size = { width: v28, height: v28 };
        const obj3 = { fontSize: v28, lineHeight: 32 };
        cResult[4] = size;
        cResult[5] = obj3;
        tmp11 = obj3;
        tmp10 = size;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      if (cResult[6] === emoji.name) {
        let tmp13;
        if (cResult[7] === tmp5) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const tmp15 = jsx(EmojiDefault, { name: emoji.name, src: tmp5, fastImageStyle: tmp10, textEmojiStyle: tmp11 });
      cResult[6] = emoji.name;
      cResult[7] = tmp5;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj5 = { id: null, animated, size: v28 };
    ({ id: obj2.id, animated } = emoji);
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = tmp4;
    }
    emojiURL = getEmojiURL(obj5);
  }
  cResult[0] = tmp4;
  cResult[1] = emoji.animated;
  cResult[2] = emoji.id;
  cResult[3] = emojiURL;
  tmp5 = emojiURL;
}) : (function EmojiGlyph(emoji) {
  let animated;
  let emojiURL;
  emoji = emoji.emoji;
  const obj = { name: emoji.name, src: emojiURL, fastImageStyle: size, textEmojiStyle: { fontSize: v28, lineHeight: 32 } };
  emojiURL = undefined;
  const tmp3 = useCanPlayAnimatedEmojiDefault();
  const tmp4 = jsx;
  const tmp5 = EmojiDefault;
  if (null != emoji.id) {
    const obj3 = { id: null, animated, size: v28 };
    ({ id: obj2.id, animated } = emoji);
    const getEmojiURL = tmp(1415).getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = tmp3;
    }
    emojiURL = getEmojiURL(obj3);
  }
  size = { width: v28, height: v28 };
  return tmp4(tmp5, obj);
});
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
const __initData2 = { code: "function CustomTypingIndicatorEmojiSlotsTsx2(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlaceholderEmojiGlyph(arg0) {
  let Icon;
  let first;
  let pressed;
  let tmp6;
  let obj = pressed(576);
  const cResult = obj.c(6);
  ({ Icon, pressed } = arg0);
  let obj2 = pressed(4811);
  const fn = function n() {
    let interpolateResult;
    let interpolateResult1;
    let items2;
    let withSpring;
    let withSpring2;
    const value = pressed.get();
    const obj = { opacity: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING), transform: items2 };
    withSpring = spring.withSpring;
    spring;
    items = [c8, 1];
    const obj2 = ReanimatedRexport;
    interpolateResult = obj2.interpolate(value, [0, 1], items);
    const obj3 = { scale: withSpring2(interpolateResult1, springPresets.ON_PRESS_SPRING) };
    withSpring2 = spring.withSpring;
    spring;
    const items1 = [1, c9];
    const obj4 = ReanimatedRexport;
    items2 = [obj3];
    interpolateResult1 = obj4.interpolate(value, [0, 1], items1);
    return obj;
  };
  let obj3 = { pressed, withSpring: pressed(5375).withSpring, interpolate: pressed(4811).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY, ON_PRESS_SPRING: pressed(5379).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE };
  fn.__closure = obj3;
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: v28, height: v28 };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== Icon) {
    const tmp8 = <Icon size="custom" style={first} />;
    cResult[1] = Icon;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === animatedStyle) {
    let tmp9;
    if (cResult[4] === tmp6) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp6 });
  cResult[3] = animatedStyle;
  cResult[4] = tmp6;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : (function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const Icon = pressed.Icon;
  let obj = pressed(4811);
  const fn = function o() {
    let interpolateResult;
    let interpolateResult1;
    let items2;
    let withSpring;
    let withSpring2;
    const value = pressed.get();
    const obj = { opacity: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING), transform: items2 };
    withSpring = spring.withSpring;
    spring;
    items = [c8, 1];
    const obj2 = ReanimatedRexport;
    interpolateResult = obj2.interpolate(value, [0, 1], items);
    const obj3 = { scale: withSpring2(interpolateResult1, springPresets.ON_PRESS_SPRING) };
    withSpring2 = spring.withSpring;
    spring;
    const items1 = [1, c9];
    const obj4 = ReanimatedRexport;
    items2 = [obj3];
    interpolateResult1 = obj4.interpolate(value, [0, 1], items1);
    return obj;
  };
  let obj2 = { pressed, withSpring: pressed(5375).withSpring, interpolate: pressed(4811).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY, ON_PRESS_SPRING: pressed(5379).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE };
  fn.__closure = obj2;
  fn.__workletHash = 4597331743997;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj4 = { size: "custom", style: size };
  size = { width: v28, height: v28 };
  const View = ReanimatedRexportDefault.View;
  return <View style={animatedStyle}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEmojiSlot(index) {
  let emoji;
  let emojisKey;
  let onChange;
  let placeholderIcon;
  let sharedValue;
  let tmp = index;
  let tmp2 = sharedValue;
  let obj = index(sharedValue[28]);
  const cResult = obj.c(22);
  index = index.index;
  ({ emoji, emojisKey, placeholderIcon, onChange } = index);
  closure_11();
  let obj2 = index(sharedValue[32]);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === index) {
    let formatToPlainString2Result;
    if (cResult[3] !== sharedValue) {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
      cResult[3] = sharedValue;
      cResult[4] = P;
    } else {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
    }
    if (cResult[5] !== sharedValue) {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
      cResult[5] = sharedValue;
      cResult[6] = tmp9;
    } else {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
    }
    if (cResult[7] === emoji) {
      let tmp21;
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
      if (cResult[10] === emoji) {
        class P {
          constructor() {
            return sharedValue.set(1);
          }
        }
      }
      if (null != emoji) {
        class P {
          constructor() {
            return sharedValue.set(1);
          }
        }
        tmp21 = <closure_12 key={emojisKey} emoji={emoji} />;
      } else {
        class P {
          constructor() {
            return sharedValue.set(1);
          }
        }
        tmp21 = <closure_15 Icon={placeholderIcon} pressed={sharedValue} />;
      }
      cResult[10] = emoji;
      cResult[11] = emojisKey;
      cResult[12] = placeholderIcon;
      cResult[13] = sharedValue;
      cResult[14] = tmp21;
    }
    if (null != emoji) {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
      const formatToPlainString2 = tmp15.formatToPlainString;
      const obj5 = { slot: index + 1, total: tmp(tmp2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
      const prop = onChange(tmp2[37])["lEsZ+N"];
      formatToPlainString2Result = formatToPlainString2(prop, obj5);
    } else {
      class P {
        constructor() {
          return sharedValue.set(1);
        }
      }
      const formatToPlainString = tmp12.formatToPlainString;
      const obj6 = { slot: index + 1, total: tmp(tmp2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
      const O0Pe85 = onChange(tmp2[37]).O0Pe85;
      formatToPlainString2Result = formatToPlainString(O0Pe85, obj6);
    }
    cResult[7] = emoji;
    cResult[8] = index;
    cResult[9] = formatToPlainString2Result;
  }
  const fn = function n() {
    let obj = openEmojiPickerActionSheet;
    const obj2 = {
      onPressEmoji(id) {
        let str2;
        id = id.id;
        const obj = { id, name: null, animated: null };
        const tmp = onChange;
        const tmp2 = index;
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return tmp(tmp2, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    };
    const result = obj.openEmojiPickerActionSheet(obj2);
  };
  cResult[0] = index;
  cResult[1] = onChange;
  cResult[2] = fn;
}) : (function CustomTypingIndicatorEmojiSlot(index) {
  let emoji;
  let emojisKey;
  let formatToPlainString2Result;
  let onChange;
  let placeholderIcon;
  let tmp12Result;
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  ({ emojisKey, placeholderIcon } = index);
  let tmp2 = index;
  let tmp = closure_11();
  let obj = index(sharedValue[32]);
  sharedValue = obj.useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    let obj = openEmojiPickerActionSheet;
    const obj2 = {
      onPressEmoji(id) {
        let str2;
        id = id.id;
        const obj = { id, name: null, animated: null };
        const tmp = onChange;
        const tmp2 = index;
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return tmp(tmp2, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    };
    const result = obj.openEmojiPickerActionSheet(obj2);
  }, items);
  const items2 = [sharedValue];
  const callback1 = react.useCallback(() => sharedValue.set(1), items1);
  const callback2 = react.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[36]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    let obj2 = { slot: index + 1, total: tmp2(sharedValue[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    const prop = onChange(tmp3[37])["lEsZ+N"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = tmp2(tmp3[36]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { slot: index + 1, total: tmp2(sharedValue[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    const O0Pe85 = onChange(tmp3[37]).O0Pe85;
    formatToPlainString2Result = formatToPlainString(O0Pe85, obj3);
  }
  const Card = tmp2(tmp3[39]).Card;
  if (null != emoji) {
    const obj5 = { emoji };
    tmp12Result = tmp12(closure_12, obj5, emojisKey);
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp12Result = tmp12(closure_15, obj6);
  }
  return <Card style={tmp.slot} onPress={callback} onPressIn={callback1} onPressOut={callback2} accessibilityLabel={formatToPlainString2Result} radius={16}>{tmp12Result}</Card>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEmojiSlots(emojis) {
  let emojisKey;
  let first;
  let first1;
  let tmp6;
  let tmp = emojis;
  let tmp2 = first1;
  let obj = emojis(first1[28]);
  const cResult = obj.c(8);
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = emojis(first1[40]);
      return obj.sampleSize(items, emojis(first1[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(react.useState(first), 1)[0];
  if (cResult[1] !== emojis) {
    const tmpResult = tmp(tmp2[38]);
    const customTypingIndicatorEmojisKey = tmpResult.getCustomTypingIndicatorEmojisKey(emojis);
    cResult[1] = emojis;
    cResult[2] = customTypingIndicatorEmojisKey;
    tmp6 = customTypingIndicatorEmojisKey;
  } else {
    tmp6 = cResult[2];
  }
  _slicedToArray = tmp6;
  if (cResult[3] === emojis) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === onChange) {
        let tmp8;
        if (cResult[6] === first1) {
          tmp8 = cResult[7];
        }
        return tmp8;
      }
    }
  }
  const obj3 = { length: tmp(tmp2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = tmp(tmp2[41]).Stack;
  const tmp9 = <Stack direction="horizontal" spacing={8}>{from(obj3, (arg0, index) => {
    let tmp3;
    const obj = { index, emoji: tmp3, emojisKey, placeholderIcon: first1[index], onChange };
    tmp3 = emojis[index];
    const tmp = jsx;
    const tmp2 = closure_16;
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp(tmp2, obj, index);
  })}</Stack>;
  cResult[3] = emojis;
  cResult[4] = tmp6;
  cResult[5] = onChange;
  cResult[6] = first1;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : (function CustomTypingIndicatorEmojiSlots(emojis) {
  let closure_2;
  let emojisKey;
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(react.useState(() => {
    const obj = emojis(closure_2[40]);
    return obj.sampleSize(items, emojis(closure_2[38]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
  }), 1)[0];
  let obj = emojis(1411);
  _slicedToArray = obj.getCustomTypingIndicatorEmojisKey(emojis);
  const obj3 = { length: emojis(1411).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = emojis(5374).Stack;
  return <Stack direction="horizontal" spacing={8}>{from(obj3, (arg0, index) => {
    let tmp3;
    const obj = { index, emoji: tmp3, emojisKey, placeholderIcon: closure_2[index], onChange };
    tmp3 = emojis[index];
    const tmp = jsx;
    const tmp2 = closure_16;
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp(tmp2, obj, index);
  })}</Stack>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default tmp2;
