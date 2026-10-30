// Module ID: 10004
// Function ID: 10005
// Name: EmojiPickerListRow
// Dependencies: [19, 17, 1193, 9921, 1229, 21, 5009, 575, 1376, 671, 8659, 10005, 6974, 5712, 5016, 7295, 7296, 1188, 10006, 2]

// Module 10004 (EmojiPickerListRow)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Pressables from "Pressables" /* 6974 */;
import LockIcon from "LockIcon" /* 8659 */;
import getEmojiItemUrlDefault from "getEmojiItemUrl" /* 10005 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 10006 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let alphaResult;
let c3;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function EmojiItemLockedOverlay() {
  let obj2;
  const tmp = closure_9();
  const obj = { style: tmp.lockContainer, children: metroImportDefault(LockIcon.LockIcon, obj2) };
  obj2 = { style: tmp.lock };
  return metroImportDefault(_false, obj);
}
class EmojiItem {
  constructor(emoji) {
    let animateEmoji;
    let closure_129_1;
    let closure_129_2;
    let closure_129_3;
    let disabled;
    let isSectionNitroLocked;
    let items;
    let items1;
    let obj3;
    let tmp10Result;
    let tmp2Result2;
    let tmp8;
    emoji = emoji.emoji;
    ({ category: closure_129_1, disabled, onPressEmoji: closure_129_2, onLongPressEmoji: closure_129_3 } = emoji);
    ({ animateEmoji, isSectionNitroLocked } = emoji);
    const tmp = closure_9();
    const tmp4 = getEmojiItemUrlDefault(emoji, animateEmoji, IMAGE_SIZE);
    if (disabled) {
      disabled = !isSectionNitroLocked;
    }
    const obj = {
      accessibilityRole: "button",
      accessibilityLabel: emoji.name,
      style: items,
      onPress() {
        return closure_1_2(emoji, closure_1_1);
      },
      onLongPress() {
        return closure_1_3(emoji);
      },
      children: items1
    };
    items = [tmp.surrogatesFrame, ];
    let disabledOverlay = disabled;
    const PressableOpacity = Pressables.PressableOpacity;
    const tmp5 = metroImportAll;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    if (null != emoji.id) {
      const obj2 = { resizeMode: "contain", style: tmp.image, placeholder: tmp2Result2, source: obj3, usesSmallCache: true };
      const tmp2Result = FastImageDefault;
      const tmp6Result = shared;
      if (tmp6Result.isThemeDark(ThemeStore.theme)) {
        tmp2Result2 = tmp2(7295);
      } else {
        tmp2Result2 = tmp2(7296);
      }
      obj3 = { uri: tmp4 };
      tmp10Result = tmp10(tmp2Result, obj2);
      tmp8 = tmp10;
    } else {
      tmp8 = metroImportDefault;
      const obj4 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
      tmp10Result = metroImportDefault(tmp6(1188).LegacyText, obj4);
    }
    items1 = [tmp10Result, ];
    if (disabled) {
      disabled = tmp8(EmojiItemLockedOverlay, {});
    }
    items1[1] = disabled;
    return tmp5(PressableOpacity, obj);
  }
}
({ View: c3, StyleSheet } = react_native);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const ROW_HEIGHT = EmojiPickerListConstants.ROW_HEIGHT;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: obj2, surrogates: obj3, row: { height: ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, lockContainer: obj4, lock: { width: 16, height: 16, tintColor: "white" } };
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
obj3 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { backgroundColor: alphaResult.hex(), alignItems: "center", justifyContent: "center" };
const obj7 = _modDef671("#000000");
alphaResult = obj7.alpha(0.2);
let merged = Object.assign(StyleSheet.absoluteFillObject);
const React4 = createStyles(obj);
let closure_12 = react.memo(function EmojiPickerListRow(emojis) {
  let animateEmoji;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let containerWidth;
  let emojisDisabled;
  let isSectionNitroLocked;
  let obj3;
  let row;
  let rowSize;
  let str;
  let tmp10;
  emojis = emojis.emojis;
  ({ emojisDisabled, category: closure_129_1, rowSize, onPressEmoji: closure_129_2, onLongPressEmoji: closure_129_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  const tmp = closure_9();
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        let push = items.push;
        if (id == null) {
          id = null;
        }
        let obj = { id, name: str, url: getEmojiItemUrlDefault(tmp4, animateEmoji, IMAGE_SIZE), animated: true === tmp4.animated && animateEmoji, disabled: tmp10 };
        str = tmp4.name;
        if (str == null) {
          str = "";
        }
        tmp10 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        let arr3 = push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj2 = {
    style: tmp.row,
    rowData: obj3,
    onPressEmoji(arg0) {
      let closure_0 = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_2(found, closure_1_1);
      }
    },
    onLongPressEmoji(callback) {
      let closure_0 = callback;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_3(found);
      }
    }
  };
  obj3 = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return metroImportDefault(EmojiPickerListRowViewDefault, obj2);
});
let closure_13 = react.memo(function EmojiPickerListRow(arg0) {
  let animateEmoji;
  let category;
  let emojis;
  let emojisDisabled;
  let hasItem;
  let isSectionNitroLocked;
  let onLongPressEmoji;
  let onPressEmoji;
  let row;
  let rowSize;
  ({ emojisDisabled, rowSize } = arg0);
  ({ emojis, category, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp = closure_9();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let obj2 = { style: tmp.image };
        let arr = items.push(metroImportDefault(_false, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: hasItem, onPressEmoji, onLongPressEmoji, isSectionNitroLocked };
        hasItem = null != tmp4.id;
        let push = items.push;
        let tmp6 = metroImportDefault;
        let tmp7 = EmojiItem;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        let arr3 = push(tmp6(tmp7, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj3 = { style: tmp.row, children: items };
  return metroImportDefault(_false, obj3);
});
const memoResult = react.memo(function EmojiPickerListRow(nativeRow) {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    const obj = PlatformUtils;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const obj2 = {};
  const tmp5 = nativeRow ? closure_12 : closure_13;
  const merged1 = Object.assign(merged);
  return metroImportDefault(tmp5, obj2);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export { EmojiItem };
export const EmojiPickerListRow = memoResult;
