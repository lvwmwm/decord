// Module ID: 11871
// Function ID: 11872
// Name: SelectDoubleTapEmojiRow
// Dependencies: [19, 17, 4825, 6572, 1375, 21, 4836, 1364, 576, 504, 5435, 6551, 1397, 9748, 1479, 4487, 7410, 10583, 7182, 8219, 2]

// Module 11871 (SelectDoubleTapEmojiRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiDefault from "Emoji" /* 6551 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 10583 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let emoji, selectedEmoji;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ EMOJI_URL_BASE_SIZE: metroImportDefault, EmojiIntention: metroImportAll } = EmojiConstants);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { emoji: { width: 24, height: 24 }, customEmoji: { width: 24, height: 24 }, textEmoji: obj2, emojiRow: obj3, emojiPressable: obj4, selectedEmojiPressable: obj5, emojiWrapper: obj6, selectedEmojiWrapper: obj7, chooseEmojiButton: obj8, customReactionOverlay: size, selectedCustomReactionIcon: size1 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 20;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj2 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 28;
}
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 24, width: 24, position: "absolute", right: -8, bottom: -8, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderWidth: 2, boxSizing: "content-box" };
size1 = { height: 12, width: 12, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_12 = createStyles(obj);
let closure_13 = react.memo((emoji) => {
  let animated;
  let items1;
  let obj3;
  let obj4;
  let selected;
  let str;
  let tmp6;
  let tmp9;
  let url;
  let useReducedMotion;
  emoji = emoji.emoji;
  ({ onPress: importDefault, selected } = emoji);
  const tmp = closure_12();
  const items = [AccessibilityStore];
  const obj = emoji(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = {
    accessibilityRole: "button",
    disabled: null == emoji,
    onPress() {
      return importDefault(emoji);
    },
    style: items1,
    children: closure_9(tmp6, obj3)
  };
  items1 = [tmp.emojiPressable, ];
  let prop;
  const PressableOpacity = emoji(5435).PressableOpacity;
  if (selected) {
    prop = tmp.selectedEmojiPressable;
  }
  items1[1] = prop;
  const items2 = [tmp.emojiWrapper, ];
  let selectedEmojiWrapper;
  tmp6 = View;
  if (selected) {
    selectedEmojiWrapper = tmp.selectedEmojiWrapper;
  }
  items2[1] = selectedEmojiWrapper;
  obj3 = { style: items2, children: closure_9(tmp9, obj4) };
  obj4 = { style: tmp.emoji, fastImageStyle: tmp.customEmoji, textEmojiStyle: tmp.textEmoji, name: str, src: url };
  str = "";
  tmp9 = EmojiDefault;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated, size };
    animated = !stateFromStores;
    const getEmojiURL = tmp8(1397).getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    url = getEmojiURL(obj5);
  } else {
    url = emoji.url;
  }
  return closure_9(PressableOpacity, obj2);
});
const memoResult = react.memo((selectedEmoji) => {
  let animated;
  let items4;
  let items5;
  let items6;
  let items8;
  let obj11;
  let obj5;
  let str;
  let tmp10Result;
  let url;
  selectedEmoji = selectedEmoji.selectedEmoji;
  let substr;
  let memo;
  let onPressEmoji;
  const style = selectedEmoji.style;
  let tmp = closure_12();
  let obj = selectedEmoji(substr[13]);
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
  const rounded = Math.floor(Math.min(onPressEmoji(substr[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  let obj2 = selectedEmoji(substr[9]);
  const items = [onPressEmoji];
  const stateFromStores = obj2.useStateFromStores(items, () => onPressEmoji.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    const obj2 = { emoji, channel: "Array", intention: constants.DEFAULT_REACT_EMOJI };
    const obj = onPressEmoji(substr[15]);
    return !obj.isEmojiFilteredOrLocked(obj2);
  });
  substr = found.slice(0, rounded - 1);
  const items1 = [substr, selectedEmoji];
  memo = memo.useMemo(() => substr.findIndex((item) => {
    const obj = selectedEmoji(substr[16]);
    return obj.areEmojisEqual(closure_1_0, item);
  }), items1);
  const items2 = [onPressEmoji];
  const onPress = memo.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  onPressEmoji = memo.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  const obj3 = { style: items4, children: items5 };
  items4 = [style, tmp.emojiRow];
  items5 = [
    substr.map((emoji, index) => {
      let tmp = null;
      if (null != emoji) {
        const obj = { emoji, selected: index === memo, onPress };
        tmp = React4(closure_13, obj, index);
      }
      return tmp;
    }),

  ];
  const obj4 = {
    accessibilityRole: "button",
    onPress() {
      const obj = { onPressEmoji, channel: "r", pickerIntention: metroImportAll.DEFAULT_REACT_EMOJI, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL, startExpanded: null };
      const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
      openEmojiPickerActionSheet2;
      const result = openEmojiPickerActionSheet(obj, "stack");
    },
    style: items6,
    children: closure_9(onPress, obj5)
  };
  items6 = [tmp.emojiPressable, ];
  let selectedEmojiPressable = tmp11;
  const PressableOpacity = selectedEmoji(substr[10]).PressableOpacity;
  if (-1 === memo) {
    selectedEmojiPressable = tmp.selectedEmojiPressable;
  }
  items6[1] = selectedEmojiPressable;
  const items7 = [tmp.emojiWrapper, ];
  obj5 = { style: items7, children: tmp10Result };
  const tmp12 = -1 === memo && tmp.selectedEmojiWrapper;
  items7[1] = tmp12;
  if (-1 === memo) {
    const obj6 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: url };
    ({ emoji: obj7.style, customEmoji: obj7.fastImageStyle, textEmoji: obj7.textEmojiStyle } = tmp);
    str = "";
    const tmp14 = closure_10;
    const tmp4Result = onPressEmoji(substr[11]);
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    if (null != selectedEmoji.id) {
      const obj8 = { id: selectedEmoji.id, animated, size };
      animated = !stateFromStores;
      const getEmojiURL = tmp4(tmp3[12]).getEmojiURL;
      onPressEmoji(substr[12]);
      if (!stateFromStores) {
        animated = selectedEmoji.animated;
      }
      url = getEmojiURL(obj8);
    } else {
      url = selectedEmoji.url;
    }
    const obj9 = { children: items8 };
    items8 = [closure_9(tmp4Result, obj6), ];
    const obj10 = { style: tmp.customReactionOverlay, children: closure_9(selectedEmoji(substr[19]).ReactionIcon, obj11) };
    obj11 = { color: tmp.selectedCustomReactionIcon.color, style: tmp.selectedCustomReactionIcon };
    items8[1] = closure_9(onPress, obj10);
    tmp10Result = tmp8(tmp14, obj9);
  } else {
    const obj20 = { color: tmp.chooseEmojiButton.color };
    tmp10Result = tmp10(tmp2(tmp3[19]).ReactionIcon, obj20);
  }
  items5[1] = closure_9(PressableOpacity, obj4);
  return closure_11(onPress, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default memoResult;
