// Module ID: 17282
// Function ID: 17283
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1387, 21, 17283, 17285, 17287, 17289, 17291, 17293, 17295, 17297, 17299, 17301, 17303, 17305, 17307, 17309, 17311, 17313, 17315, 17317, 17319, 17321, 17323, 17325, 5009, 13698, 7294, 1410, 5090, 5632, 5633, 9918, 1114, 3867, 1406, 6971, 12, 6022, 2]
// Exports: default

// Module 17282 (CustomTypingIndicatorEmojiSlots)
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import springPresets from "springPresets" /* 5633 */;
import EmojiDefault from "Emoji" /* 7294 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9918 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 13698 */;
import EmojiAngryFaceWithHornsIcon from "EmojiAngryFaceWithHornsIcon" /* 17283 */;
import EmojiColdFaceIcon from "EmojiColdFaceIcon" /* 17285 */;
import EmojiCowboyHatFaceIcon from "EmojiCowboyHatFaceIcon" /* 17287 */;
import EmojiCryingFaceIcon from "EmojiCryingFaceIcon" /* 17289 */;
import EmojiDisguisedFaceIcon from "EmojiDisguisedFaceIcon" /* 17291 */;
import EmojiFaceVomitingIcon from "EmojiFaceVomitingIcon" /* 17293 */;
import EmojiFaceWithMonocleIcon from "EmojiFaceWithMonocleIcon" /* 17295 */;
import EmojiFaceWithSpiralEyesIcon from "EmojiFaceWithSpiralEyesIcon" /* 17297 */;
import EmojiMeltingFaceIcon from "EmojiMeltingFaceIcon" /* 17299 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 17301 */;
import EmojiNerdFaceIcon from "EmojiNerdFaceIcon" /* 17303 */;
import EmojiPartyingFaceIcon from "EmojiPartyingFaceIcon" /* 17305 */;
import EmojiSalutingFaceIcon from "EmojiSalutingFaceIcon" /* 17307 */;
import EmojiSkullIcon from "EmojiSkullIcon" /* 17309 */;
import EmojiSmilingFaceWithHornsIcon from "EmojiSmilingFaceWithHornsIcon" /* 17311 */;
import EmojiSmilingFaceWithSunglassesIcon from "EmojiSmilingFaceWithSunglassesIcon" /* 17313 */;
import EmojiSquintingFaceWithTongueIcon from "EmojiSquintingFaceWithTongueIcon" /* 17315 */;
import EmojiUpsideDownFaceIcon from "EmojiUpsideDownFaceIcon" /* 17317 */;
import EmojiWoozyFaceIcon from "EmojiWoozyFaceIcon" /* 17319 */;
import EmojiZanyFaceIcon from "EmojiZanyFaceIcon" /* 17321 */;
import EmojiRollingOnTheFloorLaughingIcon from "EmojiRollingOnTheFloorLaughingIcon" /* 17323 */;
import EmojiSmilingFaceWithHeartsIcon from "EmojiSmilingFaceWithHeartsIcon" /* 17325 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap;

function EmojiGlyph(emoji) {
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
    const getEmojiURL = tmp(1410).getEmojiURL;
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
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const Icon = pressed.Icon;
  let obj = pressed(5090);
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
  let obj2 = { pressed, withSpring: pressed(5632).withSpring, interpolate: pressed(5090).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(5633).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
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
  let tmp = closure_9();
  let obj = index(sharedValue[30]);
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
    const intl2 = tmp2(tmp3[34]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    let obj2 = { slot: index + 1, total: tmp2(sharedValue[36]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    const prop = onChange(tmp3[35])["lEsZ+N"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = tmp2(tmp3[34]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { slot: index + 1, total: tmp2(sharedValue[36]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    const O0Pe85 = onChange(tmp3[35]).O0Pe85;
    formatToPlainString2Result = formatToPlainString(O0Pe85, obj3);
  }
  const Card = tmp2(tmp3[37]).Card;
  if (null != emoji) {
    const obj5 = { emoji };
    tmp12Result = tmp12(EmojiGlyph, obj5, emojisKey);
  } else {
    const obj6 = { Icon: placeholderIcon, pressed: sharedValue };
    tmp12Result = tmp12(PlaceholderEmojiGlyph, obj6);
  }
  return <Card style={tmp.slot} onPress={callback} onPressIn={callback1} onPressOut={callback2} accessibilityLabel={formatToPlainString2Result} radius={16}>{tmp12Result}</Card>;
}
let _slicedToArray = _slicedToArray_mod;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let c7 = 28;
let items = [EmojiAngryFaceWithHornsIcon.EmojiAngryFaceWithHornsIcon, EmojiColdFaceIcon.EmojiColdFaceIcon, EmojiCowboyHatFaceIcon.EmojiCowboyHatFaceIcon, EmojiCryingFaceIcon.EmojiCryingFaceIcon, EmojiDisguisedFaceIcon.EmojiDisguisedFaceIcon, EmojiFaceVomitingIcon.EmojiFaceVomitingIcon, EmojiFaceWithMonocleIcon.EmojiFaceWithMonocleIcon, EmojiFaceWithSpiralEyesIcon.EmojiFaceWithSpiralEyesIcon, EmojiMeltingFaceIcon.EmojiMeltingFaceIcon, EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon, EmojiNerdFaceIcon.EmojiNerdFaceIcon, EmojiPartyingFaceIcon.EmojiPartyingFaceIcon, EmojiSalutingFaceIcon.EmojiSalutingFaceIcon, EmojiSkullIcon.EmojiSkullIcon, EmojiSmilingFaceWithHornsIcon.EmojiSmilingFaceWithHornsIcon, EmojiSmilingFaceWithSunglassesIcon.EmojiSmilingFaceWithSunglassesIcon, EmojiSquintingFaceWithTongueIcon.EmojiSquintingFaceWithTongueIcon, EmojiUpsideDownFaceIcon.EmojiUpsideDownFaceIcon, EmojiWoozyFaceIcon.EmojiWoozyFaceIcon, EmojiZanyFaceIcon.EmojiZanyFaceIcon, EmojiRollingOnTheFloorLaughingIcon.EmojiRollingOnTheFloorLaughingIcon, EmojiSmilingFaceWithHeartsIcon.EmojiSmilingFaceWithHeartsIcon];
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(emojis) {
  let closure_2;
  let emojisKey;
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(react.useState(() => {
    const obj = emojis(closure_2[38]);
    return obj.sampleSize(items, emojis(closure_2[36]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
  }), 1)[0];
  let obj = emojis(1406);
  _slicedToArray = obj.getCustomTypingIndicatorEmojisKey(emojis);
  const obj3 = { length: emojis(1406).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = emojis(6022).Stack;
  return <Stack direction="horizontal" spacing={8}>{from(obj3, (arg0, index) => {
    let tmp3;
    const obj = { index, emoji: tmp3, emojisKey, placeholderIcon: closure_2[index], onChange };
    tmp3 = emojis[index];
    const tmp = jsx;
    const tmp2 = CustomTypingIndicatorEmojiSlot;
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp(tmp2, obj, index);
  })}</Stack>;
};
