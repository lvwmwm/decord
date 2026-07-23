// Module ID: 15422
// Function ID: 118551
// Name: DirectMessageIcon
// Dependencies: [31, 27, 1348, 1838, 3758, 4217, 1849, 653, 33, 4130, 689, 566, 1273, 4320, 1456, 4138, 4660, 4126, 1212, 4312, 9096, 4593, 8513, 5464, 8492, 2]

// Module 15422 (DirectMessageIcon)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function DirectMessageIcon(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUser(channel.getRecipientId()));
  const tmp = callback2();
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  const stateFromStoresObject = channel(566).useStateFromStoresObject(items1, () => {
    const obj = {};
    let isMobileOnlineResult = null != stateFromStores;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = outer1_8.isMobileOnline(stateFromStores.id);
    }
    obj.isMobileOnline = isMobileOnlineResult;
    let isVROnlineResult = null != stateFromStores;
    if (isVROnlineResult) {
      isVROnlineResult = outer1_8.isVROnline(stateFromStores.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores) {
      let UNKNOWN = outer1_8.getStatus(stateFromStores.id);
    } else {
      UNKNOWN = outer1_11.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  }, items2);
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { avatarDecoration: stateFromStores.avatarDecoration, user: stateFromStores, guildId: undefined, size: channel(1273).AvatarSizes.NORMAL };
    if (null == stateFromStores) {
      let tmp10 = tmp5;
    } else {
      tmp10 = null;
    }
    obj.status = tmp10;
    obj.isMobileOnline = tmp3;
    obj.isVROnline = tmp4;
    obj.statusStyle = tmp.statusStyle;
    tmp7Result = closure_12(channel(1273).Avatar, obj);
    const tmp7 = closure_12;
  }
  return tmp7Result;
}
function ThreadParentChannelLink(channel) {
  channel = channel.channel;
  const tmp = importDefault(navigation[13])(channel, true);
  importDefault = tmp;
  let obj = channel(navigation[14]);
  navigation = obj.useNavigation();
  const items = [channel.id, navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(navigation[15]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items);
  obj = { onPress: callback };
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1 };
  const intl = channel(navigation[18]).intl;
  obj.children = intl.format(channel(navigation[18]).t.YbkB3U, {
    channelName: tmp,
    channelNameHook() {
      const obj = { variant: "text-sm/medium", color: "text-brand", lineClamp: 1, children: closure_1 };
      return outer1_12(channel(navigation[17]).Text, obj);
    }
  });
  obj.children = callback(channel(navigation[17]).Text, obj);
  return callback(channel(navigation[16]).PressableOpacity, obj);
}
function ChannelSubtitle(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [closure_9];
  const items1 = [channel];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let privateChannelUserTagsString = null;
    if (channel.isPrivate()) {
      privateChannelUserTagsString = channel(outer1_2[19]).getPrivateChannelUserTagsString(channel.recipients, outer1_9);
      const obj = channel(outer1_2[19]);
    }
    return privateChannelUserTagsString;
  }, items1);
  if (!channel.isPrivate()) {
    stateFromStores = channel(4312).channelTypeString(channel);
    const obj2 = channel(4312);
  }
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if ("" !== stateFromStores) {
      obj = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: stateFromStores };
      tmp4 = callback(channel(4126).Text, obj);
    }
  }
  return tmp4;
}
function ChannelNameHeaderContent(channel) {
  channel = channel.channel;
  const tmp = callback2();
  const importDefault = tmp;
  let tmp2 = importDefault(stateFromStores[13])(channel);
  let obj = channel(stateFromStores[11]);
  let items = [_isNativeReflectConstruct];
  const items1 = [channel];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (channel.isThread()) {
      channel = outer1_5.getChannel(channel.parent_id);
    }
    return channel;
  }, items1);
  let obj1 = channel(stateFromStores[11]);
  const items2 = [closure_7];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_7.can(outer1_10.VIEW_CHANNEL, stateFromStores);
    }
    return canResult;
  }, items3);
  let obj2 = channel(stateFromStores[11]);
  const items4 = [closure_6];
  const items5 = [, ];
  ({ id: arr6[0], guild_id: arr6[1] } = channel);
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    const guild = outer1_6.getGuild(channel.guild_id);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId === channel.id;
  }, items5);
  const items6 = [channel, stateFromStores, stateFromStores1];
  const items7 = [channel, stateFromStores2, tmp];
  const memo = stateFromStores1.useMemo(() => {
    if (null != stateFromStores) {
      if (stateFromStores1) {
        let obj = { channel: stateFromStores };
        let tmp2 = outer1_12(outer1_17, obj);
      }
      return tmp2;
    }
    obj = { channel };
    tmp2 = outer1_12(outer1_18, obj);
  }, items6);
  obj = {};
  const items8 = [
    stateFromStores1.useMemo(() => {
      if (channel.isDM()) {
        let obj = { style: tmp.channelIcon };
        obj = { channel };
        obj.children = outer1_12(outer1_16, obj);
        return outer1_12(stateFromStores2, obj);
      } else if (channel.isGroupDM()) {
        const obj1 = { style: tmp.channelIcon };
        const obj2 = { channel, size: channel(stateFromStores[12]).AvatarSizes.REFRESH_MEDIUM_32 };
        obj1.children = outer1_12(tmp(stateFromStores[20]), obj2);
        return outer1_12(stateFromStores2, obj1);
      } else {
        obj = channel(stateFromStores[21]);
        const obj3 = { isRulesChannel: stateFromStores2 };
        const channelIconComponent = obj.getChannelIconComponent(channel, obj3);
        let tmp7 = null;
        if (null != channelIconComponent) {
          const obj4 = {};
          const items = [, ];
          ({ channelIcon: arr[0], channelTypeBox: arr[1] } = tmp);
          obj4.style = items;
          obj4.children = outer1_12(channelIconComponent, { size: "md", color: "mobile-text-heading-primary" });
          tmp7 = outer1_12(stateFromStores2, obj4);
        }
        return tmp7;
      }
    }, items7),

  ];
  obj = { style: tmp.channelData };
  if (channel.isDM()) {
    obj1 = { userId: channel.getRecipientId(), guildId: channel.guild_id, userName: tmp2, variant: "redesign/heading-18/bold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail" };
    let tmp11Result = tmp11(importDefault(stateFromStores[22]), obj1);
    const tmp17 = importDefault(stateFromStores[22]);
  } else {
    obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: tmp2 };
    tmp11Result = tmp11(channel(stateFromStores[17]).Text, obj2);
  }
  const items9 = [tmp11Result, memo];
  obj.children = items9;
  items8[1] = closure_13(stateFromStores2, obj);
  obj.children = items8;
  return closure_13(closure_14, obj);
}
function DMChannelNameHeader(channel) {
  channel = channel.channel;
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  const items = [channel, analyticsLocations];
  const callback = importAllResult.useCallback(() => {
    const recipientId = channel.getRecipientId();
    if (null != recipientId) {
      const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      analyticsLocations(outer1_2[24])(obj);
    }
  }, items);
  let obj = { style: items1, onPress: callback };
  items1 = [callback2().container, channel.containerStyle];
  obj.children = callback(ChannelNameHeaderContent, { channel });
  return callback(channel(4660).PressableOpacity, obj);
}
function DefaultChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  ({ channel, containerStyle } = arg0);
  const obj = {};
  const items = [callback2().container, containerStyle];
  obj.style = items;
  obj.children = callback(ChannelNameHeaderContent, { channel });
  return callback(View, obj);
}
({ Permissions: closure_10, StatusTypes: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
obj.container = obj;
obj.channelIcon = { height: 40, width: 40, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
obj.channelTypeBox = _createForOfIteratorHelperLoose;
obj.channelData = { flex: 1 };
obj.statusStyle = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const memoResult = importAllResult.memo(function ChannelNameHeader(arg0) {
  let channel;
  let containerStyle;
  ({ channel, containerStyle } = arg0);
  if (channel.isDM()) {
    let obj = { channel, containerStyle };
    let tmpResult = tmp(DMChannelNameHeader, obj);
  } else {
    obj = { channel, containerStyle };
    tmpResult = tmp(DefaultChannelNameHeader, obj);
  }
  return tmpResult;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx");

export default memoResult;
