// Module ID: 15636
// Function ID: 15637
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1375, 21, 15637, 15639, 15641, 15643, 15645, 15647, 15649, 15651, 15653, 15655, 15657, 15659, 15661, 15663, 15665, 15667, 15669, 15671, 15673, 15675, 15677, 15679, 4788, 7407, 1397, 4524, 5217, 5221, 11417, 1115, 3712, 1393, 5856, 12, 5216, 2]
// Exports: default

// Module 15636 (CustomTypingIndicatorEmojiSlots)
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1393 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4524 */;
import Stack_Stack from "Stack/Stack" /* 5216 */;
import spring from "spring" /* 5217 */;
import springPresets from "springPresets" /* 5221 */;
import EmojiDefault from "Emoji" /* 7407 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11417 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  const obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  if (null != emoji.id) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj3.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj2.animated = animated;
    obj2.size = v28;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp2Result = AvatarUtilsDefault;
  }
  obj.src = emojiURL;
  const size = { width: v28, height: v28 };
  obj.fastImageStyle = size;
  obj.textEmojiStyle = { fontSize: v28, lineHeight: 32 };
  return jsx(EmojiDefault, { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null });
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const fn = function t() {
    value = pressed.get();
    const obj = { opacity: null, transform: null };
    const obj2 = spring;
    obj.opacity = obj2.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]), springPresets.ON_PRESS_SPRING);
    const obj4 = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = spring;
    obj4.scale = obj5.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [1, 1.14]), springPresets.ON_PRESS_SPRING);
    items = [obj4];
    obj.transform = items;
    return obj;
  };
  let obj = pressed(4524);
  fn.__closure = { pressed, withSpring: pressed(5217).withSpring, interpolate: pressed(4524).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(5221).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: animatedStyle, children: null };
  let obj4 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj4.style = size;
  obj3.children = jsx(pressed.Icon, { size: "custom", style: null });
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  const tmp = closure_9();
  sharedValue = index(sharedValue[29]).useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      onPressEmoji(id) {
        id = id.id;
        const obj = { id, name: null, animated: null };
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              let str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return onChange(index, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    });
  }, items);
  const items2 = [sharedValue];
  const callback1 = noop.useCallback(() => sharedValue.set(1), items1);
  const callback2 = noop.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[33]).intl;
    const obj2 = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[34])["lEsZ+N"], obj2);
  } else {
    const intl = tmp2(tmp3[33]).intl;
    const obj3 = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[34]).O0Pe85, obj3);
  }
  const obj4 = { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj5 = { emoji };
    let tmp11Result = tmp11(EmojiGlyph, obj5);
  } else {
    const obj6 = { Icon: index.placeholderIcon, pressed: sharedValue };
    tmp11Result = tmp11(PlaceholderEmojiGlyph, obj6);
  }
  obj4.children = tmp11Result;
  return jsx(index(sharedValue[36]).Card, { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
const EmojiIntention = fn(1375).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [fn(15637).EmojiAngryFaceWithHornsIcon, fn(15639).EmojiColdFaceIcon, fn(15641).EmojiCowboyHatFaceIcon, fn(15643).EmojiCryingFaceIcon, fn(15645).EmojiDisguisedFaceIcon, fn(15647).EmojiFaceVomitingIcon, fn(15649).EmojiFaceWithMonocleIcon, fn(15651).EmojiFaceWithSpiralEyesIcon, fn(15653).EmojiMeltingFaceIcon, fn(15655).EmojiMoneyMouthFaceIcon, fn(15657).EmojiNerdFaceIcon, fn(15659).EmojiPartyingFaceIcon, fn(15661).EmojiSalutingFaceIcon, fn(15663).EmojiSkullIcon, fn(15665).EmojiSmilingFaceWithHornsIcon, fn(15667).EmojiSmilingFaceWithSunglassesIcon, fn(15669).EmojiSquintingFaceWithTongueIcon, fn(15671).EmojiUpsideDownFaceIcon, fn(15673).EmojiWoozyFaceIcon, fn(15675).EmojiZanyFaceIcon, fn(15677).EmojiRollingOnTheFloorLaughingIcon, fn(15679).EmojiSmilingFaceWithHeartsIcon];
const createStyles = fn(4788);
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = _slicedToArray(noop.useState(() => dependencyMap(12).sampleSize(items, dependencyMap(1393).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)), 1)[0];
  let obj = {
    direction: "horizontal",
    spacing: 8,
    children: Array.from({ length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
      const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
      let tmp3 = dependencyMap[index];
      if (tmp3 == null) {
        tmp3 = null;
      }
      obj.emoji = tmp3;
      obj.placeholderIcon = dependencyMap2[index];
      obj.onChange = onChange;
      return <CustomTypingIndicatorEmojiSlot key={arg1} index={arg1} emoji={null} placeholderIcon={null} onChange={null} />;
    })
  };
  return jsx(Stack_Stack.Stack, {
    direction: "horizontal",
    spacing: 8,
    children: Array.from({ length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
      const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
      let tmp3 = dependencyMap[index];
      if (tmp3 == null) {
        tmp3 = null;
      }
      obj.emoji = tmp3;
      obj.placeholderIcon = dependencyMap2[index];
      obj.onChange = onChange;
      return <CustomTypingIndicatorEmojiSlot key={arg1} index={arg1} emoji={null} placeholderIcon={null} onChange={null} />;
    })
  });
};
