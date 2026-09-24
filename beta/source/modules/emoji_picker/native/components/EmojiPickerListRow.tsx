// Module ID: 10521
// Function ID: 10522
// Name: EmojiPickerListRow
// Dependencies: [109, 19, 17, 1186, 10478, 1222, 21, 4790, 580, 1368, 676, 1401, 558, 568, 5347, 5834, 4642, 7410, 7411, 1181, 5373, 10522, 2]

// Module 10521 (EmojiPickerListRow)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import PlatformUtils2 from "PlatformUtils" /* 1368 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import LockIcon from "LockIcon" /* 5347 */;
import Pressables from "Pressables" /* 5373 */;
import FastImageDefault from "FastImage" /* 5834 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 10522 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
let closure_3 = ["nativeRow"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const EmojiPickerListConstants = fn(10478);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = fn(1222).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, surrogates: null, row: null, lockContainer: null, lock: null };
const PlatformUtils = fn(1368);
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.surrogates = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj.row = { height: EmojiPickerListConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
const obj8 = _modDef676("#000000");
obj6.backgroundColor = _modDef676("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.lockContainer = obj6;
obj.lock = { width: 16, height: 16, tintColor: "white" };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp4 = closure_11();
  if (cResult[0] !== tmp4.lock) {
    const obj2 = { style: tmp4.lock };
    const tmp7 = options(LockIcon.LockIcon, obj2);
    cResult[0] = tmp4.lock;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.lockContainer) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = options(hasOwnProperty, { style: tmp4.lockContainer, children: tmp5 });
  cResult[2] = tmp4.lockContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (() => {
  const tmp = closure_11();
  const obj = { style: tmp.lockContainer, children: options(LockIcon.LockIcon, { style: tmp.lock }) };
  return options(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(28);
  emoji = emoji.emoji;
  const category = emoji.category;
  ({ disabled, onPressEmoji } = emoji);
  const onLongPressEmoji = emoji.onLongPressEmoji;
  const animateEmoji = emoji.animateEmoji;
  let surrogates = closure_11();
  if (cResult[0] === animateEmoji) {
    if (cResult[1] === emoji) {
      let image = cResult[2];
      if (disabled) {
        disabled = !emoji.isSectionNitroLocked;
      }
      let disabledOverlay = disabled;
      if (disabled) {
        disabledOverlay = surrogates.disabledOverlay;
      }
      if (cResult[3] === surrogates.surrogatesFrame) {
        if (cResult[4] === disabledOverlay) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] === category) {
          if (cResult[7] === emoji) {
            if (cResult[8] === onPressEmoji) {
              let tmp9 = cResult[9];
            }
            if (cResult[10] === emoji) {
              if (cResult[11] === onLongPressEmoji) {
                let tmp10 = cResult[12];
              }
              if (cResult[13] === emoji.id) {
                if (cResult[14] === emoji.surrogates) {
                  if (cResult[15] === image) {
                    if (cResult[16] === surrogates.image) {
                      if (cResult[17] === surrogates.surrogates) {
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
                          let tmp22 = tmp23;
                        } else {
                          tmp22 = cResult[20];
                        }
                        class P {
                          constructor() {
                            return onPressEmoji(emoji, category);
                          }
                        }
                        const obj3 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: tmp8, onPress: tmp9, onLongPress: tmp10, children: null };
                        const items = [cResult[18], tmp22];
                        obj3.children = items;
                        const tmp28 = v65535(tmp(5373).PressableOpacity, obj3);
                        cResult[21] = emoji.name;
                        cResult[22] = tmp8;
                        cResult[23] = tmp9;
                        cResult[24] = tmp10;
                        cResult[25] = cResult[18];
                        cResult[26] = tmp22;
                        cResult[27] = tmp28;
                      }
                    }
                  }
                }
              }
              class P {
                constructor() {
                  return onPressEmoji(emoji, category);
                }
              }
              if (null == emoji.id) {
                const obj4 = { allowFontScaling: false, style: null, children: null };
                class P {
                  constructor() {
                    return onPressEmoji(emoji, category);
                  }
                }
                obj4.children = emoji.surrogates;
                const tmp14 = options(tmp(1181).LegacyText, obj4);
                cResult[13] = emoji.id;
                cResult[14] = emoji.surrogates;
                cResult[15] = image;
                image = surrogates.image;
                cResult[16] = image;
                surrogates = surrogates.surrogates;
                cResult[17] = surrogates;
                cResult[18] = tmp14;
              }
              const obj5 = { resizeMode: "contain", style: surrogates.image, placeholder: null, source: null, usesSmallCache: true };
              const tmp15 = options;
              const tmp17 = FastImageDefault;
              if (tmpResult.isThemeDark(ThemeStore.theme)) {
                let tmp16Result = tmp16(7410);
              } else {
                tmp16Result = tmp16(7411);
              }
              obj5.placeholder = tmp16Result;
              const obj6 = { uri: image };
              obj5.source = obj6;
              tmp15(tmp17, obj5);
              tmpResult = tmp(4642);
            }
            class P {
              constructor() {
                return onPressEmoji(emoji, category);
              }
            }
            cResult[10] = emoji;
            cResult[11] = onLongPressEmoji;
            cResult[12] = tmp11;
            tmp10 = tmp11;
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
        tmp9 = P;
      }
      const items1 = [surrogates.surrogatesFrame, disabledOverlay];
      cResult[3] = surrogates.surrogatesFrame;
      cResult[4] = disabledOverlay;
      cResult[5] = items1;
      tmp8 = items1;
    }
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
    class P {
      constructor() {
        return onPressEmoji(emoji, category);
      }
    }
    tmp5[0] = emoji.id;
    let animated = animateEmoji;
    if (animateEmoji) {
      animated = emoji.animated;
    }
    tmp5[1] = animated;
    tmp5[2] = IMAGE_SIZE;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(tmp5);
  }
  cResult[0] = animateEmoji;
  cResult[1] = emoji;
  cResult[2] = emojiURL;
}) : ((emoji) => {
  emoji = emoji.emoji;
  ({ category: importDefault, disabled, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emoji);
  const tmp = closure_11();
  if (null == emoji.id) {
    let str = emoji.url;
    if (str == null) {
      str = "";
    }
    let emojiURL = str;
  } else {
    const obj2 = { id: emoji.id, animated: null, size: null };
    if (animateEmoji) {
      animateEmoji = emoji.animated;
    }
    obj2.animated = animateEmoji;
    obj2.size = IMAGE_SIZE;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  if (disabled) {
    disabled = !emoji.isSectionNitroLocked;
  }
  let tmp8 = dependencyMap;
  const obj3 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
  const items = [tmp.surrogatesFrame, ];
  let disabledOverlay = disabled;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  obj3.style = items;
  obj3.onPress = function onPress() {
    return dependencyMap(emoji, importDefault);
  };
  obj3.onLongPress = function onLongPress() {
    return closure_1_3(emoji);
  };
  if (null != emoji.id) {
    const obj4 = { resizeMode: "contain", style: tmp.image, placeholder: null, source: null, usesSmallCache: true };
    const tmp15 = FastImageDefault;
    if (tmp7Result.isThemeDark(ThemeStore.theme)) {
      tmp8 = 7410;
      let tmp14Result = tmp14(tmp8);
    } else {
      tmp14Result = tmp14(7411);
    }
    obj4.placeholder = tmp14Result;
    const obj5 = { uri: emojiURL };
    obj4.source = obj5;
    options(tmp15, obj4);
    tmp7Result = tmp7(4642);
  } else {
    const obj6 = { allowFontScaling: false, style: tmp.surrogates, children: emoji.surrogates };
    const tmp10 = options(tmp7(1181).LegacyText, obj6);
    const items1 = [tmp10, ];
    if (disabled) {
      disabled = options(closure_12, {});
    }
    items1[1] = disabled;
    obj3.children = items1;
    return v65535(Pressables.PressableOpacity, obj3);
  }
});
let closure_13 = tmp6;
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((emojis) => {
  const cResult = c.c(22);
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
          if (cResult[4] === rowSize) {
            let tmp3 = cResult[5];
          }
          if (cResult[6] === containerWidth) {
            if (cResult[7] === isSectionNitroLocked) {
              if (cResult[8] === tmp3) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === category) {
                if (cResult[11] === emojis) {
                  if (cResult[12] === onPressEmoji) {
                    let tmp12 = cResult[13];
                  }
                  if (cResult[14] === emojis) {
                    if (cResult[15] === onLongPressEmoji) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp2.row) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp12) {
                          if (cResult[20] === tmp13) {
                            let tmp14 = cResult[21];
                          }
                          return tmp14;
                        }
                      }
                    }
                    class I {
                      constructor(arg0) {
                        closure_0 = emojis;
                        found = emojis.find(() => { ... });
                        if (null != found) {
                          tmp2 = onLongPressEmoji;
                          tmp3 = onLongPressEmoji(found);
                        }
                        return;
                      }
                    }
                    const obj2 = { style: tmp2.row, rowData: tmp8, onPressEmoji: tmp12, onLongPressEmoji: tmp13 };
                    const tmp17 = options(EmojiPickerListRowViewDefault, obj2);
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
                      found = emojis.find(() => { ... });
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
                  found = emojis.find(() => { ... });
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
          found = emojis.find(() => { ... });
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
  emojis = emojis.emojis;
  ({ emojisDisabled, category: importDefault, rowSize, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        if (id == null) {
          id = null;
        }
        let obj = { id, name: null, url: null, animated: null, disabled: null };
        let str = tmp4.name;
        if (str == null) {
          str = "";
        }
        obj.name = str;
        if (null == tmp4.id) {
          let str2 = tmp4.url;
          if (str2 == null) {
            str2 = "";
          }
          let emojiURL = str2;
        } else {
          let obj2 = AvatarUtilsDefault;
          let obj3 = { id: tmp4.id, animated: null, size: null };
          let animated = animateEmoji;
          if (animateEmoji) {
            animated = tmp4.animated;
          }
          obj3.animated = animated;
          obj3.size = IMAGE_SIZE;
          emojiURL = obj2.getEmojiURL(obj3);
        }
        obj.url = emojiURL;
        obj.animated = true === tmp4.animated && animateEmoji;
        let tmp11 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj.disabled = tmp11;
        let arr3 = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj4 = {
    style: closure_11().row,
    rowData: { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked },
    onPressEmoji(arg0) {
      const nativeEvent = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        dependencyMap(found, importDefault);
      }
    },
    onLongPressEmoji(callback) {
      const nativeEvent = callback;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_3(found);
      }
    }
  };
  return options(EmojiPickerListRowViewDefault, obj4);
}));
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
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
                    if (cResult[9] === tmp2) {
                      let tmp3 = cResult[10];
                    }
                    if (cResult[11] === tmp3) {
                      if (cResult[12] === tmp2.row) {
                        let tmp15 = cResult[13];
                      }
                      return tmp15;
                    }
                    const obj2 = { style: tmp2.row, children: tmp3 };
                    const tmp18 = options(hasOwnProperty, obj2);
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
        let arr = items.push(options(hasOwnProperty, obj3, sum));
      } else {
        let obj4 = { emoji: tmp6, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp6.id;
        let tmp8 = options;
        let tmp9 = closure_13;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp6.id);
        }
        obj4.disabled = hasItem;
        obj4.onPressEmoji = onPressEmoji;
        obj4.onLongPressEmoji = onLongPressEmoji;
        obj4.isSectionNitroLocked = isSectionNitroLocked;
        let arr3 = items.push(tmp8(tmp9, obj4, sum));
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
        let arr = items.push(options(hasOwnProperty, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp4.id;
        let tmp6 = options;
        let tmp7 = closure_13;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj.disabled = hasItem;
        obj.onPressEmoji = onPressEmoji;
        obj.onLongPressEmoji = onLongPressEmoji;
        obj.isSectionNitroLocked = isSectionNitroLocked;
        let arr3 = items.push(tmp6(tmp7, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  return options(hasOwnProperty, { style: tmp.row, children: items });
}));
ReactCompilerGating = fn(558);
const alphaResult = _modDef676("#000000").alpha(0.2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiItem = tmp6;
export const EmojiPickerListRow = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((nativeRow) => {
  const cResult = c.c(7);
  if (cResult[0] !== nativeRow) {
    nativeRow = nativeRow.nativeRow;
    const tmp8 = _objectWithoutProperties(nativeRow, closure_3);
    cResult[0] = nativeRow;
    cResult[1] = tmp8;
    cResult[2] = nativeRow;
    let isAndroidResult = nativeRow;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    isAndroidResult = cResult[2];
  }
  if (undefined === isAndroidResult) {
    isAndroidResult = PlatformUtils2.isAndroid();
    const tmpResult = PlatformUtils2;
  }
  if (isAndroidResult) {
    if (cResult[3] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp22 = options(closure_14, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp22;
    }
  } else {
    if (cResult[5] !== tmp4) {
      const obj3 = {};
      const merged1 = Object.assign(tmp4);
      const tmp15 = options(closure_15, obj3);
      cResult[5] = tmp4;
      cResult[6] = tmp15;
      let tmp9 = tmp15;
    } else {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
}) : ((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    nativeRow = PlatformUtils2.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const merged1 = Object.assign(merged);
  return options(nativeRow ? closure_14 : closure_15, {});
}));
