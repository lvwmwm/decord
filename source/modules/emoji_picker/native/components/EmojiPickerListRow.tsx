// Module ID: 9400
// Function ID: 73288
// Name: getEmojiItemUrl
// Dependencies: [31, 27, 1278, 9365, 1314, 33, 4130, 689, 477, 666, 1392, 4652, 4660, 5085, 3976, 5152, 5153, 1273, 9401, 2]

// Module 9400 (getEmojiItemUrl)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import IMAGE_SIZE from "IMAGE_SIZE";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_7;
let closure_8;
const require = arg1;
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
    let obj = importDefault(1392);
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
  obj = { style: tmp.lockContainer, children: callback(require(4652) /* LockIcon */.LockIcon, obj) };
  obj = { style: tmp.lock };
  return callback(View, obj);
}
function EmojiItem(emoji) {
  let View;
  let animateEmoji;
  let dependencyMap;
  let disabled;
  let importDefault;
  let isSectionNitroLocked;
  emoji = emoji.emoji;
  ({ category: importDefault, disabled, onPressEmoji: dependencyMap, onLongPressEmoji: View } = emoji);
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
    const tmp10 = importDefault(5085);
    const tmp7 = callback;
    if (obj4.isThemeDark(theme.theme)) {
      let tmp13Result = tmp13(5152);
    } else {
      tmp13Result = tmp13(5153);
    }
    obj.placeholder = tmp13Result;
    obj = { uri: tmp2 };
    obj.source = obj;
    obj.usesSmallCache = true;
    tmp7(tmp10, obj);
    obj4 = emoji(3976);
  } else {
    const obj1 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    const items1 = [callback(emoji(1273).LegacyText, obj1), ];
    if (disabled) {
      disabled = callback(EmojiItemLockedOverlay, {});
    }
    items1[1] = disabled;
    obj.children = items1;
    return closure_8(emoji(4660).PressableOpacity, obj);
  }
}
const View = get_ActivityIndicator.View;
IMAGE_SIZE = IMAGE_SIZE.IMAGE_SIZE;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.disabledOverlay = obj;
_createForOfIteratorHelperLoose = {};
let num = 28;
if (set.isAndroid()) {
  num = 26;
}
_createForOfIteratorHelperLoose.fontSize = num;
_createForOfIteratorHelperLoose.color = require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT;
obj.surrogates = _createForOfIteratorHelperLoose;
const obj2 = { height: IMAGE_SIZE.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.row = obj2;
const obj3 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
const obj9 = require("t")("#000000");
obj3.backgroundColor = require("t")("#000000").alpha(0.2).hex();
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.lockContainer = obj3;
obj.lock = { width: 16, height: 16, tintColor: "white" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = importAllResult.memo((emojis) => {
  let View;
  let animateEmoji;
  let containerWidth;
  let dependencyMap;
  let emojisDisabled;
  let importDefault;
  let isSectionNitroLocked;
  let row;
  let rowSize;
  emojis = emojis.emojis;
  ({ emojisDisabled, category: importDefault, rowSize, onPressEmoji: dependencyMap, onLongPressEmoji: View, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp6 = emojis[sum];
      if (undefined === tmp6) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
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
        let tmp8 = getEmojiItemUrl;
        obj.url = getEmojiItemUrl(tmp6, animateEmoji);
        obj.animated = true === tmp6.animated && animateEmoji;
        let tmp9 = null != tmp6.id && emojisDisabled.has(tmp6.id);
        obj.disabled = tmp9;
        arr = items.push(obj);
      }
      sum = sum + 1;
      tmp3 = id;
      tmp4 = name;
    } while (sum < result + rowSize);
  }
  obj = {
    style: callback2().row,
    rowData: obj,
    onPressEmoji(arg0) {
      const emojis = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        callback(found, closure_1);
      }
    },
    onLongPressEmoji(PremiumSearchUpsell, arg1) {
      const emojis = PremiumSearchUpsell;
      const found = emojis.find((name) => name.name === PremiumSearchUpsell.nativeEvent.emojiName);
      if (null != found) {
        callback2(found);
      }
    }
  };
  obj = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return callback(importDefault(9401), obj);
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
        let tmp9 = callback;
        let tmp10 = View;
        let obj = { style: tmp.image };
        let arr = items.push(callback(View, obj, sum));
      } else {
        obj = { emoji: tmp4, category, animateEmoji };
        let hasItem = null != tmp4.id;
        let tmp5 = callback;
        let tmp6 = EmojiItem;
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
const alphaResult = require("t")("#000000").alpha(0.2);
let result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiPickerListRow = importAllResult.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    let obj = require(477) /* set */;
    nativeRow = obj.isAndroid();
  }
  obj = Object.create(null);
  obj.nativeRow = 0;
  const merged = Object.assign(nativeRow, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  return closure_7(nativeRow ? closure_10 : closure_11, obj);
});
