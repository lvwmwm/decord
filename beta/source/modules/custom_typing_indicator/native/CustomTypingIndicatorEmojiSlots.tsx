// Module ID: 14909
// Function ID: 14910
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1375, 21, 14910, 14912, 14914, 14916, 14918, 14920, 14922, 14924, 14926, 14928, 14930, 14932, 14934, 14936, 14938, 14940, 14942, 14944, 14946, 14948, 14950, 14952, 4836, 6551, 1397, 4566, 5280, 5284, 10583, 1115, 3717, 1393, 5919, 12, 5279, 2]
// Exports: default

// Module 14909 (CustomTypingIndicatorEmojiSlots)
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1393 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import EmojiDefault from "Emoji" /* 6551 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import EmojiAngryFaceWithHornsIcon from "EmojiAngryFaceWithHornsIcon" /* 14910 */;
import EmojiColdFaceIcon from "EmojiColdFaceIcon" /* 14912 */;
import EmojiCowboyHatFaceIcon from "EmojiCowboyHatFaceIcon" /* 14914 */;
import EmojiCryingFaceIcon from "EmojiCryingFaceIcon" /* 14916 */;
import EmojiDisguisedFaceIcon from "EmojiDisguisedFaceIcon" /* 14918 */;
import EmojiFaceVomitingIcon from "EmojiFaceVomitingIcon" /* 14920 */;
import EmojiFaceWithMonocleIcon from "EmojiFaceWithMonocleIcon" /* 14922 */;
import EmojiFaceWithSpiralEyesIcon from "EmojiFaceWithSpiralEyesIcon" /* 14924 */;
import EmojiMeltingFaceIcon from "EmojiMeltingFaceIcon" /* 14926 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 14928 */;
import EmojiNerdFaceIcon from "EmojiNerdFaceIcon" /* 14930 */;
import EmojiPartyingFaceIcon from "EmojiPartyingFaceIcon" /* 14932 */;
import EmojiSalutingFaceIcon from "EmojiSalutingFaceIcon" /* 14934 */;
import EmojiSkullIcon from "EmojiSkullIcon" /* 14936 */;
import EmojiSmilingFaceWithHornsIcon from "EmojiSmilingFaceWithHornsIcon" /* 14938 */;
import EmojiSmilingFaceWithSunglassesIcon from "EmojiSmilingFaceWithSunglassesIcon" /* 14940 */;
import EmojiSquintingFaceWithTongueIcon from "EmojiSquintingFaceWithTongueIcon" /* 14942 */;
import EmojiUpsideDownFaceIcon from "EmojiUpsideDownFaceIcon" /* 14944 */;
import EmojiWoozyFaceIcon from "EmojiWoozyFaceIcon" /* 14946 */;
import EmojiZanyFaceIcon from "EmojiZanyFaceIcon" /* 14948 */;
import EmojiRollingOnTheFloorLaughingIcon from "EmojiRollingOnTheFloorLaughingIcon" /* 14950 */;
import EmojiSmilingFaceWithHeartsIcon from "EmojiSmilingFaceWithHeartsIcon" /* 14952 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap;

function EmojiGlyph(emoji) {
  let animated;
  let emojiURL;
  emoji = emoji.emoji;
  const obj = { name: emoji.name, src: emojiURL, fastImageStyle: size, textEmojiStyle: { fontSize: v28, lineHeight: 32 } };
  emojiURL = undefined;
  const tmp = jsx;
  const tmp4 = EmojiDefault;
  if (null != emoji.id) {
    const obj3 = { id: null, animated, size: v28 };
    ({ id: obj2.id, animated } = emoji);
    const getEmojiURL = tmp2(1397).getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    emojiURL = getEmojiURL(obj3);
  }
  size = { width: v28, height: v28 };
  return tmp(tmp4, obj);
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const Icon = pressed.Icon;
  let obj = pressed(4566);
  const fn = function t() {
    let interpolateResult;
    let interpolateResult1;
    let withSpring;
    let withSpring2;
    const value = pressed.get();
    const obj = { opacity: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING), transform: items };
    withSpring = spring.withSpring;
    spring;
    const obj2 = ReanimatedRexport;
    interpolateResult = obj2.interpolate(value, [0, 1], [0.4, 1]);
    const obj3 = { scale: withSpring2(interpolateResult1, springPresets.ON_PRESS_SPRING) };
    withSpring2 = spring.withSpring;
    spring;
    const obj4 = ReanimatedRexport;
    items = [obj3];
    interpolateResult1 = obj4.interpolate(value, [0, 1], [1, 1.14]);
    return obj;
  };
  let obj2 = { pressed, withSpring: pressed(5280).withSpring, interpolate: pressed(4566).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(5284).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__closure = obj2;
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj4 = { size: "custom", style: size };
  size = { width: v28, height: v28 };
  const View = ReanimatedRexportDefault.View;
  return <View style={animatedStyle}>{null}</View>;
}
function CustomTypingIndicatorEmojiSlot(index) {
  let emoji;
  let formatToPlainString2Result;
  let onChange;
  let tmp12Result;
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  const placeholderIcon = index.placeholderIcon;
  let tmp2 = index;
  let tmp = closure_9();
  let obj = index(sharedValue[29]);
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
    const intl2 = tmp2(tmp3[33]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    let obj2 = { slot: index + 1, total: tmp2(sharedValue[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    const prop = onChange(tmp3[34])["lEsZ+N"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = tmp2(tmp3[33]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { slot: index + 1, total: tmp2(sharedValue[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    const O0Pe85 = onChange(tmp3[34]).O0Pe85;
    formatToPlainString2Result = formatToPlainString(O0Pe85, obj3);
  }
  const Card = tmp2(tmp3[36]).Card;
  if (null != emoji) {
    const obj5 = { emoji };
    tmp12Result = tmp12(EmojiGlyph, obj5);
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp12Result = tmp12(PlaceholderEmojiGlyph, obj6);
  }
  return <Card style={tmp.slot} onPress={callback} onPressIn={callback1} onPressOut={callback2} accessibilityLabel={formatToPlainString2Result} radius={16}>{tmp12Result}</Card>;
}
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let c7 = 28;
let items = [EmojiAngryFaceWithHornsIcon.EmojiAngryFaceWithHornsIcon, EmojiColdFaceIcon.EmojiColdFaceIcon, EmojiCowboyHatFaceIcon.EmojiCowboyHatFaceIcon, EmojiCryingFaceIcon.EmojiCryingFaceIcon, EmojiDisguisedFaceIcon.EmojiDisguisedFaceIcon, EmojiFaceVomitingIcon.EmojiFaceVomitingIcon, EmojiFaceWithMonocleIcon.EmojiFaceWithMonocleIcon, EmojiFaceWithSpiralEyesIcon.EmojiFaceWithSpiralEyesIcon, EmojiMeltingFaceIcon.EmojiMeltingFaceIcon, EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon, EmojiNerdFaceIcon.EmojiNerdFaceIcon, EmojiPartyingFaceIcon.EmojiPartyingFaceIcon, EmojiSalutingFaceIcon.EmojiSalutingFaceIcon, EmojiSkullIcon.EmojiSkullIcon, EmojiSmilingFaceWithHornsIcon.EmojiSmilingFaceWithHornsIcon, EmojiSmilingFaceWithSunglassesIcon.EmojiSmilingFaceWithSunglassesIcon, EmojiSquintingFaceWithTongueIcon.EmojiSquintingFaceWithTongueIcon, EmojiUpsideDownFaceIcon.EmojiUpsideDownFaceIcon, EmojiWoozyFaceIcon.EmojiWoozyFaceIcon, EmojiZanyFaceIcon.EmojiZanyFaceIcon, EmojiRollingOnTheFloorLaughingIcon.EmojiRollingOnTheFloorLaughingIcon, EmojiSmilingFaceWithHeartsIcon.EmojiSmilingFaceWithHeartsIcon];
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  let closure_2;
  let onChange;
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = _slicedToArray(react.useState(() => {
    const obj = require("module_12");
    return obj.sampleSize(items, require("CustomTypingIndicatorTypes").CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
  }), 1)[0];
  const obj2 = { length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = Stack_Stack.Stack;
  return <Stack direction="horizontal" spacing={8}>{from(obj2, (arg0, index) => {
    let tmp3;
    const obj = { index, emoji: tmp3, placeholderIcon: closure_2[index], onChange: importDefault };
    tmp3 = require[index];
    const tmp = jsx;
    const tmp2 = CustomTypingIndicatorEmojiSlot;
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp(tmp2, obj, index);
  })}</Stack>;
};
