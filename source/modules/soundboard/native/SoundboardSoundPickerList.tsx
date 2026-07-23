// Module ID: 15752
// Function ID: 121544
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 1849, 15747, 33, 4130, 689, 4585, 1212, 9403, 566, 3776, 7957, 9361, 15753, 4549, 22, 5515, 1273, 15759, 9604, 4094, 9360, 7588, 4126, 2]

// Module 15752 (_createForOfIteratorHelperLoose)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SOUND_BUTTON_HEIGHT from "SOUND_BUTTON_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Rtvk9X);
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.y3LQCG);
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+cGVV6"]);
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  }
}
function SoundPickerButtonRow(section) {
  section = section.section;
  const channel = section.channel;
  let c3;
  const tmp = callback2();
  const dependencyMap = tmp;
  section(566);
  [][0] = _isNativeReflectConstruct;
  if (null == section) {
    return null;
  } else {
    let result = !tmp3;
    if (result) {
      let obj = section(7957);
      result = obj.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    c3 = result;
    obj = {};
    const items = [tmp.row];
    obj.style = items;
    if (result) {
      result = callback(section(9361).PremiumUpsellGradientBackground, {});
    }
    const items1 = [
      result,
      section.soundsByRow[section.row].map((type) => {
          type = type.type;
          if (section(tmp[7]).SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound, channel };
            let soundButtonNotFirst = null;
            if (arg1 > 0) {
              soundButtonNotFirst = tmp.soundButtonNotFirst;
            }
            obj.style = soundButtonNotFirst;
            obj.isSectionLocked = c3;
            const _HermesInternal = HermesInternal;
            return outer1_7(section(tmp[14]).SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (section(section[7]).SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        })
    ];
    obj.children = items1;
    return closure_8(View, obj);
  }
}
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: closure_6 } = SOUND_BUTTON_HEIGHT);
({ SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SOUND_BUTTON_HEIGHT);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let sum = SOUND_BUTTON_HEIGHT + 8;
obj = { row: obj };
obj = { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
obj.sectionHeader = _createForOfIteratorHelperLoose;
obj.sectionIcon = { height: 16, width: 16, borderRadius: 8, marginRight: 4 };
obj.soundButtonNotFirst = { marginLeft: SOUND_ROW_SPACING };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPickerListComponent(channel) {
  let View;
  let categories;
  let closure_3;
  let dependencyMap;
  let done;
  let done2;
  let importDefault;
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: closure_3, shouldShowPremiumUpsell: View, categories } = channel);
  let _isNativeReflectConstruct;
  let items1;
  let callback;
  let closure_8;
  let closure_9;
  let callback2;
  function calculateCategory(categories, arg1) {
    const rounded = Math.round(categories);
    let num = 0;
    if (0 < lib.length) {
      let sum = arg1 + lib[0];
      let num2 = 0;
      let num3 = 0;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num2 + 1;
        num3 = num3 + 1;
        num = sum1;
        while (num3 < lib.length) {
          let tmp7 = lib;
          sum = sum + lib[num3];
          num2 = sum1;
          num = sum1;
          if (rounded < sum) {
            break;
          }
        }
      }
    }
    return num;
  }
  function getSectionIcon(category) {
    const type = category.category.categoryInfo.type;
    if (channel(outer1_2[7]).SoundboardSoundGridSectionType.GUILD === type) {
      let obj = { size: channel(outer1_2[17]).GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
      return lib(outer1_1(outer1_2[17]), obj);
    } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.DEFAULTS === type) {
      obj = { source: outer1_1(outer1_2[19]), style: currentUser.sectionIcon };
      return lib(channel(outer1_2[18]).Icon, obj);
    } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.FAVORITES === type) {
      const obj1 = { source: outer1_1(outer1_2[20]), style: currentUser.sectionIcon };
      return lib(channel(outer1_2[18]).Icon, obj1);
    } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
      obj = { style: currentUser.sectionIcon };
      return lib(channel(outer1_2[21]).ClockIcon, obj);
    } else if (channel(outer1_2[7]).SoundboardSoundGridSectionType.SEARCH === type) {
      return null;
    }
  }
  function isSectionLocked(arg0) {
    let result = !closure_10;
    if (result) {
      result = null != items1[arg0];
    }
    if (result) {
      result = channel(outer1_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, items1[arg0].category.categoryInfo);
      const obj = channel(outer1_2[12]);
    }
    return result;
  }
  function getSectionPosition(arg0) {
    const tmp2 = isSectionLocked(arg0);
    const tmp3 = isSectionLocked(arg0 + 1);
    if (!tmp2) {
      if (tmp3) {
        if (!tmp) {
          let START = channel(outer1_2[22]).PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (tmp2) {
      END = null;
      if (!tmp3) {
        END = channel(outer1_2[22]).PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  _isNativeReflectConstruct = callback2();
  let obj = channel(4549);
  let items = [];
  const fontScale = obj.useFontScale();
  const tmp5 = calculateCategory(categories);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let _Math = Math;
      let arr = items.push(Math.ceil(iter.value.items.length / tmp4));
      let iter2 = tmp5();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  items1 = [];
  let tmp7 = calculateCategory(categories);
  let iter3 = tmp7();
  if (!iter3.done) {
    do {
      let value = iter3.value;
      let tmp8 = importDefault;
      let tmp9 = dependencyMap;
      let arr3 = importDefault(9403)(value.items, tmp4);
      let tmp10 = closure_9;
      obj = { category: value, height: arr3.length * closure_9 + (18 * fontScale + 8), soundsByRow: arr3 };
      arr = items1.push(obj);
      let iter4 = tmp7();
      iter3 = iter4;
      done2 = iter4.done;
    } while (!done2);
  }
  const items2 = [items1];
  callback = importAllResult.useMemo(() => items1.map((height) => height.height), items2);
  const items3 = [items1, channel];
  callback = importAllResult.useCallback((arg0, row) => lib(getSectionPosition, { row, section: items1[arg0], channel }), items3);
  let tmpResult = tmp(22);
  closure_8 = tmpResult.debounce((categories) => {
    callback2(calculateCategory(categories, 0));
  });
  tmpResult = tmp(22);
  closure_9 = tmpResult.debounce((categories) => {
    const result = closure_4.set(isSectionLocked(Math.min(calculateCategory(categories, -arg1 / 2), lib.length - 1)));
  });
  const items4 = [_isNativeReflectConstruct];
  callback2 = channel(566).useStateFromStores(items4, () => outer1_1(outer1_2[11]).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
  obj = {
    onLayout(nativeEvent) {
      return callback4(0, nativeEvent.nativeEvent.layout.height);
    },
    sections: items,
    sectionSize(arg0) {
      if (null == items1[arg0]) {
        let num = 0;
      } else {
        num = 42;
      }
      return num;
    },
    itemSize(arg0) {
      let num = 0;
      if (null != items1[arg0]) {
        num = closure_9;
      }
      return num;
    },
    sectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num = channel(outer1_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + channel(outer1_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: channel.listRef,
    renderItem: callback,
    renderSection(arg0) {
      const tmp2 = isSectionLocked(arg0);
      let obj = {};
      obj = { style: currentUser.sectionHeader };
      let tmp6 = tmp2;
      if (tmp2) {
        tmp6 = lib(channel(outer1_2[13]).PremiumUpsellGradientBackground, {});
      }
      const items = [tmp6, getSectionIcon(items1[arg0]), ];
      obj = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: isSectionLocked(items1[arg0]) };
      items[2] = lib(channel(outer1_2[24]).Text, obj);
      obj.children = items;
      obj.children = closure_8(outer1_4, obj);
      return lib(outer1_4, obj, items1[arg0].category.key);
    },
    renderSectionFooter(arg0) {
      const tmp = getSectionPosition(arg0);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = lib(outer1_1(outer1_2[22]), obj);
      }
      return tmp2;
    },
    insetEnd: num,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const y = nativeEvent.contentOffset.y;
      callback3(y);
      callback4(y, nativeEvent.layoutMeasurement.height);
      if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
        if (null != closure_1) {
          const result = closure_1.set(y);
        }
        if (null != callback) {
          callback(nativeEvent);
        }
      }
    },
    keyboardShouldPersistTaps: "handled",
    optimizeListItemRender: true,
    inActionSheet: true
  };
  return callback(importDefault(7588), obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;
