// Module ID: 9947
// Function ID: 76933
// Name: EmojiPickerRowButton
// Dependencies: [31, 27, 1852, 33, 4130, 689, 3976, 4660, 1212, 8007, 1324, 5151, 1392, 3774, 2]
// Exports: EmojiPickerRowButton, EmojiReactionRowButton, getEmojiKey

// Module 9947 (EmojiPickerRowButton)
import result from "result";
import { Platform } from "get ActivityIndicator";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((width) => {
  let obj = {};
  obj = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: importDefault(689).colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: importDefault(689).modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj.emojiContainer = obj;
  return obj;
});
let closure_7 = _createForOfIteratorHelperLoose.createStyles((width, fontSize, lineHeight) => {
  let tmp = width;
  if (arg3) {
    tmp = lineHeight;
  }
  obj = { emojiImage: obj };
  obj = { width, height: width };
  obj = { lineHeight, fontSize, color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: tmp, height: tmp };
  const merged = Object.assign(tmp2);
  obj.emojiText = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let onPress;
  let styles;
  iconSize = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const tmp = callback(iconSize.emojiContainerSize);
  const obj2 = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  const isThemeLightResult = require(3976) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme);
  obj = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lfIHs4);
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  obj = { color: require(3976) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300 };
  let str = "md";
  if (null != iconSize) {
    str = iconSize;
  }
  obj.size = str;
  obj.children = jsx(require(8007) /* ReactionIcon */.ReactionIcon, { color: require(3976) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300 });
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { color: require(3976) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300 });
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
  let obj = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  let name;
  if (null != animated) {
    name = animated.name;
  }
  obj.emojiName = name;
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["/iYSo6"], obj);
  obj.disabled = null == animated;
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  if (null == animated) {
    obj.children = null;
    return jsx(require(4660) /* PressableBase */.PressableOpacity, obj);
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
      let url = importDefault(1392).getEmojiURL(obj1);
      const obj4 = importDefault(1392);
    } else {
      url = animated.url;
    }
    obj.src = url;
    jsx(importDefault(5151), {});
    const tmp6 = jsx;
    const tmp9 = importDefault(5151);
  }
};
export const getEmojiKey = function getEmojiKey(type, arg1) {
  if (null == type) {
    return arg1;
  } else {
    type.type === require(3774) /* EmojiTypes */.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};
