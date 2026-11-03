// Module ID: 17498
// Function ID: 17499
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1388, 21, 17499, 17501, 17503, 17505, 17507, 17509, 17511, 17513, 17515, 17517, 17519, 17521, 17523, 17525, 17527, 17529, 17531, 17533, 17535, 17537, 17539, 17541, 5141, 13879, 7420, 1411, 1652, 5757, 5758, 10070, 1113, 3997, 1407, 7103, 12, 6147, 2]
// Exports: default

// Module 17498 (CustomTypingIndicatorEmojiSlots)
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5757 */;
import springPresets from "springPresets" /* 5758 */;
import EmojiDefault from "Emoji" /* 7420 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10070 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 13879 */;
import EmojiAngryFaceWithHornsIcon from "EmojiAngryFaceWithHornsIcon" /* 17499 */;
import EmojiColdFaceIcon from "EmojiColdFaceIcon" /* 17501 */;
import EmojiCowboyHatFaceIcon from "EmojiCowboyHatFaceIcon" /* 17503 */;
import EmojiCryingFaceIcon from "EmojiCryingFaceIcon" /* 17505 */;
import EmojiDisguisedFaceIcon from "EmojiDisguisedFaceIcon" /* 17507 */;
import EmojiFaceVomitingIcon from "EmojiFaceVomitingIcon" /* 17509 */;
import EmojiFaceWithMonocleIcon from "EmojiFaceWithMonocleIcon" /* 17511 */;
import EmojiFaceWithSpiralEyesIcon from "EmojiFaceWithSpiralEyesIcon" /* 17513 */;
import EmojiMeltingFaceIcon from "EmojiMeltingFaceIcon" /* 17515 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 17517 */;
import EmojiNerdFaceIcon from "EmojiNerdFaceIcon" /* 17519 */;
import EmojiPartyingFaceIcon from "EmojiPartyingFaceIcon" /* 17521 */;
import EmojiSalutingFaceIcon from "EmojiSalutingFaceIcon" /* 17523 */;
import EmojiSkullIcon from "EmojiSkullIcon" /* 17525 */;
import EmojiSmilingFaceWithHornsIcon from "EmojiSmilingFaceWithHornsIcon" /* 17527 */;
import EmojiSmilingFaceWithSunglassesIcon from "EmojiSmilingFaceWithSunglassesIcon" /* 17529 */;
import EmojiSquintingFaceWithTongueIcon from "EmojiSquintingFaceWithTongueIcon" /* 17531 */;
import EmojiUpsideDownFaceIcon from "EmojiUpsideDownFaceIcon" /* 17533 */;
import EmojiWoozyFaceIcon from "EmojiWoozyFaceIcon" /* 17535 */;
import EmojiZanyFaceIcon from "EmojiZanyFaceIcon" /* 17537 */;
import EmojiRollingOnTheFloorLaughingIcon from "EmojiRollingOnTheFloorLaughingIcon" /* 17539 */;
import EmojiSmilingFaceWithHeartsIcon from "EmojiSmilingFaceWithHeartsIcon" /* 17541 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let dependencyMap, obj1;

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
    const getEmojiURL = tmp(1411).getEmojiURL;
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
function PlaceholderEmojiGlyph(arg0) {
  let Icon;
  let pressed;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ Icon, pressed } = arg0);
  items = [closure_11, pressed, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = spring_spring.withSpring;
  items[3] = _mod1652.interpolate;
  items[4] = 0.4;
  items[5] = springPresets.ON_PRESS_SPRING;
  items[6] = 1.14;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class CustomTypingIndicatorEmojiSlotsTsx1 {
    constructor() {
      value = closure_0.get();
      obj = { opacity: null, transform: null };
      items = [, ];
      items[0] = closure_3;
      items[1] = 1;
      obj.opacity = closure_1(closure_2(value, [0, 1], items), closure_4);
      obj1 = { scale: null };
      items1 = [1];
      items1[1] = closure_5;
      obj1.scale = closure_1(closure_2(value, [0, 1], items1), closure_4);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  CustomTypingIndicatorEmojiSlotsTsx1.__closure = items1;
  CustomTypingIndicatorEmojiSlotsTsx1.__workletHash = 2021761413127;
  CustomTypingIndicatorEmojiSlotsTsx1.__initData = tmp3;
  const animatedStyle = useAnimatedStyle(CustomTypingIndicatorEmojiSlotsTsx1);
  let obj2 = { size: "custom", style: size };
  size = { width: v28, height: v28 };
  const View = _modDef1652.View;
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
let closure_11 = { code: "(function CustomTypingIndicatorEmojiSlotsTsx1(){let[pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE]=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};})" };
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
  let obj = emojis(1407);
  _slicedToArray = obj.getCustomTypingIndicatorEmojisKey(emojis);
  const obj3 = { length: emojis(1407).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = emojis(6147).Stack;
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
