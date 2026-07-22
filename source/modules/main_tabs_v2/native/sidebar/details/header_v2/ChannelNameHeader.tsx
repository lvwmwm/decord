// Module ID: 15305
// Function ID: 116377
// Name: DirectMessageIcon
// Dependencies: []

// Module 15305 (DirectMessageIcon)
function DirectMessageIcon(channel) {
  const arg1 = channel.channel;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(channel.getRecipientId()));
  const importDefault = stateFromStores;
  const tmp = callback2();
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items1, () => {
    const obj = {};
    let isMobileOnlineResult = null != stateFromStores;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = closure_8.isMobileOnline(stateFromStores.id);
    }
    obj.isMobileOnline = isMobileOnlineResult;
    let isVROnlineResult = null != stateFromStores;
    if (isVROnlineResult) {
      isVROnlineResult = closure_8.isVROnline(stateFromStores.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores) {
      let UNKNOWN = closure_8.getStatus(stateFromStores.id);
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  }, items2);
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { avatarDecoration: stateFromStores.avatarDecoration, user: stateFromStores, guildId: undefined, size: arg1(dependencyMap[12]).AvatarSizes.NORMAL };
    if (null == stateFromStores) {
      let tmp10 = tmp5;
    } else {
      tmp10 = null;
    }
    obj.status = tmp10;
    obj.isMobileOnline = tmp3;
    obj.isVROnline = tmp4;
    obj.statusStyle = tmp.statusStyle;
    tmp7Result = closure_12(arg1(dependencyMap[12]).Avatar, obj);
    const tmp7 = closure_12;
  }
  return tmp7Result;
}
function ThreadParentChannelLink(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = importDefault(dependencyMap[13])(channel, true);
  const importDefault = tmp;
  let obj = arg1(dependencyMap[14]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const items = [channel.id, navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
    channel(navigation[15]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items);
  obj = { onPress: callback };
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.children = intl.format(arg1(dependencyMap[18]).t.YbkB3U, {
    channelName: tmp,
    channelNameHook() {
      return callback(channel(navigation[17]).Text, { children: tmp });
    }
  });
  obj.children = callback(arg1(dependencyMap[17]).Text, obj);
  return callback(arg1(dependencyMap[16]).PressableOpacity, obj);
}
function ChannelSubtitle(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_9];
  const items1 = [channel];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let privateChannelUserTagsString = null;
    if (channel.isPrivate()) {
      privateChannelUserTagsString = channel(closure_2[19]).getPrivateChannelUserTagsString(channel.recipients, closure_9);
      const obj = channel(closure_2[19]);
    }
    return privateChannelUserTagsString;
  }, items1);
  if (!channel.isPrivate()) {
    stateFromStores = arg1(dependencyMap[19]).channelTypeString(channel);
    const obj2 = arg1(dependencyMap[19]);
  }
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if ("" !== stateFromStores) {
      obj = { children: stateFromStores };
      tmp4 = callback(arg1(dependencyMap[17]).Text, obj);
    }
  }
  return tmp4;
}
function ChannelNameHeaderContent(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback2();
  const importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[13])(channel);
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (channel.isThread()) {
      channel = channel.getChannel(channel.parent_id);
    }
    return channel;
  }, items1);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const items2 = [closure_7];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_7.can(constants.VIEW_CHANNEL, stateFromStores);
    }
    return canResult;
  }, items3);
  let obj2 = arg1(dependencyMap[11]);
  const items4 = [closure_6];
  const items5 = [, ];
  ({ id: arr6[0], guild_id: arr6[1] } = channel);
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    const guild = guild.getGuild(channel.guild_id);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId === channel.id;
  }, items5);
  const View = stateFromStores2;
  const items6 = [channel, stateFromStores, stateFromStores1];
  const items7 = [channel, stateFromStores2, tmp];
  const memo = importAllResult.useMemo(() => {
    if (null != stateFromStores) {
      if (stateFromStores1) {
        let obj = { channel: stateFromStores };
        let tmp2 = callback(closure_17, obj);
      }
      return tmp2;
    }
    obj = { channel };
    tmp2 = callback(closure_18, obj);
  }, items6);
  obj = {};
  const items8 = [
    stateFromStores1.useMemo(() => {
      if (channel.isDM()) {
        let obj = { style: tmp.channelIcon };
        obj = { channel };
        obj.children = callback(closure_16, obj);
        return callback(stateFromStores2, obj);
      } else if (channel.isGroupDM()) {
        const obj1 = { style: tmp.channelIcon };
        const obj2 = { channel, size: channel(stateFromStores[12]).AvatarSizes.REFRESH_MEDIUM_32 };
        obj1.children = callback(tmp(stateFromStores[20]), obj2);
        return callback(stateFromStores2, obj1);
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
          obj4.children = callback(channelIconComponent, { "Bool(false)": "useRef", "Bool(false)": "values" });
          tmp7 = callback(stateFromStores2, obj4);
        }
        return tmp7;
      }
    }, items7),

  ];
  obj = { style: tmp.channelData };
  if (channel.isDM()) {
    obj1 = { userId: channel.getRecipientId(), guildId: channel.guild_id, userName: tmp2 };
    let tmp11Result = tmp11(importDefault(dependencyMap[22]), obj1);
    const tmp17 = importDefault(dependencyMap[22]);
  } else {
    obj2 = { padding: null, x: null, jsx: null, flexDirection: null, children: tmp2 };
    tmp11Result = tmp11(arg1(dependencyMap[17]).Text, obj2);
  }
  const items9 = [tmp11Result, memo];
  obj.children = items9;
  items8[1] = closure_13(View, obj);
  obj.children = items8;
  return closure_13(closure_14, obj);
}
function DMChannelNameHeader(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const analyticsLocations = importDefault(dependencyMap[23])().analyticsLocations;
  const importDefault = analyticsLocations;
  const items = [channel, analyticsLocations];
  const callback = importAllResult.useCallback(() => {
    const recipientId = channel.getRecipientId();
    if (null != recipientId) {
      const obj = { userId: recipientId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      analyticsLocations(closure_2[24])(obj);
    }
  }, items);
  const obj = { style: items1, onPress: callback };
  const items1 = [callback2().container, channel.containerStyle];
  obj.children = callback(ChannelNameHeaderContent, { channel });
  return callback(arg1(dependencyMap[16]).PressableOpacity, obj);
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
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ Permissions: closure_10, StatusTypes: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { -2108412530: "text-lg/normal", -266912356: "text-default", 1638363508: true, gap: importDefault(dependencyMap[10]).space.PX_12 };
obj.container = obj;
obj.channelIcon = { milliseconds: "r", months: "isArray", marginTop: "y", width: "title" };
obj1 = { borderRadius: importDefault(dependencyMap[10]).modules.mobile.CHANNEL_NAME_CHANNEL_ICON_RADIUS, borderWidth: importDefault(dependencyMap[10]).modules.mobile.CHANNEL_NAME_CHANNEL_BORDER_WIDTH, borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
obj.channelTypeBox = obj1;
obj.channelData = { flex: 1 };
const tmp3 = arg1(dependencyMap[8]);
obj.statusStyle = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER };
let closure_15 = obj1.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER };
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
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelNameHeader.tsx");

export default memoResult;
