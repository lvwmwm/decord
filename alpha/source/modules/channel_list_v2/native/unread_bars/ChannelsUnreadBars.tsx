// Module ID: 18560
// Function ID: 18561
// Name: ChannelsUnreadBars
// Dependencies: [32, 19, 17, 5141, 5074, 4989, 6941, 6897, 6830, 5882, 6831, 21, 5140, 7783, 5766, 7304, 17387, 551, 558, 504, 1652, 1705, 18512, 7183, 5376, 5377, 18561, 2]

// Module 18560 (ChannelsUnreadBars)
import debounceDefault from "debounce" /* 551 */;
import HapticUtils from "HapticUtils" /* 5376 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5377 */;
import useFontScale from "useFontScale" /* 5766 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5882 */;
import ReadStateConstants from "ReadStateConstants" /* 6831 */;
import FastList from "FastList" /* 7304 */;
import ChannelListState from "ChannelListState" /* 7783 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5074 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6941 */;
import ReadStateStore from "ReadStateStore" /* 6897 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6830 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_14;
let closure_15;
let hasOwnProperty;
function shouldSkipSection(diff2) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES !== diff2) {
    if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS !== diff2) {
      return false;
    }
  }
  return true;
}
function checkHasMentionOrUnread(getChannelFromSectionRow, section, item, MENTION) {
  let muted;
  let tmp3;
  function hasMention(channel) {
    if (ReadStateStore.getMentionCount(channel.id) > 0) {
      return true;
    } else {
      const threadIds = channel.threadIds;
      for (const item10011 of threadIds) {
        if (ReadStateStore.getMentionCount(item10011) > 0) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    }
  }
  function hasUnread(channel) {
    let record;
    let threadIds;
    ({ record, threadIds } = channel);
    const obj = threadIds[Symbol.iterator]();
    while (obj !== undefined) {
      channel = channel.getChannel(tmp);
      let tmp4 = channel;
      if (null != channel) {
        if (!muted.isMuted(tmp4.id)) {
          if (ReadStateStore.hasUnread(tmp4.id)) {
            obj.return();
            let flag = true;
            return true;
          }
        }
      }
      continue;
    }
    let hasUnreadResult = !record.isGuildVocal() && !channel.isMuted;
    record.isGuildVocal();
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(record.id);
    }
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(record) === constants.ALL_MESSAGES;
    }
    return hasUnreadResult;
  }
  const channelFromSectionRow = getChannelFromSectionRow.getChannelFromSectionRow(section, item);
  if (null == channelFromSectionRow) {
    return false;
  } else {
    let tmp2 = MENTION;
    let channel = channelFromSectionRow.channel;
    if (constants.MENTION === MENTION) {
      return hasMention(channel);
    } else if (tmp3.UNREAD === MENTION) {
      return hasUnread(channel);
    } else {
      let flag = false;
      return false;
    }
  }
}
function findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight) {
  let MENTION;
  let item;
  let section;
  const tmp = GuildReadStateStore.getMentionCount(guildChannels.id) > 0;
  if (tmp) {
    MENTION = constants.MENTION;
  } else {
    MENTION = null;
    if (tmp2) {
      MENTION = constants.UNREAD;
    }
  }
  if (null == MENTION) {
    return closure_18;
  } else if (0 === fastList.containerSize) {
    return closure_18;
  } else {
    const scrollPosValue = fastList.scrollPosValue;
    const obj6 = useFontScale;
    const result = getScaledChannelRowHeight(obj6.getFontScale()) / 2;
    const value = scrollPosValue.get();
    const item2 = fastList.getSectionItemFromPosition(headerHeight + value + result).item;
    let layoutStart;
    if (item2 != null) {
      layoutStart = item2.layoutStart;
    }
    if (layoutStart == null) {
      layoutStart = value;
    }
    section = -1;
    item = -1;
    let tmp9 = null;
    const diff = layoutStart + fastList.containerSize - headerHeight - youBarTotalHeight;
    const items = fastList.getItems();
    for (const item10031 of items) {
      let tmp13 = item10031;
      if (item10031.layoutStart >= layoutStart) {
        let tmp72 = require;
        if (tmp13.type === FastList.FastListItemTypes.ITEM) {
          if (tmp13.layoutStart > diff) {
            obj.return();
            break;
          } else {
            if (-1 === section) {
              ({ section, item } = tmp13);
            }
            if (tmp13.type !== tmp72(7304).FastListItemTypes.ITEM) {
              tmp9 = item10031;
            } else if (shouldSkipSection(tmp13.section)) {
              continue;
            } else if (checkHasMentionOrUnread(guildChannels, tmp13.section, tmp13.item, MENTION)) {
              let tmp28 = closure_18;
              obj.return();
              return tmp28;
            }
            continue;
          }
          let sections = guildChannels.getSections();
          let diff2 = section;
          if (section >= 0) {
            while (true) {
              if (!shouldSkipSection(diff2)) {
                let diff1 = sections[diff2] - 1;
                if (0 <= diff1) {
                  while (true) {
                    if (diff2 !== section) {
                      if (checkHasMentionOrUnread(guildChannels, tmp33, tmp38, MENTION)) {
                        break;
                      }
                    }
                    diff1 = diff1 - 1;
                    continue;
                  }
                  let obj2 = { beforeItem: obj3, afterItem: null };
                  let obj3 = { section: diff2, row: diff1, isMention: MENTION === constants.MENTION };
                  return obj2;
                }
              }
              diff2 = diff2 - 1;
            }
          }
          let num5;
          if (tmp9 != null) {
            num5 = tmp9.section;
          }
          if (num5 == null) {
            num5 = 0;
          }
          if (num5 < sections.length) {
            while (true) {
              if (!shouldSkipSection(num5)) {
                let tmp48 = sections[num5];
                let num6 = 0;
                if (0 < tmp48) {
                  while (true) {
                    let tmp50 = num6;
                    if (null != tmp9) {
                      num6 = num6 + 1;
                      continue;
                    }
                    if (checkHasMentionOrUnread(guildChannels, tmp47, tmp50, MENTION)) {
                      break;
                    }
                  }
                  let obj4 = { afterItem: obj5, beforeItem: null };
                  let obj5 = { section: num5, row: num6, isMention: MENTION === constants.MENTION };
                  return obj4;
                }
              }
              num5 = num5 + 1;
            }
          }
          return closure_18;
        }
      }
      continue;
    }
  }
}
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const getScaledChannelRowHeight = RedesignChannelListConstants.getScaledChannelRowHeight;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { wrapper: StyleSheet.absoluteFillObject };
let closure_16 = createStyles.createStyles(obj);
const constants = { MENTION: "mention", UNREAD: "unread" };
let closure_18 = { beforeItem: null, afterItem: null };
let closure_22 = { code: "(function ChannelsUnreadBarsTsx1(){let[scrollPosValue]=this.__closure;return scrollPosValue.get();})" };
let closure_23 = { code: "(function ChannelsUnreadBarsTsx2(position,lastPosition){let[scheduleOnRN,debouncedUpdate]=this.__closure;if(position!==lastPosition){scheduleOnRN(debouncedUpdate);}})" };
const memoResult = react.memo(function ChannelUnreadBarsComponent(fastList) {
  let closure_4;
  let isMention2;
  let isMention3;
  let items10;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp9;
  fastList = fastList.fastList;
  const guildChannels = fastList.guildChannels;
  const headerHeight = fastList.headerHeight;
  react = undefined;
  let wrapper;
  let bannerWidth;
  let listBottom;
  let closure_14;
  let stateFromStores;
  const id = guildChannels.id;
  let obj = react;
  const guild = fastList.guild;
  react = react.useRef(-1);
  let closure_5 = react.useRef(null);
  let tmp = fastList;
  let tmp2 = headerHeight;
  const obj2 = fastList(headerHeight[16]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  let tmp4 = id(react.useState(() => findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  let beforeItem = first.beforeItem;
  let afterItem = first.afterItem;
  let closure_9 = tmp4[1];
  let items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = react.useMemo(() => debounceDefault(() => {
    let closure_0 = findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight);
    const tmp = closure_1_9((afterItem) => {
      let tmp6;
      if (afterItem === closure_0) {
        tmp6 = afterItem;
      } else {
        afterItem = afterItem.afterItem;
        const afterItem2 = tmp.afterItem;
        tmp6 = tmp;
        const tmp2 = closure_2_1;
        const tmp3 = closure_2_2;
        const tmp4 = closure_2_1(closure_2_2[18]);
        if (tmp4(afterItem, afterItem2)) {
          beforeItem = afterItem.beforeItem;
          tmp2(tmp3[18]);
          const beforeItem2 = tmp.beforeItem;
          tmp6 = tmp;
        }
      }
      return tmp6;
    });
  }, 100), items);
  const items1 = [memo, id];
  const effect = react.useEffect(() => {
    let ref;
    let ref2;
    const items = [closure_9, memo];
    const batchedStoreListener = new fastList(headerHeight[19]).BatchedStoreListener(items, () => {
      const guildUnreadsSentinel = memo.getGuildUnreadsSentinel(id);
      let tmp4 = id === ref2.current;
      const tmp = id;
      const tmp3 = ref2;
      if (tmp4) {
        tmp4 = guildUnreadsSentinel === ref.current;
      }
      if (!tmp4) {
        tmp3.current = tmp;
        ref.current = guildUnreadsSentinel;
        closure_1_10();
      }
    });
    batchedStoreListener.attach("channel-list-unread-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const items2 = [closure_22, scrollPosValue];
  let c0;
  [tmp9, tmp10] = items2;
  const tmp8 = fastList(headerHeight[20]);
  class ChannelsUnreadBarsTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items3 = [tmp10];
  ChannelsUnreadBarsTsx1.__closure = items3;
  ChannelsUnreadBarsTsx1.__workletHash = 16683573593754;
  ChannelsUnreadBarsTsx1.__initData = tmp9;
  const items4 = [closure_23, , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  items4[1] = tmp(tmp2[21]).scheduleOnRN;
  items4[2] = memo;
  c0 = undefined;
  let c1;
  [tmp11, tmp12, tmp13] = items4;
  class ChannelsUnreadBarsTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1);
      }
    }
  }
  const items5 = [tmp12, tmp13];
  ChannelsUnreadBarsTsx2.__closure = items5;
  ChannelsUnreadBarsTsx2.__workletHash = 10887635959554;
  ChannelsUnreadBarsTsx2.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(ChannelsUnreadBarsTsx1, ChannelsUnreadBarsTsx2);
  const tmp15 = closure_16();
  wrapper = tmp15;
  const tmp17 = guildChannels(tmp2[22])(guild);
  bannerWidth = tmp17.bannerWidth;
  listBottom = tmp17.listBottom;
  const tmp18 = guildChannels(tmp2[23])();
  closure_14 = tmp18;
  const items6 = [tmp15.wrapper, bannerWidth, listBottom, tmp18];
  let isMention;
  const memo1 = obj.useMemo(() => {
    let num;
    const items = [wrapper.wrapper, ];
    const obj = { width: bannerWidth, bottom: num };
    num = 0;
    if (!closure_14) {
      num = listBottom;
    }
    items[1] = obj;
    return items;
  }, items6);
  if (beforeItem != null) {
    isMention = beforeItem.isMention;
  }
  let str = "before";
  if (!isMention) {
    let isMention1;
    if (afterItem != null) {
      isMention1 = afterItem.isMention;
    }
    let str3 = "after";
    if (!isMention1) {
      let str4 = "before";
      if (null == beforeItem) {
        let str5 = null;
        if (null != afterItem) {
          str5 = "after";
        }
        str4 = str5;
      }
      str3 = str4;
    }
    str = str3;
  }
  const items7 = [youBarTotalHeight];
  const tmpResult = tmp(tmp2[19]);
  stateFromStores = tmpResult.useStateFromStores(items7, () => youBarTotalHeight.useReducedMotion);
  const items8 = [beforeItem, stateFromStores, fastList];
  const items9 = [afterItem, stateFromStores, fastList];
  const callback = obj.useCallback(() => {
    const tmp = beforeItem;
    if (null != beforeItem) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: !stateFromStores, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = tmp);
      fastList.scrollToLocation(obj3);
    }
  }, items8);
  let obj3 = { style: memo1, pointerEvents: "box-none", children: items10 };
  const callback1 = obj.useCallback(() => {
    const tmp = afterItem;
    if (null != afterItem) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: !stateFromStores, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = tmp);
      fastList.scrollToLocation(obj3);
    }
  }, items9);
  const obj4 = { position: "top", shown: "before" === str, onPress: callback, isMention: isMention2, scrollPosition: fastList.scrollPosValue, listPaddingTop: 0, headerHeight };
  isMention2 = undefined;
  const tmp16Result = guildChannels(tmp2[26]);
  const tmp25 = stateFromStores;
  const tmp26 = closure_5;
  if (beforeItem != null) {
    isMention2 = beforeItem.isMention;
  }
  items10 = [closure_14(tmp16Result, obj4), ];
  const obj5 = { position: "bottom", shown: "after" === str, onPress: callback1, isMention: isMention3, scrollPosition: fastList.scrollPosValue, listPaddingTop: 0, headerHeight };
  isMention3 = undefined;
  const tmp16Result2 = guildChannels(tmp2[26]);
  if (afterItem != null) {
    isMention3 = afterItem.isMention;
  }
  items10[1] = closure_14(tmp16Result2, obj5);
  return tmp25(tmp26, obj3);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default memoResult;
