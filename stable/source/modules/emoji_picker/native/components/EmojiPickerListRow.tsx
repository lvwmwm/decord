// Module ID: 9686
// Function ID: 9687
// Name: EmojiPickerListRow
// Dependencies: [109, 19, 17, 1194, 9643, 1230, 21, 4837, 588, 1370, 684, 1403, 558, 576, 5410, 5896, 4687, 6553, 6554, 1189, 5436, 9687, 2]

// Module 9686 (EmojiPickerListRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import _modDef684 from "module_684" /* 684 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1230 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1403 */;
import shared from "shared" /* 4687 */;
import Pressables from "Pressables" /* 5436 */;
import FastImageDefault from "FastImage" /* 5896 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 9687 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9643 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let emoji, nativeRow;

let StyleSheet;
let alphaResult;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp;
const LockIcon = tmp(5410);
let closure_3 = ["nativeRow"];
({ View: hasOwnProperty, StyleSheet } = react_native);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const ROW_HEIGHT = EmojiPickerListConstants.ROW_HEIGHT;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: c9, jsxs: c10 } = Fragment);
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
const obj6 = _modDef684("#000000");
alphaResult = obj6.alpha(0.2);
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4.lock) {
    const obj2 = { style: tmp4.lock };
    const tmp7 = React4(LockIcon.LockIcon, obj2);
    cResult[0] = tmp4.lock;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.lockContainer) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.lockContainer, children: tmp5 };
  const tmp9 = React4(hasOwnProperty, obj3);
  cResult[2] = tmp4.lockContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  let obj2;
  const tmp = closure_11();
  const obj = { style: tmp.lockContainer, children: React4(LockIcon.LockIcon, obj2) };
  obj2 = { style: tmp.lock };
  return React4(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let disabled;
  let emojiURL;
  let items;
  let onPressEmoji;
  const obj = react2;
  const cResult = obj.c(28);
  emoji = emoji.emoji;
  const category = emoji.category;
  ({ disabled, onPressEmoji } = emoji);
  const onLongPressEmoji = emoji.onLongPressEmoji;
  const animateEmoji = emoji.animateEmoji;
  const isSectionNitroLocked = emoji.isSectionNitroLocked;
  const tmp4 = closure_11();
  if (cResult[0] === animateEmoji) {
    let tmp5;
    if (cResult[1] === emoji) {
      tmp5 = cResult[2];
    }
    if (disabled) {
      disabled = !isSectionNitroLocked;
    }
    if (cResult[3] === tmp4.surrogatesFrame) {
      let tmp12;
      if (cResult[4] === (disabled && tmp4.disabledOverlay)) {
        tmp12 = cResult[5];
      }
      if (cResult[6] === category) {
        if (cResult[7] === emoji) {
          let tmp13;
          if (cResult[8] === onPressEmoji) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === emoji) {
            let tmp14;
            let tmp19Result;
            if (cResult[11] === onLongPressEmoji) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === emoji.id) {
              if (cResult[14] === emoji.surrogates) {
                if (cResult[15] === tmp5) {
                  if (cResult[16] === tmp4.image) {
                    let tmp16;
                    let tmp25;
                    if (cResult[17] === tmp4.surrogates) {
                      tmp16 = cResult[18];
                    }
                    if (cResult[19] !== disabled) {
                      if (disabled) {
                        class P {
                          constructor() {
                            return onPressEmoji(emoji, category);
                          }
                        }
                      }
                      class P {
                        constructor() {
                          return onPressEmoji(emoji, category);
                        }
                      }
                      cResult[19] = disabled;
                      cResult[20] = disabled;
                      tmp25 = tmp26;
                    } else {
                      tmp25 = cResult[20];
                    }
                    class P {
                      constructor() {
                        return onPressEmoji(emoji, category);
                      }
                    }
                    const obj2 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: tmp12, onPress: tmp13, onLongPress: tmp14, children: items };
                    items = [tmp16, tmp25];
                    cResult[21] = emoji.name;
                    cResult[22] = tmp12;
                    cResult[23] = tmp13;
                    cResult[24] = tmp14;
                    cResult[25] = tmp16;
                    cResult[26] = tmp25;
                    cResult[27] = authStore(Pressables.PressableOpacity, obj2);
                    const tmp31 = authStore(Pressables.PressableOpacity, obj2);
                  }
                }
              }
            }
            class P {
              constructor() {
                return onPressEmoji(emoji, category);
              }
            }
            if (null != emoji.id) {
              let tmp20Result;
              const tmp19 = React4;
              class P {
                constructor() {
                  return onPressEmoji(emoji, category);
                }
              }
              tmp22[1] = tmp4.image;
              const tmp21 = FastImageDefault;
              const tmpResult = shared;
              if (tmpResult.isThemeDark(ThemeStore.theme)) {
                tmp20Result = tmp20(6553);
              } else {
                tmp20Result = tmp20(6554);
              }
              tmp22[2] = tmp20Result;
              const obj3 = { uri: tmp5 };
              tmp22[3] = obj3;
              tmp19Result = tmp19(tmp21, tmp22);
            } else {
              const obj4 = { allowFontScaling: false, style: null, children: emoji.surrogates };
              class P {
                constructor() {
                  return onPressEmoji(emoji, category);
                }
              }
              tmp19Result = React4(tmp(1189).LegacyText, obj4);
            }
            cResult[13] = emoji.id;
            cResult[14] = emoji.surrogates;
            cResult[15] = tmp5;
            cResult[16] = tmp4.image;
            cResult[17] = tmp4.surrogates;
            cResult[18] = tmp19Result;
            tmp16 = tmp19Result;
          }
          class P {
            constructor() {
              return onPressEmoji(emoji, category);
            }
          }
          cResult[10] = emoji;
          cResult[11] = onLongPressEmoji;
          cResult[12] = tmp15;
          tmp14 = tmp15;
        }
      }
      class P {
        constructor() {
          return onPressEmoji(emoji, category);
        }
      }
      cResult[6] = category;
      cResult[7] = emoji;
      cResult[8] = onPressEmoji;
      cResult[9] = P;
      tmp13 = P;
    }
    const items1 = [tmp4.surrogatesFrame, disabled && tmp4.disabledOverlay];
    cResult[3] = tmp4.surrogatesFrame;
    cResult[4] = disabled && tmp4.disabledOverlay;
    cResult[5] = items1;
    tmp12 = items1;
  }
  if (null == emoji.id) {
    let str = emoji.url;
    if (str == null) {
      str = "";
    }
    class P {
      constructor() {
        return onPressEmoji(emoji, category);
      }
    }
  } else {
    const tmp7 = AvatarUtilsDefault;
    class P {
      constructor() {
        return onPressEmoji(emoji, category);
      }
    }
    tmp8[0] = emoji.id;
    let animated = animateEmoji;
    const getEmojiURL = tmp7.getEmojiURL;
    if (animateEmoji) {
      animated = emoji.animated;
    }
    tmp8[1] = animated;
    tmp8[2] = IMAGE_SIZE;
    emojiURL = getEmojiURL(tmp8);
  }
  cResult[0] = animateEmoji;
  cResult[1] = emoji;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : ((emoji) => {
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
  const tmp = closure_11();
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
  const tmp7 = authStore;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  if (null != emoji.id) {
    const obj3 = { resizeMode: "contain", style: tmp.image, placeholder: tmp14Result, source: obj4, usesSmallCache: true };
    const tmp15 = FastImageDefault;
    const tmp8Result = shared;
    if (tmp8Result.isThemeDark(ThemeStore.theme)) {
      tmp14Result = tmp14(6553);
    } else {
      tmp14Result = tmp14(6554);
    }
    obj4 = { uri: emojiURL };
    tmp13Result = tmp13(tmp15, obj3);
    tmp11 = tmp13;
  } else {
    tmp11 = React4;
    const obj5 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    tmp13Result = React4(tmp8(1189).LegacyText, obj5);
  }
  items1 = [tmp13Result, ];
  if (disabled) {
    disabled = tmp11(closure_12, {});
  }
  items1[1] = disabled;
  return tmp7(PressableOpacity, obj2);
});
let closure_13 = tmp8;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((emojis) => {
  let animateEmoji;
  let category;
  let containerWidth;
  let emojisDisabled;
  let isSectionNitroLocked;
  let onPressEmoji;
  let row;
  let rowSize;
  const obj = react2;
  const cResult = obj.c(22);
  emojis = emojis.emojis;
  ({ emojisDisabled, category } = emojis);
  ({ rowSize, containerWidth, row, onPressEmoji } = emojis);
  const onLongPressEmoji = emojis.onLongPressEmoji;
  ({ animateEmoji, isSectionNitroLocked } = emojis);
  const tmp2 = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === emojis) {
      if (cResult[2] === emojisDisabled) {
        if (cResult[3] === row) {
          let tmp3;
          if (cResult[4] === rowSize) {
            tmp3 = cResult[5];
          }
          if (cResult[6] === containerWidth) {
            if (cResult[7] === isSectionNitroLocked) {
              let tmp8;
              if (cResult[8] === tmp3) {
                tmp8 = cResult[9];
              }
              if (cResult[10] === category) {
                if (cResult[11] === emojis) {
                  let tmp12;
                  if (cResult[12] === onPressEmoji) {
                    tmp12 = cResult[13];
                  }
                  if (cResult[14] === emojis) {
                    let tmp13;
                    if (cResult[15] === onLongPressEmoji) {
                      tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp2.row) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp12) {
                          let tmp14;
                          if (cResult[20] === tmp13) {
                            tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                      }
                    }
                    class I {
                      constructor(arg0) {
                        closure_0 = emojis;
                        found = emojis.find(() => { /* body not rendered: F138469 */ });
                        if (null != found) {
                          tmp2 = onLongPressEmoji;
                          tmp3 = onLongPressEmoji(found);
                        }
                        return;
                      }
                    }
                    const obj2 = { style: tmp2.row, rowData: tmp8, onPressEmoji: tmp12, onLongPressEmoji: tmp13 };
                    const tmp17 = React4(EmojiPickerListRowViewDefault, obj2);
                    cResult[17] = tmp2.row;
                    cResult[18] = tmp8;
                    cResult[19] = tmp12;
                    cResult[20] = tmp13;
                    cResult[21] = tmp17;
                    tmp14 = tmp17;
                  }
                  class I {
                    constructor(arg0) {
                      closure_0 = emojis;
                      found = emojis.find(() => { /* body not rendered: F138469 */ });
                      if (null != found) {
                        tmp2 = onLongPressEmoji;
                        tmp3 = onLongPressEmoji(found);
                      }
                      return;
                    }
                  }
                  cResult[14] = emojis;
                  cResult[15] = onLongPressEmoji;
                  cResult[16] = I;
                  tmp13 = I;
                }
              }
              class C {
                constructor(arg0) {
                  closure_0 = emojis;
                  found = emojis.find(() => { /* body not rendered: F138468 */ });
                  if (null != found) {
                    tmp2 = onPressEmoji;
                    tmp3 = category;
                    tmp4 = onPressEmoji(found, category);
                  }
                  return;
                }
              }
              cResult[10] = category;
              cResult[11] = emojis;
              cResult[12] = onPressEmoji;
              cResult[13] = C;
              tmp12 = C;
            }
          }
          tmp9[0] = containerWidth;
          tmp9[1] = PADDING_VERTICAL;
          tmp9[2] = IMAGE_SIZE;
          tmp9[3] = tmp3;
          tmp9[4] = isSectionNitroLocked;
          cResult[6] = containerWidth;
          cResult[7] = isSectionNitroLocked;
          cResult[8] = tmp3;
          cResult[9] = tmp9;
          tmp8 = tmp9;
        }
      }
    }
  }
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      class I {
        constructor(arg0) {
          closure_0 = emojis;
          found = emojis.find(() => { /* body not rendered: F138469 */ });
          if (null != found) {
            tmp2 = onLongPressEmoji;
            tmp3 = onLongPressEmoji(found);
          }
          return;
        }
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  cResult[0] = animateEmoji;
  cResult[1] = emojis;
  cResult[2] = emojisDisabled;
  cResult[3] = row;
  cResult[4] = rowSize;
  cResult[5] = items;
  tmp3 = items;
}) : ((emojis) => {
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
  const tmp = closure_11();
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
  return React4(EmojiPickerListRowViewDefault, obj3);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const obj = react2;
  const cResult = obj.c(14);
  ({ emojis, emojisDisabled, category, rowSize, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp2 = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === category) {
      if (cResult[2] === emojis) {
        if (cResult[3] === emojisDisabled) {
          if (cResult[4] === isSectionNitroLocked) {
            if (cResult[5] === onLongPressEmoji) {
              if (cResult[6] === onPressEmoji) {
                if (cResult[7] === row) {
                  if (cResult[8] === rowSize) {
                    let tmp3;
                    if (cResult[9] === tmp2) {
                      tmp3 = cResult[10];
                    }
                    if (cResult[11] === tmp3) {
                      let tmp15;
                      if (cResult[12] === tmp2.row) {
                        tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                    const obj2 = { style: tmp2.row, children: tmp3 };
                    const tmp18 = React4(hasOwnProperty, obj2);
                    cResult[11] = tmp3;
                    cResult[12] = tmp2.row;
                    cResult[13] = tmp18;
                    tmp15 = tmp18;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp6 = emojis[sum];
      if (undefined === tmp6) {
        let obj3 = { style: tmp2.image };
        let arr = items.push(React4(hasOwnProperty, obj3, sum));
      } else {
        let obj4 = { emoji: tmp6, category, animateEmoji, disabled: hasItem, onPressEmoji, onLongPressEmoji, isSectionNitroLocked };
        hasItem = null != tmp6.id;
        let push = items.push;
        let tmp8 = React4;
        let tmp9 = closure_13;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp6.id);
        }
        let arr3 = push(tmp8(tmp9, obj4, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  cResult[0] = animateEmoji;
  cResult[1] = category;
  cResult[2] = emojis;
  cResult[3] = emojisDisabled;
  cResult[4] = isSectionNitroLocked;
  cResult[5] = onLongPressEmoji;
  cResult[6] = onPressEmoji;
  cResult[7] = row;
  cResult[8] = rowSize;
  cResult[9] = tmp2;
  cResult[10] = items;
  tmp3 = items;
}) : ((arg0) => {
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
  const tmp = closure_11();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let obj2 = { style: tmp.image };
        let arr = items.push(React4(hasOwnProperty, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: hasItem, onPressEmoji, onLongPressEmoji, isSectionNitroLocked };
        hasItem = null != tmp4.id;
        let push = items.push;
        let tmp6 = React4;
        let tmp7 = closure_13;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        let arr3 = push(tmp6(tmp7, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj3 = { style: tmp.row, children: items };
  return React4(hasOwnProperty, obj3);
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(ReactCompilerGating.isReactCompilerEnabled() ? ((nativeRow) => {
  let isAndroidResult;
  let tmp4;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== nativeRow) {
    nativeRow = nativeRow.nativeRow;
    const tmp8 = _objectWithoutProperties(nativeRow, closure_3);
    cResult[0] = nativeRow;
    cResult[1] = tmp8;
    cResult[2] = nativeRow;
    isAndroidResult = nativeRow;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    isAndroidResult = cResult[2];
  }
  if (undefined === isAndroidResult) {
    const tmpResult = PlatformUtils;
    isAndroidResult = tmpResult.isAndroid();
  }
  if (isAndroidResult) {
    let tmp16;
    if (cResult[3] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp22 = React4(closure_14, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[4];
    }
    tmp9 = tmp16;
  } else if (cResult[5] !== tmp4) {
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    const tmp15 = React4(closure_15, obj3);
    cResult[5] = tmp4;
    cResult[6] = tmp15;
    tmp9 = tmp15;
  } else {
    tmp9 = cResult[6];
  }
  return tmp9;
}) : ((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    const obj = PlatformUtils;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const obj2 = {};
  const tmp5 = nativeRow ? closure_14 : closure_15;
  const merged1 = Object.assign(merged);
  return React4(tmp5, obj2);
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiItem = tmp8;
export const EmojiPickerListRow = memo3Result;
