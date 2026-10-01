// Module ID: 9770
// Function ID: 9771
// Name: EmojiPickerListRow
// Dependencies: [19, 17, 1182, 9753, 1218, 21, 4836, 576, 1364, 672, 1397, 5409, 5435, 5899, 4685, 6552, 6553, 1177, 9771, 2]

// Module 9770 (EmojiPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import LockIcon from "LockIcon" /* 5409 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 9771 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let nativeRow;

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
    let emojiURL;
    let items;
    let items1;
    let obj4;
    let tmp11;
    let tmp13Result;
    let tmp14Result;
    emoji = emoji.emoji;
    ({ category: closure_129_1, disabled, onPressEmoji: closure_129_2, onLongPressEmoji: closure_129_3, animateEmoji } = emoji);
    const isSectionNitroLocked = emoji.isSectionNitroLocked;
    const tmp = closure_9();
    if (null == emoji.id) {
      let str = emoji.url;
      if (str == null) {
        str = "";
      }
      emojiURL = str;
    } else {
      const obj = { id: emoji.id, animated: animateEmoji, size: IMAGE_SIZE };
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (animateEmoji) {
        animateEmoji = emoji.animated;
      }
      emojiURL = getEmojiURL(obj);
    }
    if (disabled) {
      disabled = !isSectionNitroLocked;
    }
    const obj2 = {
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
    const tmp7 = metroImportAll;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    if (null != emoji.id) {
      const obj3 = { resizeMode: "contain", style: tmp.image, placeholder: tmp14Result, source: obj4, usesSmallCache: true };
      const tmp15 = FastImageDefault;
      const tmp8Result = shared;
      if (tmp8Result.isThemeDark(ThemeStore.theme)) {
        tmp14Result = tmp14(6552);
      } else {
        tmp14Result = tmp14(6553);
      }
      obj4 = { uri: emojiURL };
      tmp13Result = tmp13(tmp15, obj3);
      tmp11 = tmp13;
    } else {
      tmp11 = metroImportDefault;
      const obj5 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
      tmp13Result = metroImportDefault(tmp8(1177).LegacyText, obj5);
    }
    items1 = [tmp13Result, ];
    if (disabled) {
      disabled = tmp11(EmojiItemLockedOverlay, {});
    }
    items1[1] = disabled;
    return tmp7(PressableOpacity, obj2);
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
const obj7 = _modDef672("#000000");
alphaResult = obj7.alpha(0.2);
let merged = Object.assign(StyleSheet.absoluteFillObject);
const React4 = createStyles(obj);
let closure_12 = react.memo((emojis) => {
  let animateEmoji;
  let animated;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let containerWidth;
  let emojiURL;
  let emojisDisabled;
  let isSectionNitroLocked;
  let obj4;
  let row;
  let rowSize;
  let str;
  let tmp12;
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
        let obj = { id, name: str, url: emojiURL, animated: true === tmp4.animated && animateEmoji, disabled: tmp12 };
        str = tmp4.name;
        if (str == null) {
          str = "";
        }
        if (null == tmp4.id) {
          let str2 = tmp4.url;
          if (str2 == null) {
            str2 = "";
          }
          emojiURL = str2;
        } else {
          let tmp9 = AvatarUtilsDefault;
          let obj2 = { id: tmp4.id, animated, size: IMAGE_SIZE };
          animated = animateEmoji;
          let getEmojiURL = tmp9.getEmojiURL;
          if (animateEmoji) {
            animated = tmp4.animated;
          }
          emojiURL = getEmojiURL(obj2);
        }
        tmp12 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        let arr3 = push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj3 = {
    style: tmp.row,
    rowData: obj4,
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
  obj4 = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return metroImportDefault(EmojiPickerListRowViewDefault, obj3);
});
let closure_13 = react.memo((arg0) => {
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
const memoResult = react.memo((nativeRow) => {
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
