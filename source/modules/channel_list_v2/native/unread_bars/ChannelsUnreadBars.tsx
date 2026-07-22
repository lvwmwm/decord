// Module ID: 14893
// Function ID: 112146
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14893 (_createForOfIteratorHelperLoose)
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
function shouldSkipSection(section) {
  if (arg1(dependencyMap[12]).SECTION_INDEX_CHANNEL_NOTICES !== section) {
    if (arg1(dependencyMap[12]).SECTION_INDEX_GUILD_ACTIONS !== section) {
      return false;
    }
  }
  return true;
}
function checkHasMentionOrUnread(getChannelFromSectionRow, section, diff1, MENTION) {
  const channelFromSectionRow = getChannelFromSectionRow.getChannelFromSectionRow(section, diff1);
  if (null == channelFromSectionRow) {
    return false;
  } else {
    let channel = channelFromSectionRow.channel;
    if (constants.MENTION === MENTION) {
      let flag3 = true;
      if (store.getMentionCount(channel.id) <= 0) {
        const tmp13 = _createForOfIteratorHelperLoose(channel.threadIds);
        let iter4 = tmp13();
        flag3 = false;
        if (!iter4.done) {
          flag3 = true;
          while (store.getMentionCount(iter4.value) <= 0) {
            let iter5 = tmp13();
            iter4 = iter5;
            flag3 = false;
            if (iter5.done) {
              break;
            }
          }
        }
      }
      return flag3;
    } else if (constants.UNREAD === MENTION) {
      const record = channel.record;
      const tmp3 = _createForOfIteratorHelperLoose(channel.threadIds);
      const iter = tmp3();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let tmp4 = channel;
          channel = channel.getChannel(iter2.value);
          if (null == channel) {
            let iter3 = tmp3();
            iter2 = iter3;
            break;
          } else {
            let tmp6 = store;
            let flag2 = true;
            if (store.hasUnread(channel.id)) {
              break;
            }
          }
          return flag2;
        }
      }
      let hasUnreadResult = !record.isGuildVocal() && !channel.isMuted;
      if (hasUnreadResult) {
        hasUnreadResult = store.hasUnread(record.id);
      }
      if (hasUnreadResult) {
        hasUnreadResult = closure_10.resolveUnreadSetting(record) === UnreadSetting.ALL_MESSAGES;
      }
      flag2 = hasUnreadResult;
    } else {
      return false;
    }
  }
}
function findNearestUnreadItem(containerSize, id) {
  if (tmp) {
    let MENTION = constants.MENTION;
  } else {
    MENTION = null;
    if (tmp2) {
      MENTION = constants.UNREAD;
    }
  }
  if (null == MENTION) {
    return closure_17;
  } else if (0 === containerSize.containerSize) {
    return closure_17;
  } else {
    const scrollPosValue = containerSize.scrollPosValue;
    const result = getScaledChannelRowHeight(id(dependencyMap[13]).getFontScale()) / 2;
    let value = scrollPosValue.get();
    const item = containerSize.getSectionItemFromPosition(arg2 + value + result).item;
    let layoutStart;
    if (null != item) {
      layoutStart = item.layoutStart;
    }
    let tmp7 = value;
    if (null != layoutStart) {
      tmp7 = layoutStart;
    }
    let obj = { borderWidth: "pow", backgroundColor: "decorationCutout" };
    const diff = tmp7 + containerSize.containerSize - arg2 - arg3;
    const tmp11 = _createForOfIteratorHelperLoose(containerSize.state.items);
    const iter = tmp11();
    let iter2 = iter;
    let tmp12 = null;
    let tmp13 = null;
    if (!iter.done) {
      while (true) {
        value = iter2.value;
        let tmp14 = tmp12;
        if (value.layoutStart < tmp7) {
          let iter3 = tmp11();
          tmp12 = tmp14;
          iter2 = iter3;
          tmp13 = tmp14;
          if (iter3.done) {
            break;
          }
        } else {
          let tmp64 = id;
          let tmp65 = dependencyMap;
          if (value.type === id(dependencyMap[14]).FastListItemTypes.ITEM) {
            tmp13 = tmp12;
            if (value.layoutStart > diff) {
              break;
            } else {
              if (-1 === obj.section) {
                ({ section: obj.section, item: obj.item } = value);
              }
              let tmp17 = id;
              let tmp18 = dependencyMap;
              tmp14 = value;
              if (value.type === id(dependencyMap[14]).FastListItemTypes.ITEM) {
                let tmp19 = shouldSkipSection;
                tmp14 = tmp12;
                if (!shouldSkipSection(value.section)) {
                  let tmp20 = checkHasMentionOrUnread;
                  let tmp21 = id;
                  let tmp22 = MENTION;
                  tmp14 = value;
                  if (checkHasMentionOrUnread(id, value.section, value.item, MENTION)) {
                    let tmp23 = closure_17;
                    return closure_17;
                  }
                }
              }
            }
          } else {
            let tmp15 = id;
            let tmp16 = dependencyMap;
            tmp14 = tmp12;
          }
        }
        break;
      }
    }
    const sections = id.getSections();
    let section = obj.section;
    if (section >= 0) {
      while (true) {
        let tmp25 = shouldSkipSection;
        let tmp27 = tmp24;
        if (!shouldSkipSection(section)) {
          let diff1 = sections[section] - 1;
          tmp27 = tmp24;
          let tmp29 = diff1;
          if (diff1 >= 0) {
            while (true) {
              let tmp30 = diff1 >= obj.item;
              if (section !== obj.section) {
                let tmp31 = checkHasMentionOrUnread;
                let tmp32 = id;
                let tmp33 = section;
                let tmp34 = diff1;
                let tmp35 = MENTION;
                if (checkHasMentionOrUnread(id, tmp26, diff1, MENTION)) {
                  break;
                }
              }
              diff1 = diff1 - 1;
              tmp27 = tmp30;
              let tmp37 = diff1;
              continue;
            }
            obj = {};
            obj = { section, row: diff1 };
            let tmp36 = constants;
            obj.isMention = MENTION === constants.MENTION;
            obj.beforeItem = obj;
            obj.afterItem = null;
            return obj;
          }
        }
        section = section - 1;
        let tmp24 = tmp27;
      }
    }
    section = undefined;
    if (null != tmp13) {
      section = tmp13.section;
    }
    let num4 = 0;
    if (null != section) {
      num4 = section;
    }
    if (num4 < sections.length) {
      while (true) {
        let tmp40 = shouldSkipSection;
        let tmp42 = tmp39;
        if (!shouldSkipSection(num4)) {
          let tmp43 = sections[num4];
          let num5 = 0;
          let tmp44 = tmp39;
          let tmp45 = tmp43;
          let num6 = 0;
          tmp42 = tmp39;
          if (0 < tmp43) {
            while (true) {
              if (null != tmp13) {
                let tmp46 = num5 <= tmp13.item;
                tmp44 = tmp46;
                if (num4 === tmp13.section) {
                  tmp44 = tmp46;
                  let tmp47 = tmp46;
                }
                num5 = num5 + 1;
                tmp44 = tmp47;
                let tmp54 = tmp43;
                tmp42 = tmp47;
                let tmp55 = num5;
                continue;
              }
              let tmp48 = checkHasMentionOrUnread;
              let tmp49 = id;
              let tmp50 = num4;
              let tmp51 = num5;
              let tmp52 = MENTION;
              tmp47 = tmp44;
              if (checkHasMentionOrUnread(id, tmp41, num5, MENTION)) {
                break;
              }
            }
            let obj1 = {};
            let obj2 = { section: num4, row: num5 };
            let tmp53 = constants;
            obj2.isMention = MENTION === constants.MENTION;
            obj1.afterItem = obj2;
            obj1.beforeItem = null;
            return obj1;
          }
        }
        num4 = num4 + 1;
        let tmp39 = tmp42;
      }
    }
    return closure_17;
  }
  const tmp = mentionCount.getMentionCount(id.id) > 0;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const getScaledChannelRowHeight = arg1(dependencyMap[8]).getScaledChannelRowHeight;
const UnreadSetting = arg1(dependencyMap[9]).UnreadSetting;
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
let closure_15 = arg1(dependencyMap[11]).createStyles({ wrapper: tmp2.StyleSheet.absoluteFillObject });
let closure_16 = { MENTION: "mention", UNREAD: "unread" };
let closure_17 = { 9223372036854775807: "o", -9223372036854775808: "o" };
let closure_18 = { code: "function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_19 = { code: "function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const obj = { wrapper: tmp2.StyleSheet.absoluteFillObject };
const obj2 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(function ChannelUnreadBarsComponent(fastList) {
  fastList = fastList.fastList;
  const arg1 = fastList;
  const guildChannels = fastList.guildChannels;
  const importDefault = guildChannels;
  const headerHeight = fastList.headerHeight;
  const dependencyMap = headerHeight;
  const id = guildChannels.id;
  let callback = id;
  let obj = React;
  const React = React.useRef(-1);
  let closure_5 = React.useRef(null);
  let obj1 = arg1(dependencyMap[15]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  let closure_6 = youBarTotalHeight;
  const tmp4 = callback(React.useState(() => callback(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  const beforeItem = first.beforeItem;
  let closure_7 = beforeItem;
  const afterItem = first.afterItem;
  let closure_8 = afterItem;
  let closure_9 = tmp4[1];
  const items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = React.useMemo(() => guildChannels(headerHeight[16])(() => {
    closure_0 = callback2(closure_0, closure_1, closure_2, closure_6);
    callback((afterItem) => {
      let tmp = afterItem;
      if (afterItem !== closure_0) {
        const afterItem2 = afterItem.afterItem;
        let tmp2;
        if (null != afterItem2) {
          tmp2 = afterItem2;
        }
        afterItem = closure_0.afterItem;
        let tmp4;
        if (null != afterItem) {
          tmp4 = afterItem;
        }
        if (!tmp13(tmp2, tmp4)) {
          tmp = closure_0;
        } else {
          const beforeItem = afterItem.beforeItem;
          let tmp8;
          if (null != beforeItem) {
            tmp8 = beforeItem;
          }
          const beforeItem2 = closure_0.beforeItem;
          let tmp10;
          if (null != beforeItem2) {
            tmp10 = beforeItem2;
          }
          tmp = afterItem;
          const tmp7 = callback(closure_2[17]);
        }
        const tmp13 = callback(closure_2[17]);
      }
      return tmp;
    });
  }, 100), items);
  let closure_10 = memo;
  const items1 = [memo, id];
  const effect = React.useEffect(() => {
    const items = [afterItem, closure_9];
    const batchedStoreListener = new fastList(headerHeight[18]).BatchedStoreListener(items, () => {
      const guildUnreadsSentinel = guildUnreadsSentinel.getGuildUnreadsSentinel(closure_3);
      let tmp3 = closure_3 === ref2.current;
      if (tmp3) {
        tmp3 = guildUnreadsSentinel === ref.current;
      }
      if (!tmp3) {
        ref2.current = closure_3;
        ref.current = guildUnreadsSentinel;
        callback();
      }
    });
    const fastList = batchedStoreListener;
    batchedStoreListener.attach("channel-list-unread-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const getScaledChannelRowHeight = scrollPosValue;
  let obj2 = arg1(dependencyMap[19]);
  class A {
    constructor() {
      return scrollPosValue.get();
    }
  }
  A.__closure = { scrollPosValue };
  A.__workletHash = 7966775243843;
  A.__initData = closure_18;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      fastList(headerHeight[19]).runOnJS(memo)();
      const obj = fastList(headerHeight[19]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[19]).runOnJS, debouncedUpdate: memo };
  fn.__closure = obj;
  fn.__workletHash = 17498480935002;
  fn.__initData = closure_19;
  const animatedReaction = obj2.useAnimatedReaction(A, fn);
  const tmp9 = callback2();
  const UnreadSetting = tmp9;
  const tmp11 = importDefault(dependencyMap[20])(fastList.guild);
  const bannerWidth = tmp11.bannerWidth;
  const listBottom = tmp11.listBottom;
  const tmp12 = importDefault(dependencyMap[21])();
  const callback2 = tmp12;
  const items2 = [tmp9.wrapper, bannerWidth, listBottom, tmp12];
  const memo1 = React.useMemo(() => {
    const items = [tmp9.wrapper, ];
    const obj = { width: bannerWidth };
    let num = 0;
    if (!tmp12) {
      num = listBottom;
    }
    obj.bottom = num;
    items[1] = obj;
    return items;
  }, items2);
  if (null == beforeItem) {
    if (null == afterItem) {
      let str3 = "before";
      if (null == beforeItem) {
        let str4 = null;
        if (null != afterItem) {
          str4 = "after";
        }
        str3 = str4;
      }
      let str2 = str3;
    } else {
      str2 = "after";
    }
    let str = str2;
  } else {
    str = "before";
  }
  const items3 = [closure_6];
  const stateFromStores = arg1(dependencyMap[18]).useStateFromStores(items3, () => youBarTotalHeight.useReducedMotion);
  let closure_16 = stateFromStores;
  const items4 = [beforeItem, stateFromStores, fastList];
  const items5 = [afterItem, stateFromStores, fastList];
  callback = obj.useCallback(() => {
    if (null != beforeItem) {
      let obj = fastList(headerHeight[22]);
      const result = obj.triggerHapticFeedback(guildChannels(headerHeight[23]).IMPACT_LIGHT);
      obj = {};
      ({ section: obj2.section, row: obj2.item } = beforeItem);
      obj.animated = !stateFromStores;
      obj.orientation = "center";
      fastList.scrollToLocation(obj);
    }
  }, items4);
  obj = { style: memo1, pointerEvents: "box-none" };
  const callback1 = obj.useCallback(() => {
    if (null != afterItem) {
      let obj = fastList(headerHeight[22]);
      const result = obj.triggerHapticFeedback(guildChannels(headerHeight[23]).IMPACT_LIGHT);
      obj = {};
      ({ section: obj2.section, row: obj2.item } = afterItem);
      obj.animated = !stateFromStores;
      obj.orientation = "center";
      fastList.scrollToLocation(obj);
    }
  }, items5);
  obj1 = { position: "top", shown: "before" === str, onPress: callback };
  let isMention;
  const tmp = arg1;
  const tmp10 = importDefault;
  const tmp17 = listBottom;
  const tmp18 = closure_5;
  const tmp19 = bannerWidth;
  const tmpResult = arg1(dependencyMap[18]);
  if (null != beforeItem) {
    isMention = beforeItem.isMention;
  }
  obj1.isMention = isMention;
  obj1.scrollPosition = fastList.scrollPosValue;
  obj1.listPaddingTop = 0;
  obj1.headerHeight = headerHeight;
  const items6 = [tmp19(importDefault(dependencyMap[24]), obj1), ];
  obj2 = { position: "bottom", shown: "after" === str, onPress: callback1 };
  let isMention1;
  const tmp10Result = importDefault(dependencyMap[24]);
  const tmp22 = bannerWidth;
  if (null != afterItem) {
    isMention1 = afterItem.isMention;
  }
  obj2.isMention = isMention1;
  obj2.scrollPosition = fastList.scrollPosValue;
  obj2.listPaddingTop = 0;
  obj2.headerHeight = headerHeight;
  items6[1] = tmp22(importDefault(dependencyMap[24]), obj2);
  obj.children = items6;
  return tmp17(tmp18, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default memoResult;
