// Module ID: 9939
// Function ID: 76893
// Name: EmojiPickerRowButton
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0]
// Exports: EmojiPickerRowButton, EmojiReactionRowButton, getEmojiKey

// Module 9939 (EmojiPickerRowButton)
import __exportStarResult1 from "__exportStarResult1";
import { Platform } from "__exportStarResult1";
import { EMOJI_URL_BASE_SIZE } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

let closure_6 = arg1(dependencyMap[4]).createStyles((width) => {
  let obj = {};
  obj = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: importDefault(dependencyMap[5]).modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj.emojiContainer = obj;
  return obj;
});
const obj = arg1(dependencyMap[4]);
let closure_7 = arg1(dependencyMap[4]).createStyles((width, fontSize, lineHeight) => {
  let tmp = width;
  if (arg3) {
    tmp = lineHeight;
  }
  let obj = { emojiImage: obj };
  obj = { width, height: width };
  obj = { lineHeight, fontSize, color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: tmp, height: tmp };
  const merged = Object.assign(tmp2);
  obj.emojiText = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[4]);
const result = require("__exportStarResult1").fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let onPress;
  let styles;
  iconSize = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = arg1(dependencyMap[6]);
  const tmp = callback(iconSize.emojiContainerSize);
  const obj2 = arg1(dependencyMap[6]);
  const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
  const isThemeLightResult = arg1(dependencyMap[6]).isThemeLight(obj.useThemeContext().theme);
  obj = { claimableRewards: "PRIMARY_460", isSelected: 1, variant: "emoji_id", border: "message" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.lfIHs4);
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  obj = { color: arg1(dependencyMap[6]).isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300 };
  let str = "md";
  if (null != iconSize) {
    str = iconSize;
  }
  obj.size = str;
  obj.children = jsx(arg1(dependencyMap[9]).ReactionIcon, obj);
  return jsx(arg1(dependencyMap[7]).PressableOpacity, obj);
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emojiContainerSize) {
  let animated;
  let emojiFontSize;
  let emojiLineHeight;
  let emojiSize;
  let onPress;
  let styles;
  ({ emoji: animated, emojiSize } = emojiContainerSize);
  ({ emojiFontSize, emojiLineHeight, onPress, styles } = emojiContainerSize);
  const tmp = callback(emojiContainerSize.emojiContainerSize);
  const memo = React.useMemo(() => ({ foreground: true }), []);
  let obj = { androidRippleConfig: memo };
  const intl = arg1(dependencyMap[8]).intl;
  obj = {};
  let name;
  if (null != animated) {
    name = animated.name;
  }
  obj.emojiName = name;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t./iYSo6, obj);
  obj.disabled = null == animated;
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  if (null == animated) {
    obj.children = null;
    return jsx(arg1(dependencyMap[7]).PressableOpacity, obj);
  } else {
    obj = {};
    ({ emojiText: obj3.textEmojiStyle, emojiImage: obj3.fastImageStyle } = tmp2);
    let str = "";
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj.name = str;
    if (null != animated.id) {
      const obj1 = {};
      ({ id: obj5.id, animated } = animated);
      obj1.animated = animated;
      obj1.size = EMOJI_URL_BASE_SIZE;
      let url = importDefault(dependencyMap[12]).getEmojiURL(obj1);
      const obj4 = importDefault(dependencyMap[12]);
    } else {
      url = animated.url;
    }
    obj.src = url;
    jsx(importDefault(dependencyMap[11]), obj);
    const tmp6 = jsx;
    const tmp9 = importDefault(dependencyMap[11]);
  }
};
export const getEmojiKey = function getEmojiKey(type, arg1) {
  if (null == type) {
    return arg1;
  } else {
    type.type === arg1(dependencyMap[13]).EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};
