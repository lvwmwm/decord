// Module ID: 11417
// Function ID: 88796
// Name: num2
// Dependencies: []

// Module 11417 (num2)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[3]).ACTION_SHEET_MAX_WIDTH;
({ EMOJI_URL_BASE_SIZE: closure_7, EmojiIntention: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { emoji: {}, customEmoji: {} };
obj = {};
let obj4 = arg1(dependencyMap[7]);
let num = 20;
if (obj4.isIOS()) {
  num = 24;
}
obj.fontSize = num;
let obj5 = arg1(dependencyMap[7]);
let num2;
if (obj5.isIOS()) {
  num2 = 28;
}
obj.lineHeight = num2;
obj.textAlign = "center";
obj.color = importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj;
obj1 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.emojiRow = obj1;
const obj2 = { "Null": "<string:196637881>", "Null": "<string:196608000>", sectionLabelStyle: "isArray", borderRadius: importDefault(dependencyMap[8]).radii.md };
obj.emojiPressable = obj2;
const tmp3 = arg1(dependencyMap[5]);
obj.selectedEmojiPressable = { borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj4 = { borderRadius: importDefault(dependencyMap[8]).radii.sm, padding: importDefault(dependencyMap[8]).space.PX_8, margin: 2 };
obj.emojiWrapper = obj4;
obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.selectedEmojiWrapper = obj5;
const obj3 = { borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.chooseEmojiButton = { color: importDefault(dependencyMap[8]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
const obj6 = { color: importDefault(dependencyMap[8]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj.customReactionOverlay = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[8]).radii.round, borderColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const obj8 = { hideWhenScrolling: null, autoCapitalize: null, color: importDefault(dependencyMap[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.selectedCustomReactionIcon = obj8;
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo((emoji) => {
  let selected;
  emoji = emoji.emoji;
  const arg1 = emoji;
  ({ onPress: closure_1, selected } = emoji);
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
    let url = importDefault(dependencyMap[12]).getEmojiURL(obj2);
    const obj5 = importDefault(dependencyMap[12]);
  } else {
    url = emoji.url;
  }
  obj1.src = url;
  obj.children = closure_9(importDefault(dependencyMap[11]), obj1);
  obj.children = closure_9(View, obj);
  return closure_9(arg1(dependencyMap[10]).PressableOpacity, obj);
});
const obj7 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[8]).radii.round, borderColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const memoResult = importAllResult.memo((selectedEmoji) => {
  selectedEmoji = selectedEmoji.selectedEmoji;
  const arg1 = selectedEmoji;
  const onPressEmoji = selectedEmoji.onPressEmoji;
  const importDefault = onPressEmoji;
  let selectedCustomReactionIcon = callback2();
  let obj = arg1(dependencyMap[13]);
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
  const rounded = Math.floor(Math.min(importDefault(dependencyMap[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_5];
  let stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    let obj = onPressEmoji(substr[15]);
    obj = { emoji, channel: undefined, intention: constants.DEFAULT_REACT_EMOJI };
    return !obj.isEmojiFilteredOrLocked(obj);
  });
  const substr = found.slice(0, rounded - 1);
  const dependencyMap = substr;
  const items1 = [substr, selectedEmoji];
  const memo = importAllResult.useMemo(() => substr.findIndex((emoji) => callback(closure_2[16]).areEmojisEqual(callback, emoji)), items1);
  const items2 = [onPressEmoji];
  let closure_4 = importAllResult.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  closure_5 = importAllResult.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  obj = { style: items4 };
  const items4 = [selectedEmoji.style, selectedCustomReactionIcon.emojiRow];
  const items5 = [
    substr.map((emoji) => {
      let tmp = null;
      if (null != emoji) {
        const obj = { emoji, selected: arg1 === memo, onPress: closure_4 };
        tmp = callback(closure_13, obj, arg1);
      }
      return tmp;
    }),

  ];
  obj = {
    accessibilityRole: "button",
    onPress() {
      let obj = selectedEmoji(substr[17]);
      obj = { onPressEmoji: closure_5, channel: undefined, pickerIntention: constants.DEFAULT_REACT_EMOJI, reactionType: selectedEmoji(substr[18]).ReactionTypes.NORMAL, startExpanded: true };
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
    let tmp18 = importDefault(dependencyMap[11]);
    let obj3 = {};
    ({ emoji: arr12.style, customEmoji: arr12.fastImageStyle, textEmoji: arr12.textEmojiStyle } = selectedCustomReactionIcon);
    let str = "";
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    obj3.name = str;
    if (null != selectedEmoji.id) {
      let obj7 = importDefault(dependencyMap[12]);
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
    obj5.children = callback(arg1(dependencyMap[19]).ReactionIcon, obj6);
    tmp18 = callback(closure_4, obj5);
    obj3[1] = tmp18;
    obj2.children = obj3;
    closure_11(closure_10, obj2);
    const tmp13 = closure_11;
    const tmp14 = closure_10;
    const tmp15Result = tmp15(tmp18, obj3);
  } else {
    obj7 = { color: selectedCustomReactionIcon.chooseEmojiButton.color };
    obj1.children = callback(arg1(dependencyMap[19]).ReactionIcon, obj7);
    obj.children = callback(closure_4, obj1);
    items5[1] = callback(arg1(dependencyMap[10]).PressableOpacity, obj);
    obj.children = items5;
    return closure_11(closure_4, obj);
  }
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default memoResult;
