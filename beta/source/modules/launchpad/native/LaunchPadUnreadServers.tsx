// Module ID: 16799
// Function ID: 16800
// Name: LaunchPadUnreadServers
// Dependencies: [19, 17, 2045, 4851, 1372, 1074, 21, 4836, 576, 6760, 16800, 504, 1177, 10371, 5899, 12604, 4849, 4847, 7293, 15738, 1479, 16805, 1115, 6493, 2]

// Module 16799 (LaunchPadUnreadServers)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import isGuildSelectableDefault from "isGuildSelectable" /* 16805 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
let unpackModuleId;
function HistorySeparator() {
  let obj2;
  const tmp = closure_12();
  const obj = { style: tmp.guildHistorySeparatorWrapper, children: authStore(hasOwnProperty, obj2) };
  obj2 = { style: tmp.guildHistorySeparator };
  return authStore(hasOwnProperty, obj);
}
function renderHistorySection() {
  return authStore(HistorySeparator, {});
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: obj2, privateChannelWrapper: { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" }, privateChannelIcon: { width: 48, height: 48, borderRadius: 24, overflow: "hidden" }, badgeWrapper: { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 }, guildWrapper: { paddingVertical: 2, justifyContent: "center", alignItems: "center" }, guildHistorySeparatorWrapper: { flex: 1, justifyContent: "center", alignItems: "center" }, guildHistorySeparator: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { width: 2, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_12 = createStyles(obj);
let closure_13 = react.memo(function GuildItemInner(guildId) {
  let obj2;
  guildId = guildId.guildId;
  const onGuildSelect = guildId.onGuildSelect;
  const selected = guildId.selected;
  const tmp = closure_12();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = react.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  let obj = { style: tmp.guildWrapper, children: closure_10(onGuildSelect(16800), obj2) };
  const callback1 = react.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guildId);
  }, items1);
  obj2 = { size: 48, borderRadius: 16, guildId, selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  return closure_10(closure_5, obj);
});
let closure_14 = react.memo(function PrivateChannelItemInner(channelId) {
  let items4;
  let items5;
  let obj7;
  let tmp2Result;
  let tmp8;
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_12();
  const tmp2 = channelId;
  let obj = channelId(stateFromStores1[11]);
  let items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(stateFromStores1[11]);
  const items1 = [UserStore];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = obj.isPrivate();
    }
    let user;
    if (isPrivateResult) {
      user = UserStore.getUser(obj.getRecipientId());
    }
    return user;
  });
  const items2 = [ReadStateStore];
  const obj4 = channelId(stateFromStores1[11]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = ReadStateStore.getMentionCount(tmp.id);
    }
    return num;
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      let obj2 = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp2(tmp3[12]).AvatarSizes.LARGE_48 };
      const Avatar = tmp2(tmp3[12]).Avatar;
      tmp8 = closure_10(Avatar, obj2);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp19Result = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: tmp17, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: items4 };
      items4 = [tmp8, ];
      let num = 0;
      let tmp21 = stateFromStores2 > 0;
      const tmp19 = closure_11;
      const tmp20 = closure_4;
      if (tmp21) {
        const obj6 = { style: tmp.badgeWrapper, children: closure_10(stateFromStores(stateFromStores1[18]), obj7) };
        obj7 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        tmp21 = closure_10(closure_5, obj6);
      }
      items4[1] = tmp21;
      tmp19Result = tmp19(tmp20, obj5);
    }
    return tmp19Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj8 = { channel: stateFromStores, size: tmp2(stateFromStores1[12]).AvatarSizes.LARGE_48 };
    const tmp14 = stateFromStores(stateFromStores1[13]);
    tmp8 = closure_10(tmp14, obj8);
  } else if (null != stateFromStores) {
    const obj9 = { style: items5, source: tmp2Result.getChannelIconSource(stateFromStores) };
    items5 = [tmp.privateChannelIcon];
    const tmp11 = stateFromStores(stateFromStores1[14]);
    tmp2Result = tmp2(stateFromStores1[15]);
    tmp8 = closure_10(tmp11, obj9);
  }
});
const memoResult = react.memo(function LaunchPadUnreadServers(selectedGuildId) {
  let items4;
  let items5;
  let tmp13Result;
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  const prop = selectedGuildId.unreadPrivateChannelIds;
  const unreadGuilds = selectedGuildId.unreadGuilds;
  const guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let tmp = closure_12();
  let tmp3 = prop;
  let obj = selectedGuildId(prop[19]);
  const categoryStyles = obj.useCategoryStyles();
  const width = setSelectedGuild(prop[20])().width;
  unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  const onGuildSelect = unreadGuilds.useCallback((arg0) => {
    if (ref.current < 0) {
      if (isGuildSelectableDefault(arg0)) {
        let tmp6;
        const tmp4 = setSelectedGuild;
        if (arg0 !== selectedGuildId) {
          tmp6 = arg0;
        }
        tmp4(tmp6);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(tmp.current);
    ref.current = -1;
    const obj = transitionToGuild;
    obj.transitionToGuild(arg0);
  }, items);
  const effect = unreadGuilds.useEffect(() => () => clearTimeout(ref.current), []);
  const ref = unreadGuilds.useRef(null);
  const items1 = [visible];
  const effect1 = unreadGuilds.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, prop, selectedGuildId, onGuildSelect, guildHistory];
  const items3 = [unreadGuilds.length, prop.length, guildHistory.length];
  const callback1 = unreadGuilds.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        const obj2 = { channelId: prop[arg1] };
        tmp14 = authStore(closure_14, obj2);
      }
      return tmp14;
    } else if (arg0 >= 1) {
      let tmp3;
      if (1 === arg0) {
        tmp3 = unreadGuilds[arg1];
      } else {
        tmp3 = guildHistory[arg1];
      }
      let tmp6 = null != tmp3;
      if (tmp6) {
        const obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect };
        tmp6 = authStore(closure_13, obj);
      }
      return tmp6;
    } else {
      return null;
    }
  }, items2);
  let tmp11 = unreadGuilds.length > 0;
  const callback2 = unreadGuilds.useCallback((arg0) => {
    let num = 0;
    if (2 === arg0) {
      num = 0;
      if (guildHistory.length > 0) {
        if (prop.length > 0) {
          num = 10;
        } else {
          num = 0;
        }
      }
    }
    return num;
  }, items3);
  if (!tmp11) {
    tmp11 = prop.length > 0;
  }
  if (tmp11) {
    let stringResult;
    let obj2 = { style: tmp.listWrapper, children: items4 };
    let tmp14 = visible;
    const renderCategoryItem = tmp2(tmp3[19]).renderCategoryItem;
    selectedGuildId(tmp3[19]);
    const intl = tmp2(tmp3[22]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[22]).t;
    const tmp13 = closure_11;
    if (tmp11) {
      stringResult = string(t.xSY9BH);
    } else {
      stringResult = string(t.kCt2zG);
    }
    const obj3 = { name: stringResult, styles: categoryStyles };
    items4 = [renderCategoryItem(obj3), ];
    const obj4 = { ref, style: tmp.list, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: callback2, sections: items5, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
    items5 = [prop.length, unreadGuilds.length, guildHistory.length];
    items4[1] = closure_10(selectedGuildId(tmp3[23]).AnimatedFastList, obj4);
    tmp13Result = tmp13(tmp14, obj2);
  } else {
    tmp13Result = null;
  }
  return tmp13Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default memoResult;
