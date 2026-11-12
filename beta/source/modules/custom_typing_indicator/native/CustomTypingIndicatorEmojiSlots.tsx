// Module ID: 17711
// Function ID: 17712
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1388, 21, 17712, 17714, 17716, 17718, 17720, 17722, 17724, 17726, 17728, 17730, 17732, 17734, 17736, 17738, 17740, 17742, 17744, 17746, 17748, 17750, 17752, 17754, 5170, 14013, 7396, 1411, 1652, 5793, 5794, 575, 10094, 1113, 4028, 1407, 7073, 12, 6191, 2]
// Exports: default

// Module 17711 (CustomTypingIndicatorEmojiSlots)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5793 */;
import springPresets from "springPresets" /* 5794 */;
import EmojiDefault from "Emoji" /* 7396 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10094 */;
import useCanPlayAnimatedEmojiDefault from "useCanPlayAnimatedEmoji" /* 14013 */;
import EmojiAngryFaceWithHornsIcon from "EmojiAngryFaceWithHornsIcon" /* 17712 */;
import EmojiColdFaceIcon from "EmojiColdFaceIcon" /* 17714 */;
import EmojiCowboyHatFaceIcon from "EmojiCowboyHatFaceIcon" /* 17716 */;
import EmojiCryingFaceIcon from "EmojiCryingFaceIcon" /* 17718 */;
import EmojiDisguisedFaceIcon from "EmojiDisguisedFaceIcon" /* 17720 */;
import EmojiFaceVomitingIcon from "EmojiFaceVomitingIcon" /* 17722 */;
import EmojiFaceWithMonocleIcon from "EmojiFaceWithMonocleIcon" /* 17724 */;
import EmojiFaceWithSpiralEyesIcon from "EmojiFaceWithSpiralEyesIcon" /* 17726 */;
import EmojiMeltingFaceIcon from "EmojiMeltingFaceIcon" /* 17728 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 17730 */;
import EmojiNerdFaceIcon from "EmojiNerdFaceIcon" /* 17732 */;
import EmojiPartyingFaceIcon from "EmojiPartyingFaceIcon" /* 17734 */;
import EmojiSalutingFaceIcon from "EmojiSalutingFaceIcon" /* 17736 */;
import EmojiSkullIcon from "EmojiSkullIcon" /* 17738 */;
import EmojiSmilingFaceWithHornsIcon from "EmojiSmilingFaceWithHornsIcon" /* 17740 */;
import EmojiSmilingFaceWithSunglassesIcon from "EmojiSmilingFaceWithSunglassesIcon" /* 17742 */;
import EmojiSquintingFaceWithTongueIcon from "EmojiSquintingFaceWithTongueIcon" /* 17744 */;
import EmojiUpsideDownFaceIcon from "EmojiUpsideDownFaceIcon" /* 17746 */;
import EmojiWoozyFaceIcon from "EmojiWoozyFaceIcon" /* 17748 */;
import EmojiZanyFaceIcon from "EmojiZanyFaceIcon" /* 17750 */;
import EmojiRollingOnTheFloorLaughingIcon from "EmojiRollingOnTheFloorLaughingIcon" /* 17752 */;
import EmojiSmilingFaceWithHeartsIcon from "EmojiSmilingFaceWithHeartsIcon" /* 17754 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
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
  ({ Icon, pressed } = arg0);
  items = [closure_11, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = _mod1652.interpolate;
  items[3] = pressed;
  items[4] = 1.14;
  items[5] = springPresets.ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class CustomTypingIndicatorEmojiSlotsTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: null };
      items = [1];
      items[1] = closure_3;
      obj1.scale = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_4);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
  CustomTypingIndicatorEmojiSlotsTsx1.__closure = items1;
  CustomTypingIndicatorEmojiSlotsTsx1.__workletHash = 15621299402355;
  CustomTypingIndicatorEmojiSlotsTsx1.__initData = tmp3;
  const animatedStyle = useAnimatedStyle(CustomTypingIndicatorEmojiSlotsTsx1);
  let obj2 = { size: "custom", color: nativeDefault.colors.ICON_MUTED, style: size };
  const View = _modDef1652.View;
  size = { width: v28, height: v28 };
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
    const intl2 = tmp2(tmp3[35]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    let obj2 = { slot: index + 1, total: tmp2(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    const prop = onChange(tmp3[36])["lEsZ+N"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = tmp2(tmp3[35]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { slot: index + 1, total: tmp2(sharedValue[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    const O0Pe85 = onChange(tmp3[36]).O0Pe85;
    formatToPlainString2Result = formatToPlainString(O0Pe85, obj3);
  }
  const Card = tmp2(tmp3[38]).Card;
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
let closure_11 = { code: "(function CustomTypingIndicatorEmojiSlotsTsx1(){let[withSpring,interpolate,pressed,PLACEHOLDER_EMOJI_ACTIVE_SCALE,ON_PRESS_SPRING]=this.__closure;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(emojis) {
  let closure_2;
  let emojisKey;
  emojis = emojis.emojis;
  const onChange = emojis.onChange;
  _slicedToArray = undefined;
  dependencyMap = _slicedToArray(react.useState(() => {
    const obj = emojis(closure_2[39]);
    return obj.sampleSize(items, emojis(closure_2[37]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
  }), 1)[0];
  let obj = emojis(1407);
  _slicedToArray = obj.getCustomTypingIndicatorEmojisKey(emojis);
  const obj3 = { length: emojis(1407).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  const Stack = emojis(6191).Stack;
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
