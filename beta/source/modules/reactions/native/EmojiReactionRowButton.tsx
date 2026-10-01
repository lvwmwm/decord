// Module ID: 11232
// Function ID: 11233
// Name: EmojiReactionRowButton
// Dependencies: [19, 17, 1375, 21, 4836, 576, 4685, 5435, 1115, 8219, 6551, 1397, 4486, 2]
// Exports: EmojiPickerRowButton, EmojiReactionRowButton, getEmojiKey

// Module 11232 (EmojiReactionRowButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import EmojiTypes from "EmojiTypes" /* 4486 */;
import shared from "shared" /* 4685 */;
import Pressables from "Pressables" /* 5435 */;
import EmojiDefault from "Emoji" /* 6551 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const Platform = react_native.Platform;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: size };
  size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
  return obj;
});
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((width, fontSize, lineHeight) => {
  const obj = { emojiImage: { width, height: width }, emojiText: size };
  size = { lineHeight, fontSize, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: lineHeight, height: lineHeight };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let onPress;
  let styles;
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  const tmp = closure_6(iconSize.emojiContainerSize);
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = shared;
  const isThemeLightResult = obj2.isThemeLight(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp5 = isThemeLightResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
  const PressableOpacity = tmp2(5435).PressableOpacity;
  const intl = tmp2(1115).intl;
  const items = [tmp.emojiContainer, styles];
  const ReactionIcon = tmp2(8219).ReactionIcon;
  if (str == null) {
    str = "md";
  }
  return <PressableOpacity activeOpacity={0.5} accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.lfIHs4)} hitSlop={4} onPress={onPress} style={items}>{null}</PressableOpacity>;
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emoji) {
  let emojiFontSize;
  let emojiLineHeight;
  let emojiSize;
  let onPress;
  let str;
  let styles;
  let url;
  emoji = emoji.emoji;
  ({ emojiSize, emojiFontSize, emojiLineHeight, onPress, styles } = emoji);
  const tmp = closure_6(emoji.emojiContainerSize);
  const tmp2 = closure_7(emojiSize, emojiFontSize, emojiLineHeight);
  const memo = react.useMemo(() => ({ foreground: true }), []);
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  let name;
  const prop = intl2.t["/iYSo6"];
  if (emoji != null) {
    name = emoji.name;
  }
  const items = [tmp.emojiContainer, styles];
  let tmp4Result = null;
  if (null != emoji) {
    const obj3 = { textEmojiStyle: null, fastImageStyle: null, name: str, src: url };
    ({ emojiText: obj2.textEmojiStyle, emojiImage: obj2.fastImageStyle } = tmp2);
    str = "";
    const tmp10 = EmojiDefault;
    const tmp9 = importDefault;
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    if (null != emoji.id) {
      const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj4.id, animated: obj4.animated } = emoji);
      const tmp9Result = tmp9(1397);
      url = tmp9Result.getEmojiURL(obj6);
    } else {
      url = emoji.url;
    }
    tmp4Result = tmp4(tmp10, obj3);
  }
  return <PressableOpacity androidRippleConfig={memo} activeOpacity={0.5} accessibilityRole="button" accessibilityLabel={formatToPlainString(prop, { emojiName: name })} disabled={null == emoji} hitSlop={4} onPress={onPress} style={items}>{tmp4Result}</PressableOpacity>;
};
export const getEmojiKey = function getEmojiKey(type, index) {
  let tmp = index;
  if (null != type) {
    tmp = type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
  return tmp;
};
