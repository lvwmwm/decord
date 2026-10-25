// Module ID: 19349
// Function ID: 19350
// Name: NotificationSettingChannelOverrides
// Dependencies: [32, 19, 17, 4827, 7207, 4913, 1392, 1087, 21, 4971, 587, 558, 576, 504, 5593, 7208, 5604, 6827, 1128, 4980, 7144, 6903, 6911, 8502, 10624, 7145, 1202, 8723, 7150, 2]

// Module 19349 (NotificationSettingChannelOverrides)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import ChannelRecord from "ChannelRecord" /* 4827 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4980 */;
import useChannelName from "useChannelName" /* 5604 */;
import fuzzysearchDefault from "fuzzysearch" /* 6827 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7208 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7207 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_0, navigation, obj1;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const isGuildReadableType = ChannelRecord.isGuildReadableType;
({ ChannelTypes: c10, NotificationSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, searchContainer: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingChannelOverrides(guildId) {
  let channels;
  let first;
  let first1;
  let intl;
  let stateFromStores;
  let tmp12;
  let tmp7;
  let tmp = guildId;
  let obj = guildId(stateFromStores[12]);
  const cResult = obj.c(35);
  guildId = guildId.guildId;
  navigation = guildId.navigation;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildCategoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildCategoryStore.getCategories(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[13]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const insets = navigation(tmp2[14])().insets;
  let obj3 = channels;
  const tmp10 = first1(channels.useState(""), 2);
  first1 = tmp10[0];
  if (cResult[3] === stateFromStores) {
    let arr2;
    let tmp14;
    if (cResult[4] === first1) {
      arr2 = cResult[5];
    }
    if (cResult[7] !== arr2.length) {
      const items1 = [arr2.length];
      cResult[7] = arr2.length;
      cResult[8] = items1;
      tmp14 = items1;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === arr2) {
      let tmp15;
      if (cResult[10] === tmp14) {
        tmp15 = cResult[11];
      }
      channels = tmp15.channels;
      const sections = tmp15.sections;
      if (cResult[12] === channels.length) {
        let tmp16;
        if (cResult[13] === first1) {
          tmp16 = cResult[14];
        }
        if (cResult[15] === channels) {
          let tmp17;
          if (cResult[16] === first1) {
            tmp17 = cResult[17];
          }
          const effect = obj3.useEffect(tmp16, tmp17);
          const tmp19 = navigation(stateFromStores[20])();
          if (cResult[18] === channels) {
            let tmp20;
            let tmp23;
            let tmp29;
            if (cResult[19] === navigation) {
              tmp20 = cResult[20];
            }
            const tmp21 = navigation(stateFromStores[24])();
            const _Symbol = Symbol;
            class B {
              constructor(arg0, arg1) {
                tmp = channels[arg1];
                closure_0 = tmp;
                obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                TableRow = guildId(closure_2[21]).TableRow;
                obj1 = { IconComponent: null };
                TableRowIcon = guildId(closure_2[22]).TableRowIcon;
                obj3 = guildId(closure_2[23]);
                obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                obj.icon = closure_1_12(TableRowIcon, obj1);
                obj.start = 0 === arg1;
                obj.end = arg1 === channels.length - 1;
                obj4 = guildId(closure_2[16]);
                obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                obj.onPress = function onPress() {
                  const obj = { channelId: id.id };
                  navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
                };
                return closure_1_12(TableRow, obj);
              }
            }
            if (cResult[22] !== tmp4.searchContainer) {
              let obj2 = { style: tmp4.searchContainer, children: null };
              class B {
                constructor(arg0, arg1) {
                  tmp = channels[arg1];
                  closure_0 = tmp;
                  obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                  TableRow = guildId(closure_2[21]).TableRow;
                  obj1 = { IconComponent: null };
                  TableRowIcon = guildId(closure_2[22]).TableRowIcon;
                  obj3 = guildId(closure_2[23]);
                  obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                  obj.icon = closure_1_12(TableRowIcon, obj1);
                  obj.start = 0 === arg1;
                  obj.end = arg1 === channels.length - 1;
                  obj4 = guildId(closure_2[16]);
                  obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                  obj.onPress = function onPress() {
                    const obj = { channelId: id.id };
                    navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
                  };
                  return closure_1_12(TableRow, obj);
                }
              }
              const tmp26 = closure_12(View, obj2);
              cResult[22] = tmp4.searchContainer;
              cResult[23] = tmp26;
              tmp23 = tmp26;
            } else {
              tmp23 = cResult[23];
            }
            if (cResult[24] === channels.length) {
              if (cResult[25] === insets) {
                if (cResult[26] === tmp19) {
                  if (cResult[27] === tmp20) {
                    if (cResult[28] === tmp21) {
                      let tmp27;
                      if (cResult[29] === sections) {
                        tmp27 = cResult[30];
                      }
                      if (cResult[31] === tmp4.container) {
                        if (cResult[32] === tmp23) {
                          let tmp31;
                          if (cResult[33] === tmp27) {
                            tmp31 = cResult[34];
                          }
                          return tmp31;
                        }
                      }
                      class B {
                        constructor(arg0, arg1) {
                          tmp = channels[arg1];
                          closure_0 = tmp;
                          obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                          TableRow = guildId(closure_2[21]).TableRow;
                          obj1 = { IconComponent: null };
                          TableRowIcon = guildId(closure_2[22]).TableRowIcon;
                          obj3 = guildId(closure_2[23]);
                          obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                          obj.icon = closure_1_12(TableRowIcon, obj1);
                          obj.start = 0 === arg1;
                          obj.end = arg1 === channels.length - 1;
                          obj4 = guildId(closure_2[16]);
                          obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                          obj.onPress = function onPress() {
                            const obj = { channelId: id.id };
                            navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
                          };
                          return closure_1_12(TableRow, obj);
                        }
                      }
                      tmp34[0] = tmp4.container;
                      const items2 = [tmp23, tmp27];
                      tmp34[1] = items2;
                      const tmp35 = closure_13(View, tmp34);
                      cResult[31] = tmp4.container;
                      cResult[32] = tmp23;
                      cResult[33] = tmp27;
                      cResult[34] = tmp35;
                      tmp31 = tmp35;
                    }
                  }
                }
              }
            }
            if (0 === channels.length) {
              let obj4 = { Illustration: tmp(tmp2[27]).NoResults, title: obj8.string(tmp(tmp2[18]).t.wM7uRI), body: intl.string(tmp(tmp2[18]).t.f5cMAg) };
              const EmptyState = tmp(tmp2[26]).EmptyState;
              class B {
                constructor(arg0, arg1) {
                  tmp = channels[arg1];
                  closure_0 = tmp;
                  obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                  TableRow = guildId(closure_2[21]).TableRow;
                  obj1 = { IconComponent: null };
                  TableRowIcon = guildId(closure_2[22]).TableRowIcon;
                  obj3 = guildId(closure_2[23]);
                  obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                  obj.icon = closure_1_12(TableRowIcon, obj1);
                  obj.start = 0 === arg1;
                  obj.end = arg1 === channels.length - 1;
                  obj4 = guildId(closure_2[16]);
                  obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                  obj.onPress = function onPress() {
                    const obj = { channelId: id.id };
                    navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
                  };
                  return closure_1_12(TableRow, obj);
                }
              }
              intl = tmp(tmp2[18]).intl;
              tmp29 = closure_12(EmptyState, obj4);
            } else {
              const obj5 = { sections, renderItem: tmp20, itemSize: null, insetEnd: insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp21, wrapChildren: true };
              class B {
                constructor(arg0, arg1) {
                  tmp = channels[arg1];
                  closure_0 = tmp;
                  obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
                  TableRow = guildId(closure_2[21]).TableRow;
                  obj1 = { IconComponent: null };
                  TableRowIcon = guildId(closure_2[22]).TableRowIcon;
                  obj3 = guildId(closure_2[23]);
                  obj1.IconComponent = obj3.getChannelIconComponent(tmp);
                  obj.icon = closure_1_12(TableRowIcon, obj1);
                  obj.start = 0 === arg1;
                  obj.end = arg1 === channels.length - 1;
                  obj4 = guildId(closure_2[16]);
                  obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
                  obj.onPress = function onPress() {
                    const obj = { channelId: id.id };
                    navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
                  };
                  return closure_1_12(TableRow, obj);
                }
              }
              tmp29 = closure_12(tmp9(tmp2[28]), obj5);
            }
            cResult[24] = channels.length;
            cResult[25] = insets;
            cResult[26] = tmp19;
            cResult[27] = tmp20;
            cResult[28] = tmp21;
            cResult[29] = sections;
            cResult[30] = tmp29;
            tmp27 = tmp29;
          }
          class B {
            constructor(arg0, arg1) {
              tmp = channels[arg1];
              closure_0 = tmp;
              obj = { icon: null, start: null, end: null, label: null, labelLineClamp: 1, arrow: true, onPress: null };
              TableRow = guildId(closure_2[21]).TableRow;
              obj1 = { IconComponent: null };
              TableRowIcon = guildId(closure_2[22]).TableRowIcon;
              obj3 = guildId(closure_2[23]);
              obj1.IconComponent = obj3.getChannelIconComponent(tmp);
              obj.icon = closure_1_12(TableRowIcon, obj1);
              obj.start = 0 === arg1;
              obj.end = arg1 === channels.length - 1;
              obj4 = guildId(closure_2[16]);
              obj.label = obj4.computeChannelName(tmp, closure_1_9, closure_1_8);
              obj.onPress = function onPress() {
                const obj = { channelId: id.id };
                navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
              };
              return closure_1_12(TableRow, obj);
            }
          }
          cResult[18] = channels;
          cResult[19] = navigation;
          cResult[20] = B;
          tmp20 = B;
        }
        const items3 = [channels, ];
        cResult[15] = channels;
        cResult[16] = first1;
        cResult[17] = items3;
        tmp17 = items3;
      }
      const fn2 = function x() {
        if (null != first1) {
          if ("" !== tmp) {
            let formatToPlainStringResult;
            if (channels.length > 0) {
              const intl2 = intl4.intl;
              const obj = { count: channels.length };
              formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
            } else {
              const intl = intl4.intl;
              formatToPlainStringResult = intl.string(intl4.t.f5cMAg);
            }
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(formatToPlainStringResult);
          }
        }
      };
      cResult[12] = channels.length;
      cResult[13] = first1;
      cResult[14] = fn2;
      tmp16 = fn2;
    }
    const obj6 = { channels: null, sections: tmp14 };
    cResult[9] = arr2;
    cResult[10] = tmp14;
    cResult[11] = obj6;
    tmp15 = obj6;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(channel) {
        return channel.channel;
      }
    }
    cResult[6] = L;
    tmp12 = L;
  } else {
    class L {
      constructor(channel) {
        return channel.channel;
      }
    }
  }
  const arr3 = navigation(stateFromStores[15])(stateFromStores._categories, stateFromStores, (channel) => {
    channel = channel.channel;
    let tmp = isGuildReadableType(channel.type);
    if (!tmp) {
      tmp = channel.type === constants.GUILD_CATEGORY && null != stateFromStores[channel.id] && stateFromStores[channel.id].length > 0;
      const tmp3 = channel.type === constants.GUILD_CATEGORY && null != stateFromStores[channel.id] && stateFromStores[channel.id].length > 0;
    }
    if (tmp) {
      if ("" !== first1) {
        if (null != first1) {
          const obj = useChannelName;
          const str3 = obj.computeChannelName(channel, UserStore, RelationshipStore);
          const formatted = str3.toLowerCase();
          const tmp14 = fuzzysearchDefault;
          return tmp14(first1.toLowerCase(), formatted);
        }
      }
      return tmp;
    } else {
      return false;
    }
  });
  const mapped = arr3.map(tmp12);
  cResult[3] = stateFromStores;
  cResult[4] = first1;
  cResult[5] = mapped;
  arr2 = mapped;
}) : (function NotificationSettingChannelOverrides(arg0) {
  let SearchBar;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj4;
  let tmp16Result;
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = closure_14();
  let tmp3 = stateFromStores;
  let obj = require("get initialized");
  let items = [GuildCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(require));
  const insets = navigation(stateFromStores[14])().insets;
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const tmp8 = tmp6[1];
  const memo = channels.useMemo(() => {
    let items;
    const arr = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = isGuildReadableType(channel.type);
      if (!tmp) {
        tmp = channel.type === constants.GUILD_CATEGORY && null != closure_1_2[channel.id] && closure_1_2[channel.id].length > 0;
        const tmp3 = channel.type === constants.GUILD_CATEGORY && null != closure_1_2[channel.id] && closure_1_2[channel.id].length > 0;
      }
      if (tmp) {
        if ("" !== first) {
          if (null != first) {
            const obj = require("useChannelName");
            const str3 = obj.computeChannelName(channel, UserStore, RelationshipStore);
            const formatted = str3.toLowerCase();
            const tmp14 = navigation(stateFromStores[17]);
            return tmp14(first.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    });
    const mapped = arr.map((channel) => channel.channel);
    let obj = { channels: mapped, sections: items };
    items = [mapped.length];
    return obj;
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const sections = memo.sections;
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        let formatToPlainStringResult;
        if (channels.length > 0) {
          const intl2 = intl4.intl;
          const obj = { count: channels.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t.f5cMAg);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const tmp11 = navigation(stateFromStores[20])();
  const callback = channels.useCallback((arg0, arg1) => {
    let TableRowIcon;
    let obj2;
    let obj3;
    let obj4;
    const id = tmp;
    let obj = {
      icon: closure_1_12(TableRowIcon, obj2),
      start: 0 === arg1,
      end: arg1 === channels.length - 1,
      label: obj4.computeChannelName(channels[arg1], UserStore, RelationshipStore),
      labelLineClamp: 1,
      arrow: true,
      onPress() {
        const obj = { channelId: id.id };
        navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
      }
    };
    const TableRow = require("TableRow").TableRow;
    obj2 = { IconComponent: obj3.getChannelIconComponent(channels[arg1]) };
    TableRowIcon = require("TableRowIcon").TableRowIcon;
    obj3 = require("utils/ChannelUtils");
    obj4 = require("useChannelName");
    return closure_1_12(TableRow, obj);
  }, items3);
  let obj2 = { style: tmp.container, children: items4 };
  let obj3 = { style: tmp.searchContainer, children: closure_12(SearchBar, obj4) };
  let tmp14 = closure_13;
  const tmp13 = navigation(stateFromStores[24])();
  obj4 = { placeholder: intl.string(require("intl").t["5h0QOP"]), onChange: tmp8 };
  SearchBar = require("SearchBar").SearchBar;
  intl = require("intl").intl;
  items4 = [closure_12(View, obj3), ];
  const tmp15 = View;
  const tmp5 = navigation;
  if (0 === channels.length) {
    const obj5 = { Illustration: require("generated/NoResults").NoResults, title: intl2.string(require("intl").t.wM7uRI), body: intl3.string(require("intl").t.f5cMAg) };
    const EmptyState = tmp2(tmp3[26]).EmptyState;
    intl2 = tmp2(tmp3[18]).intl;
    intl3 = tmp2(tmp3[18]).intl;
    tmp16Result = tmp16(EmptyState, obj5);
  } else {
    const obj6 = { sections, renderItem: callback, itemSize: tmp11, insetEnd: insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp13, wrapChildren: true };
    tmp16Result = tmp16(tmp5(tmp3[28]), obj6);
  }
  items4[1] = tmp16Result;
  return tmp14(tmp15, obj2);
}));
const result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;
