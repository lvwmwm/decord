// Module ID: 15627
// Function ID: 119328
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15627 (_createForOfIteratorHelperLoose)
let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (arg1(dependencyMap[7]).SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (arg1(dependencyMap[7]).SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl3 = arg1(dependencyMap[8]).intl;
    return intl3.string(arg1(dependencyMap[8]).t.Rtvk9X);
  } else if (arg1(dependencyMap[7]).SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl2 = arg1(dependencyMap[8]).intl;
    return intl2.string(arg1(dependencyMap[8]).t.y3LQCG);
  } else if (arg1(dependencyMap[7]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.+cGVV6);
  } else if (arg1(dependencyMap[7]).SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  }
}
function SoundPickerButtonRow(section) {
  section = section.section;
  const arg1 = section;
  const channel = section.channel;
  const importDefault = channel;
  const tmp = callback2();
  const dependencyMap = tmp;
  arg1(dependencyMap[10]);
  [][0] = closure_5;
  if (null == section) {
    return null;
  } else {
    let result = !tmp3;
    if (result) {
      let obj = arg1(dependencyMap[12]);
      result = obj.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    obj = {};
    const items = [tmp.row];
    obj.style = items;
    if (result) {
      result = callback(arg1(dependencyMap[13]).PremiumUpsellGradientBackground, {});
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
            obj.isSectionLocked = result;
            const _HermesInternal = HermesInternal;
            return closure_7(section(tmp[14]).SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
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
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: closure_6 } = tmp2);
({ SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = tmp2);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const sum = SOUND_BUTTON_HEIGHT + 8;
const tmp3 = arg1(dependencyMap[4]);
let obj = { row: { height: sum, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING } };
obj = { "Null": null, "Null": null, display: null, flexDirection: null, justifyContent: null, alignItems: null, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
obj.sectionHeader = obj;
obj.sectionIcon = {};
obj.soundButtonNotFirst = { marginLeft: SOUND_ROW_SPACING };
let closure_10 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function SoundboardSoundPickerListComponent(channel) {
  let categories;
  let done;
  let done2;
  channel = channel.channel;
  const arg1 = channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: closure_1, onScroll: closure_2, setCategoryIndex: closure_3, shouldShowPremiumUpsell: closure_4, categories } = channel);
  let closure_5;
  let items1;
  let callback;
  let closure_8;
  let closure_9;
  let callback2;
  function calculateCategory(categories, arg1) {
    const rounded = Math.round(categories);
    let num = 0;
    if (0 < lib2.length) {
      let sum = arg1 + lib2[0];
      let num2 = 0;
      let num3 = 0;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num2 + 1;
        num3 = num3 + 1;
        num = sum1;
        while (num3 < lib2.length) {
          let tmp7 = lib2;
          sum = sum + lib2[num3];
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
    if (channel(closure_2[7]).SoundboardSoundGridSectionType.GUILD === type) {
      let obj = { size: channel(closure_2[17]).GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
      return lib2(lib(closure_2[17]), obj);
    } else if (channel(closure_2[7]).SoundboardSoundGridSectionType.DEFAULTS === type) {
      obj = { source: lib(closure_2[19]), style: currentUser.sectionIcon };
      return lib2(channel(closure_2[18]).Icon, obj);
    } else if (channel(closure_2[7]).SoundboardSoundGridSectionType.FAVORITES === type) {
      const obj1 = { source: lib(closure_2[20]), style: currentUser.sectionIcon };
      return lib2(channel(closure_2[18]).Icon, obj1);
    } else if (channel(closure_2[7]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
      obj = { style: currentUser.sectionIcon };
      return lib2(channel(closure_2[21]).ClockIcon, obj);
    } else if (channel(closure_2[7]).SoundboardSoundGridSectionType.SEARCH === type) {
      return null;
    }
  }
  function isSectionLocked(arg0) {
    let result = !closure_10;
    if (result) {
      result = null != items1[arg0];
    }
    if (result) {
      result = channel(closure_2[12]).isSoundboardSectionNitroLocked(channel.guild_id, items1[arg0].category.categoryInfo);
      const obj = channel(closure_2[12]);
    }
    return result;
  }
  function getSectionPosition(arg0) {
    const tmp2 = isSectionLocked(arg0);
    const tmp3 = isSectionLocked(arg0 + 1);
    if (!tmp2) {
      if (tmp3) {
        if (!tmp) {
          let START = channel(closure_2[22]).PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (tmp2) {
      END = null;
      if (!tmp3) {
        END = channel(closure_2[22]).PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  closure_5 = callback2();
  let obj = arg1(dependencyMap[15]);
  const items = [];
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
  const tmp7 = calculateCategory(categories);
  let iter3 = tmp7();
  if (!iter3.done) {
    do {
      let value = iter3.value;
      let tmp8 = closure_1;
      let tmp9 = closure_2;
      let arr3 = closure_1(closure_2[9])(value.items, tmp4);
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
  callback = importAllResult.useCallback((arg0, row) => lib2(getSectionPosition, { row, section: items1[arg0], channel }), items3);
  let tmpResult = tmp(tmp2[16]);
  closure_8 = tmpResult.debounce((categories) => {
    callback2(calculateCategory(categories, 0));
  });
  tmpResult = tmp(tmp2[16]);
  closure_9 = tmpResult.debounce((categories) => {
    const result = closure_4.set(isSectionLocked(Math.min(calculateCategory(categories, -arg1 / 2), lib2.length - 1)));
  });
  const items4 = [closure_5];
  callback2 = arg1(dependencyMap[10]).useStateFromStores(items4, () => lib(closure_2[11]).canUseSoundboardEverywhere(currentUser.getCurrentUser()));
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
        num = channel(closure_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + channel(closure_2[22]).PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
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
        tmp6 = lib2(channel(closure_2[13]).PremiumUpsellGradientBackground, {});
      }
      const items = [tmp6, getSectionIcon(items1[arg0]), ];
      obj = { 1366204667: "onDragStart", 1449395199: "j", 1689692731: "MiniaturesSpotIllustration", children: isSectionLocked(items1[arg0]) };
      items[2] = lib2(channel(closure_2[24]).Text, obj);
      obj.children = items;
      obj.children = closure_8(closure_4, obj);
      return lib2(closure_4, obj, items1[arg0].category.key);
    },
    renderSectionFooter(arg0) {
      const tmp = getSectionPosition(arg0);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = lib2(lib(closure_2[22]), obj);
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
        if (null != lib) {
          const result = lib.set(y);
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
  return callback(importDefault(dependencyMap[23]), obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;
