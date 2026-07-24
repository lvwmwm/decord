// Module ID: 11455
// Function ID: 89085
// Name: num2
// Dependencies: [31, 27, 4122, 5188, 1852, 33, 4130, 477, 689, 566, 4660, 5151, 1392, 9366, 1450, 3775, 7745, 9362, 7005, 7437, 2]

// Module 11455 (num2)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import set from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ EMOJI_URL_BASE_SIZE: closure_7, EmojiIntention: closure_8 } = set);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { emoji: { width: 24, height: 24 }, customEmoji: { width: 24, height: 24 } };
obj = {};
let num = 20;
if (set.isIOS()) {
  num = 24;
}
obj.fontSize = num;
let num2;
if (set.isIOS()) {
  num2 = 28;
}
obj.lineHeight = num2;
obj.textAlign = "center";
obj.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.emojiRow = _createForOfIteratorHelperLoose;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderColor: "transparent" };
obj.emojiPressable = obj2;
obj.selectedEmojiPressable = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
set = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_8, margin: 2 };
obj.emojiWrapper = set;
set = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
obj.selectedEmojiWrapper = set;
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.chooseEmojiButton = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, height: 24, width: 24, position: "absolute", right: -8, bottom: -8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, borderWidth: 2, boxSizing: "content-box" };
obj.customReactionOverlay = obj7;
const obj8 = { height: 12, width: 12, color: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.selectedCustomReactionIcon = obj8;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.memo((emoji) => {
  let importDefault;
  let selected;
  emoji = emoji.emoji;
  ({ onPress: importDefault, selected } = emoji);
  const tmp = callback2();
  let obj = emoji(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  obj = {
    accessibilityRole: "button",
    disabled: null == emoji,
    onPress() {
      return callback(emoji);
    }
  };
  const items1 = [tmp.emojiPressable, ];
  let prop;
  if (selected) {
    prop = tmp.selectedEmojiPressable;
  }
  items1[1] = prop;
  obj.style = items1;
  obj = {};
  const items2 = [tmp.emojiWrapper, ];
  let selectedEmojiWrapper;
  if (selected) {
    selectedEmojiWrapper = tmp.selectedEmojiWrapper;
  }
  items2[1] = selectedEmojiWrapper;
  obj.style = items2;
  const obj1 = { style: tmp.emoji, fastImageStyle: tmp.customEmoji, textEmojiStyle: tmp.textEmoji };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  if (null != emoji.id) {
    const obj2 = { id: emoji.id };
    let animated = !stateFromStores;
    if (animated) {
      animated = emoji.animated;
    }
    obj2.animated = animated;
    obj2.size = closure_7;
    let url = importDefault(1392).getEmojiURL(obj2);
    const obj5 = importDefault(1392);
  } else {
    url = emoji.url;
  }
  obj1.src = url;
  obj.children = closure_9(importDefault(5151), obj1);
  obj.children = closure_9(View, obj);
  return closure_9(emoji(4660).PressableOpacity, obj);
});
let obj6 = { color: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default importAllResult.memo((selectedEmoji) => {
  selectedEmoji = selectedEmoji.selectedEmoji;
  const onPressEmoji = selectedEmoji.onPressEmoji;
  let selectedCustomReactionIcon = callback2();
  let obj = selectedEmoji(substr[13]);
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
  const rounded = Math.floor(Math.min(onPressEmoji(substr[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  let obj1 = selectedEmoji(substr[9]);
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    let obj = onPressEmoji(substr[15]);
    obj = { emoji, channel: undefined, intention: outer1_8.DEFAULT_REACT_EMOJI };
    return !obj.isEmojiFilteredOrLocked(obj);
  });
  substr = found.slice(0, rounded - 1);
  const items1 = [substr, selectedEmoji];
  memo = memo.useMemo(() => substr.findIndex((emoji) => selectedEmoji(substr[16]).areEmojisEqual(outer1_0, emoji)), items1);
  const items2 = [onPressEmoji];
  let closure_4 = memo.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  _isNativeReflectConstruct = memo.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  obj = { style: items4 };
  items4 = [selectedEmoji.style, selectedCustomReactionIcon.emojiRow];
  const items5 = [
    substr.map((emoji) => {
      let tmp = null;
      if (null != emoji) {
        const obj = { emoji, selected: arg1 === memo, onPress: closure_4 };
        tmp = outer1_9(outer1_13, obj, arg1);
      }
      return tmp;
    }),

  ];
  obj = {
    accessibilityRole: "button",
    onPress() {
      let obj = selectedEmoji(substr[17]);
      obj = { onPressEmoji: _isNativeReflectConstruct, channel: undefined, pickerIntention: outer1_8.DEFAULT_REACT_EMOJI, reactionType: selectedEmoji(substr[18]).ReactionTypes.NORMAL, startExpanded: true };
      const result = obj.openEmojiPickerActionSheet(obj, "stack");
    }
  };
  const items6 = [selectedCustomReactionIcon.emojiPressable, ];
  let selectedEmojiPressable = tmp7;
  if (-1 === memo) {
    selectedEmojiPressable = selectedCustomReactionIcon.selectedEmojiPressable;
  }
  items6[1] = selectedEmojiPressable;
  obj.style = items6;
  obj1 = {};
  const items7 = [selectedCustomReactionIcon.emojiWrapper, ];
  let selectedEmojiWrapper = tmp7;
  if (-1 === memo) {
    selectedEmojiWrapper = selectedCustomReactionIcon.selectedEmojiWrapper;
  }
  items7[1] = selectedEmojiWrapper;
  obj1.style = items7;
  if (-1 === memo) {
    const obj2 = {};
    let tmp15 = callback;
    let tmp18 = onPressEmoji(substr[11]);
    let obj3 = {};
    ({ emoji: arr12.style, customEmoji: arr12.fastImageStyle, textEmoji: arr12.textEmojiStyle } = selectedCustomReactionIcon);
    let str = "";
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    obj3.name = str;
    if (null != selectedEmoji.id) {
      let obj7 = onPressEmoji(substr[12]);
      const obj4 = { id: selectedEmoji.id };
      let animated = !stateFromStores;
      if (animated) {
        animated = selectedEmoji.animated;
      }
      obj4.animated = animated;
      stateFromStores = closure_7;
      obj4.size = closure_7;
      let url = obj7.getEmojiURL(obj4);
    } else {
      url = selectedEmoji.url;
    }
    obj3.src = url;
    obj3 = [, ];
    obj3[0] = tmp15(tmp18, obj3);
    tmp15 = closure_4;
    const obj5 = { style: selectedCustomReactionIcon.customReactionOverlay };
    const obj6 = { color: selectedCustomReactionIcon.selectedCustomReactionIcon.color };
    selectedCustomReactionIcon = selectedCustomReactionIcon.selectedCustomReactionIcon;
    obj6.style = selectedCustomReactionIcon;
    obj5.children = callback(selectedEmoji(substr[19]).ReactionIcon, obj6);
    tmp18 = callback(closure_4, obj5);
    obj3[1] = tmp18;
    obj2.children = obj3;
    closure_11(closure_10, obj2);
    const tmp13 = closure_11;
    const tmp14 = closure_10;
    const tmp15Result = tmp15(tmp18, obj3);
  } else {
    obj7 = { color: selectedCustomReactionIcon.chooseEmojiButton.color };
    obj1.children = callback(selectedEmoji(substr[19]).ReactionIcon, obj7);
    obj.children = callback(closure_4, obj1);
    items5[1] = callback(selectedEmoji(substr[10]).PressableOpacity, obj);
    obj.children = items5;
    return closure_11(closure_4, obj);
  }
});
