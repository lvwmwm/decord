// Module ID: 16557
// Function ID: 16558
// Name: ChannelNameHeader
// Dependencies: [19, 17, 2045, 2067, 4469, 4876, 1372, 1074, 21, 4836, 576, 504, 1177, 4989, 1485, 4847, 5435, 4832, 1115, 4981, 3651, 10371, 5335, 10357, 6583, 7624, 2]

// Module 16557 (ChannelNameHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import _modDef3651 from "module_3651" /* 3651 */;
import Text_Text from "Text/Text" /* 4832 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let c10;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function DirectMessageIcon(channel) {
  let tmp11;
  channel = channel.channel;
  const tmp = closure_15();
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const items1 = [PresenceStore];
  const items2 = [stateFromStores];
  const obj3 = channel(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let UNKNOWN;
    let isVROnlineResult;
    const obj = { isMobileOnline: null != stateFromStores && PresenceStore.isMobileOnline(tmp.id), isVROnline: isVROnlineResult, status: UNKNOWN };
    isVROnlineResult = null != tmp && PresenceStore.isVROnline(tmp.id);
    if (null != stateFromStores) {
      UNKNOWN = PresenceStore.getStatus(tmp.id);
    } else {
      UNKNOWN = unpackModuleId.UNKNOWN;
    }
    return obj;
  }, items2);
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj2 = { avatarDecoration: stateFromStores.avatarDecoration, user: stateFromStores, guildId: "Boolean", size: channel(1177).AvatarSizes.NORMAL, status: tmp11, isMobileOnline: tmp5, isVROnline: tmp6, statusStyle: tmp.statusStyle };
    const Avatar = tmp2(1177).Avatar;
    let isSystemUserResult;
    const tmp9 = closure_12;
    if (stateFromStores != null) {
      isSystemUserResult = stateFromStores.isSystemUser();
    }
    tmp11 = null;
    if (!isSystemUserResult) {
      tmp11 = tmp7;
    }
    tmp9Result = tmp9(Avatar, obj2);
  }
  return tmp9Result;
}
function ThreadParentChannelLink(channel) {
  let Text;
  let children;
  let intl;
  let obj3;
  let obj4;
  channel = channel.channel;
  importDefault = undefined;
  navigation = undefined;
  const tmp = require("useChannelName")(channel, true);
  importDefault = tmp;
  let obj = channel(navigation[14]);
  navigation = obj.useNavigation();
  const items = [channel.id, navigation];
  const callback = react.useCallback(() => {
    navigation.goBack();
    const obj = transitionToChannel;
    obj.transitionToChannel(channel.id, { navigationReplace: true });
  }, items);
  const obj2 = { onPress: callback, children: closure_12(Text, obj3) };
  const PressableOpacity = channel(navigation[16]).PressableOpacity;
  obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, children: intl.format(channel(navigation[18]).t.YbkB3U, obj4) };
  Text = channel(navigation[17]).Text;
  intl = channel(navigation[18]).intl;
  obj4 = {
    channelName: tmp,
    channelNameHook() {
      const obj = { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children };
      return closure_12(Text_Text.Text, obj);
    }
  };
  return closure_12(PressableOpacity, obj2);
}
function ChannelSubtitle(channel) {
  channel = channel.channel;
  let tmp = channel;
  let obj = channel(504);
  const items = [UserStore];
  const items1 = [channel];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let privateChannelUserTagsString = null;
    const tmp = channel;
    if (channel.isPrivate()) {
      const obj = ChannelUtils;
      privateChannelUserTagsString = obj.getPrivateChannelUserTagsString(tmp.recipients, UserStore);
    }
    return privateChannelUserTagsString;
  }, items1);
  if (!channel.isPrivate()) {
    let stringResult;
    if (channel.isGameInvitesChannel()) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(_modDef3651["D+2/QP"]);
    } else {
      const tmpResult = tmp(4981);
      stringResult = tmpResult.channelTypeString(channel);
    }
    stateFromStores = stringResult;
  }
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if ("" !== stateFromStores) {
      const obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: stateFromStores };
      tmp6 = closure_12(tmp(4832).Text, obj2);
    }
  }
  return tmp6;
}
function ChannelNameHeaderContent(channel) {
  let closure_1;
  let items9;
  let tmp13Result;
  channel = channel.channel;
  let stateFromStores;
  let tmp = closure_15();
  importDefault = tmp;
  let tmp3 = stateFromStores;
  let tmp2 = importDefault;
  const tmp4 = require("useChannelName")(channel);
  let tmp5 = channel;
  let obj = channel(stateFromStores[11]);
  let items = [ChannelStore];
  const items1 = [channel];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = channel;
    channel = null;
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(tmp.parent_id);
    }
    return channel;
  }, items1);
  let obj2 = channel(stateFromStores[11]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.VIEW_CHANNEL, tmp);
    return canResult;
  }, items3);
  let obj3 = channel(stateFromStores[11]);
  const items4 = [GuildStore];
  const items5 = [, ];
  ({ id: arr6[0], guild_id: arr6[1] } = channel);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    const tmp = channel;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId === tmp.id;
  }, items5);
  const items6 = [channel, stateFromStores, stateFromStores1];
  const items7 = [channel, stateFromStores2, tmp];
  const memo = stateFromStores1.useMemo(() => {
    if (null != stateFromStores) {
      let tmp3;
      const tmp2 = stateFromStores1;
      if (tmp2) {
        const obj2 = { channel: tmp };
        tmp3 = closure_12(ThreadParentChannelLink, obj2);
      }
      return tmp3;
    }
    const obj = { channel };
    tmp3 = closure_12(ChannelSubtitle, obj);
  }, items6);
  const items8 = [
    stateFromStores1.useMemo(() => {
      let items;
      let obj4;
      let obj6;
      let tmp16;
      if (channel.isDM()) {
        const obj3 = { style: closure_1.channelIcon, children: closure_12(DirectMessageIcon, obj4) };
        obj4 = { channel };
        return closure_12(View, obj3);
      } else if (channel.isGroupDM()) {
        const obj5 = { style: closure_1.channelIcon, children: closure_12(tmp16, obj6) };
        obj6 = { channel, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
        tmp16 = GroupDMAvatarDefault;
        return closure_12(View, obj5);
      } else {
        const obj7 = { isRulesChannel: stateFromStores2 };
        const obj2 = utils_ChannelUtils;
        const channelIconComponent = obj2.getChannelIconComponent(obj, obj7);
        let tmp5 = null;
        if (null != channelIconComponent) {
          const obj8 = { style: items, children: closure_12(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" }) };
          items = [, ];
          ({ channelIcon: arr[0], channelTypeBox: arr[1] } = closure_1);
          tmp5 = closure_12(View, obj8);
        }
        return tmp5;
      }
    }, items7),

  ];
  let obj4 = { style: tmp.channelData, children: items9 };
  const tmp11 = closure_14;
  const tmp12 = stateFromStores2;
  if (channel.isDM()) {
    let obj5 = { userId: channel.getRecipientId(), guildId: channel.guild_id, userName: tmp4, variant: "redesign/heading-18/bold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail" };
    const tmp2Result = tmp2(tmp3[23]);
    tmp13Result = tmp13(tmp2Result, obj5);
  } else {
    let obj6 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: tmp4 };
    tmp13Result = tmp13(tmp5(tmp3[17]).Text, obj6);
  }
  let obj7 = { children: items8 };
  items9 = [tmp13Result, memo];
  items8[1] = closure_13(tmp12, obj4);
  return closure_13(tmp11, obj7);
}
function DMChannelNameHeader(channel) {
  let items1;
  channel = channel.channel;
  let analyticsLocations;
  const containerStyle = channel.containerStyle;
  let tmp = closure_15();
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  const items = [channel, analyticsLocations];
  const callback = react.useCallback(() => {
    const recipientId = channel.getRecipientId();
    const tmp = channel;
    if (null != recipientId) {
      const obj = { userId: recipientId, channelId: tmp.id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  let obj = { style: items1, onPress: callback, children: closure_12(ChannelNameHeaderContent, { channel }) };
  items1 = [tmp.container, containerStyle];
  const PressableOpacity = channel(5435).PressableOpacity;
  return closure_12(PressableOpacity, obj);
}
function DefaultChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  let items;
  ({ channel, containerStyle } = arg0);
  const obj = { style: items, children: closure_12(ChannelNameHeaderContent, { channel }) };
  items = [closure_15().container, containerStyle];
  return closure_12(View, obj);
}
const View = react_native.View;
({ Permissions: c10, StatusTypes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, channelIcon: { height: 40, width: 40, justifyContent: "center", alignItems: "center" }, channelTypeBox: obj3, channelData: { flex: 1 }, statusStyle: obj4 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS, borderWidth: nativeDefault.modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function ChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  let tmpResult;
  ({ channel, containerStyle } = arg0);
  if (channel.isDM()) {
    const obj2 = { channel, containerStyle };
    tmpResult = tmp(DMChannelNameHeader, obj2);
  } else {
    const obj = { channel, containerStyle };
    tmpResult = tmp(DefaultChannelNameHeader, obj);
  }
  return tmpResult;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx");

export default memoResult;
