// Module ID: 9352
// Function ID: 73000
// Name: getEmojiItemUrl
// Dependencies: []

// Module 9352 (getEmojiItemUrl)
function getEmojiItemUrl(emoji, animateEmoji) {
  let animated = animateEmoji;
  if (null == emoji.id) {
    const url = emoji.url;
    let str = "";
    if (null != url) {
      str = url;
    }
    let emojiURL = str;
  } else {
    let obj = importDefault(dependencyMap[10]);
    obj = { id: emoji.id };
    if (animated) {
      animated = emoji.animated;
    }
    obj.animated = animated;
    obj.size = IMAGE_SIZE;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
}
function EmojiItemLockedOverlay() {
  const tmp = callback2();
  let obj = { style: tmp.lockContainer, children: callback(arg1(dependencyMap[11]).LockIcon, obj) };
  obj = { style: tmp.lock };
  return callback(View, obj);
}
function EmojiItem(emoji) {
  let animateEmoji;
  let disabled;
  let isSectionNitroLocked;
  emoji = emoji.emoji;
  const arg1 = emoji;
  ({ category: closure_1, disabled, onPressEmoji: closure_2, onLongPressEmoji: closure_3 } = emoji);
  ({ animateEmoji, isSectionNitroLocked } = emoji);
  const tmp = callback2();
  if (disabled) {
    disabled = !isSectionNitroLocked;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel: emoji.name };
  const items = [tmp.surrogatesFrame, ];
  let disabledOverlay = disabled;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  obj.style = items;
  obj.onPress = function onPress() {
    return callback(emoji, closure_1);
  };
  obj.onLongPress = function onLongPress() {
    return callback2(emoji);
  };
  if (null != emoji.id) {
    obj = { resizeMode: "contain", style: tmp.image };
    const tmp10 = importDefault(dependencyMap[13]);
    const tmp7 = callback;
    if (obj4.isThemeDark(theme.theme)) {
      let tmp13Result = tmp13(tmp14[15]);
    } else {
      tmp13Result = tmp13(tmp14[16]);
    }
    obj.placeholder = tmp13Result;
    obj = { uri: tmp2 };
    obj.source = obj;
    obj.usesSmallCache = true;
    tmp7(tmp10, obj);
    const obj4 = arg1(dependencyMap[14]);
  } else {
    const obj1 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    const items1 = [callback(arg1(dependencyMap[17]).LegacyText, obj1), ];
    if (disabled) {
      disabled = callback(EmojiItemLockedOverlay, {});
    }
    items1[1] = disabled;
    obj.children = items1;
    return closure_8(arg1(dependencyMap[12]).PressableOpacity, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_4 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[3]);
const IMAGE_SIZE = tmp3.IMAGE_SIZE;
const PADDING_VERTICAL = arg1(dependencyMap[4]).PADDING_VERTICAL;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" } };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.sm, overflow: "hidden" };
obj.disabledOverlay = obj;
obj1 = {};
const tmp4 = arg1(dependencyMap[5]);
let num = 28;
if (obj6.isAndroid()) {
  num = 26;
}
obj1.fontSize = num;
obj1.color = importDefault(dependencyMap[7]).colors.TEXT_DEFAULT;
obj.surrogates = obj1;
const obj2 = { "Null": "Array", "Null": "isArray", "Null": "View", "Null": "accessible", height: tmp3.ROW_HEIGHT };
obj.row = obj2;
const obj3 = { <string:604382035>: false, <string:1694901510>: false, <string:1554667067>: false };
const obj6 = arg1(dependencyMap[8]);
const obj9 = importDefault(dependencyMap[9])("#000000");
obj3.backgroundColor = importDefault(dependencyMap[9])("#000000").alpha(0.2).hex();
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.lockContainer = obj3;
obj.lock = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001664523341435, "Null": -482681085486933000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 65207861284891930000000000000000000000000000000000000000000000000000000000000000000000000000 };
let closure_9 = obj1.createStyles(obj);
let closure_10 = importAllResult.memo((emojis) => {
  let animateEmoji;
  let containerWidth;
  let emojisDisabled;
  let isSectionNitroLocked;
  let row;
  let rowSize;
  emojis = emojis.emojis;
  const arg1 = emojis;
  ({ emojisDisabled, category: closure_1, rowSize, onPressEmoji: closure_2, onLongPressEmoji: closure_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp6 = emojis[sum];
      if (undefined === tmp6) {
        let arr = items.push({});
        let id = tmp3;
        let name = tmp4;
      } else {
        let obj = {};
        id = tmp6.id;
        let tmp7 = null;
        if (null != id) {
          tmp7 = id;
        }
        obj.id = tmp7;
        name = tmp6.name;
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        let tmp8 = closure_12;
        obj.url = closure_12(tmp6, animateEmoji);
        obj.animated = true === tmp6.animated && animateEmoji;
        let tmp9 = null != tmp6.id && emojisDisabled.has(tmp6.id);
        obj.disabled = tmp9;
        arr = items.push(obj);
      }
      sum = sum + 1;
      let tmp3 = id;
      let tmp4 = name;
    } while (sum < result + rowSize);
  }
  obj = {
    style: callback2().row,
    rowData: obj,
    onPressEmoji(arg0) {
      const emojis = arg0;
      const found = emojis.find((name) => name.name === name.nativeEvent.emojiName);
      if (null != found) {
        callback(found, closure_1);
      }
    },
    onLongPressEmoji(PremiumSearchUpsell, arg1) {
      const emojis = PremiumSearchUpsell;
      const found = emojis.find((name) => name.name === name.nativeEvent.emojiName);
      if (null != found) {
        callback2(found);
      }
    }
  };
  obj = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return callback(importDefault(dependencyMap[18]), obj);
});
let closure_11 = importAllResult.memo((arg0) => {
  let animateEmoji;
  let category;
  let emojis;
  let emojisDisabled;
  let isSectionNitroLocked;
  let onLongPressEmoji;
  let onPressEmoji;
  let row;
  let rowSize;
  ({ emojisDisabled, rowSize } = arg0);
  ({ emojis, category, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp = callback2();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let tmp9 = closure_7;
        let tmp10 = closure_3;
        let obj = { style: tmp.image };
        let arr = items.push(closure_7(closure_3, obj, sum));
      } else {
        obj = { emoji: tmp4, category, animateEmoji };
        let hasItem = null != tmp4.id;
        let tmp5 = closure_7;
        let tmp6 = closure_14;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj.disabled = hasItem;
        obj.onPressEmoji = onPressEmoji;
        obj.onLongPressEmoji = onLongPressEmoji;
        obj.isSectionNitroLocked = isSectionNitroLocked;
        arr = items.push(tmp5(tmp6, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  obj = { style: tmp.row, children: items };
  return callback(View, obj);
});
const alphaResult = importDefault(dependencyMap[9])("#000000").alpha(0.2);
const memoResult = importAllResult.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    let obj = arg1(dependencyMap[8]);
    nativeRow = obj.isAndroid();
  }
  obj = Object.create(null);
  obj.nativeRow = 0;
  const merged = Object.assign(nativeRow, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  return closure_7(nativeRow ? closure_10 : closure_11, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiPickerListRow = memoResult;
