// Module ID: 15056
// Function ID: 114635
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4122, 1348, 6878, 4142, 4325, 10289, 4326, 33, 4130, 6760, 4549, 7677, 14049, 574, 620, 566, 3991, 15030, 7423, 4099, 4100, 15057, 2]

// Module 15056 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { getScaledChannelRowHeight } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
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
function shouldSkipSection(section) {
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES !== section) {
    if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS !== section) {
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
    const result = getScaledChannelRowHeight(require(4549) /* getFontScale */.getFontScale()) / 2;
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
    let obj = { section: -1, item: -1 };
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
          let tmp64 = require;
          let tmp65 = dependencyMap;
          if (value.type === require(7677) /* _isNativeReflectConstruct */.FastListItemTypes.ITEM) {
            tmp13 = tmp12;
            if (value.layoutStart > diff) {
              break;
            } else {
              if (-1 === obj.section) {
                ({ section: obj.section, item: obj.item } = value);
              }
              let tmp17 = require;
              let tmp18 = dependencyMap;
              tmp14 = value;
              if (value.type === require(7677) /* _isNativeReflectConstruct */.FastListItemTypes.ITEM) {
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
            let tmp15 = require;
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
        tmp24 = tmp27;
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
        tmp39 = tmp42;
      }
    }
    return closure_17;
  }
  tmp = mentionCount.getMentionCount(id.id) > 0;
}
const View = get_ActivityIndicator.View;
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ wrapper: get_ActivityIndicator.StyleSheet.absoluteFillObject });
let closure_16 = { MENTION: "mention", UNREAD: "unread" };
let closure_17 = { beforeItem: null, afterItem: null };
let closure_18 = { code: "function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_19 = { code: "function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = importAllResult.memo(function ChannelUnreadBarsComponent(fastList) {
  fastList = fastList.fastList;
  const guildChannels = fastList.guildChannels;
  const headerHeight = fastList.headerHeight;
  const id = guildChannels.id;
  let obj = importAllResult;
  importAllResult = importAllResult.useRef(-1);
  let closure_5 = importAllResult.useRef(null);
  let obj1 = fastList(headerHeight[15]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  let tmp4 = id(importAllResult.useState(() => outer1_24(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  let beforeItem = first.beforeItem;
  let afterItem = first.afterItem;
  let closure_9 = tmp4[1];
  let items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = importAllResult.useMemo(() => guildChannels(headerHeight[16])(() => {
    let closure_0 = outer2_24(outer1_0, outer1_1, outer1_2, outer1_6);
    outer1_9((afterItem) => {
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
          const tmp7 = guildChannels(headerHeight[17]);
        }
        tmp13 = guildChannels(headerHeight[17]);
      }
      return tmp;
    });
  }, 100), items);
  const items1 = [memo, id];
  const effect = importAllResult.useEffect(() => {
    const items = [afterItem, closure_9];
    const batchedStoreListener = new fastList(headerHeight[18]).BatchedStoreListener(items, () => {
      guildUnreadsSentinel = guildUnreadsSentinel.getGuildUnreadsSentinel(outer1_3);
      let tmp3 = outer1_3 === outer1_5.current;
      if (tmp3) {
        tmp3 = guildUnreadsSentinel === outer1_4.current;
      }
      if (!tmp3) {
        outer1_5.current = outer1_3;
        outer1_4.current = guildUnreadsSentinel;
        outer1_10();
      }
    });
    batchedStoreListener.attach("channel-list-unread-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  let obj2 = fastList(headerHeight[19]);
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
  obj = { runOnJS: fastList(headerHeight[19]).runOnJS, debouncedUpdate: memo };
  fn.__closure = obj;
  fn.__workletHash = 17498480935002;
  fn.__initData = closure_19;
  const animatedReaction = obj2.useAnimatedReaction(A, fn);
  const tmp9 = callback();
  const UnreadSetting = tmp9;
  const tmp11 = guildChannels(headerHeight[20])(fastList.guild);
  const bannerWidth = tmp11.bannerWidth;
  const listBottom = tmp11.listBottom;
  const tmp12 = guildChannels(headerHeight[21])();
  callback = tmp12;
  const items2 = [tmp9.wrapper, bannerWidth, listBottom, tmp12];
  const memo1 = importAllResult.useMemo(() => {
    const items = [tmp9.wrapper, ];
    const obj = { width: bannerWidth };
    let num = 0;
    if (!closure_15) {
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
  const items3 = [youBarTotalHeight];
  const stateFromStores = fastList(headerHeight[18]).useStateFromStores(items3, () => youBarTotalHeight.useReducedMotion);
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
  let tmp = fastList;
  let tmp10 = guildChannels;
  const tmp17 = listBottom;
  const tmp18 = closure_5;
  const tmp19 = bannerWidth;
  const tmpResult = fastList(headerHeight[18]);
  if (null != beforeItem) {
    isMention = beforeItem.isMention;
  }
  obj1.isMention = isMention;
  obj1.scrollPosition = fastList.scrollPosValue;
  obj1.listPaddingTop = 0;
  obj1.headerHeight = headerHeight;
  const items6 = [tmp19(guildChannels(headerHeight[24]), obj1), ];
  obj2 = { position: "bottom", shown: "after" === str, onPress: callback1 };
  let isMention1;
  const tmp10Result = guildChannels(headerHeight[24]);
  const tmp22 = bannerWidth;
  if (null != afterItem) {
    isMention1 = afterItem.isMention;
  }
  obj2.isMention = isMention1;
  obj2.scrollPosition = fastList.scrollPosValue;
  obj2.listPaddingTop = 0;
  obj2.headerHeight = headerHeight;
  items6[1] = tmp22(guildChannels(headerHeight[24]), obj2);
  obj.children = items6;
  return tmp17(tmp18, obj);
});
let obj = { wrapper: get_ActivityIndicator.StyleSheet.absoluteFillObject };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default memoResult;
