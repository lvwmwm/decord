// Module ID: 14845
// Function ID: 111902
// Name: getChannelMode
// Dependencies: []

// Module 14845 (getChannelMode)
function getChannelMode(selected) {
  let channel;
  let unread;
  ({ unread, channel } = selected);
  if (selected.selected) {
    const ChannelModes = arg1(dependencyMap[13]).ChannelModes;
    if (!isGuildVocalResult) {
      const SELECTED = ChannelModes.SELECTED;
    }
    const isGuildVocalResult = channel.isGuildVocal();
  } else {
    if (tmp2) {
      let DEFAULT = arg1(dependencyMap[13]).ChannelModes.LOCKED;
    } else if (tmp) {
      DEFAULT = arg1(dependencyMap[13]).ChannelModes.MUTED;
    } else if (unread) {
      if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
        let UNREAD_LESS_IMPORTANT = arg1(dependencyMap[13]).ChannelModes.UNREAD_IMPORTANT;
      } else {
        UNREAD_LESS_IMPORTANT = arg1(dependencyMap[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
      }
    } else {
      DEFAULT = arg1(dependencyMap[13]).ChannelModes.DEFAULT;
    }
    return DEFAULT;
  }
}
function ChannelIcon(arg0) {
  let channel;
  let isChannelLive;
  let locked;
  let selected;
  const tmp = callback3();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    let obj = { userId: channel.getRecipientId(), selected: null != selected && selected };
    return callback2(DMChannelIcon, obj);
  } else {
    if (channel.type === ChannelTypes.GROUP_DM) {
      obj = importDefault(dependencyMap[14]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = channel);
      obj.applicationId = channel.getApplicationId();
      obj.size = 20;
      const channelIconSource = obj.getChannelIconSource(obj);
      if (null != channelIconSource) {
        const obj1 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return callback2(importDefault(dependencyMap[15]), obj1);
      }
    }
    if (tmp2) {
      let tmp11 = importDefault(dependencyMap[16]);
      let BookCheckIcon = arg1(dependencyMap[17]).BookCheckIcon;
    } else {
      let obj2 = arg1(dependencyMap[18]);
      obj2 = { isRulesChannel: false, locked };
      const channelIcon = obj2.getChannelIcon(channel, obj2);
      let obj4 = arg1(dependencyMap[18]);
      const obj3 = { isRulesChannel: false, locked };
      BookCheckIcon = obj4.getChannelIconComponent(channel, obj3);
      tmp11 = channelIcon;
    }
    obj4 = { mode: tmp3, source: tmp11, isChannelLive };
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    obj4.style = channelIconLive;
    if (null != BookCheckIcon) {
      const obj5 = { IconComponent: BookCheckIcon };
      let obj6 = obj5;
    } else {
      obj6 = {};
    }
    const merged = Object.assign(obj6);
    return callback2(arg1(dependencyMap[13]).BaseChannelIcon, obj4);
  }
}
function DMChannelIcon(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  userId = userId.userId;
  const arg1 = userId;
  let avatarStatusSelected = userId.selected;
  const tmp = callback3();
  let obj = arg1(dependencyMap[19]);
  const items = [closure_8];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId), items1);
  const items2 = [closure_6];
  const items3 = [userId];
  const stateFromStoresObject = arg1(dependencyMap[19]).useStateFromStoresObject(items2, () => ({ status: closure_6.getStatus(userId), isMobileOnline: closure_6.isMobileOnline(userId), isVROnline: closure_6.isVROnline(userId) }), items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { user: stateFromStores, guildId: undefined, size: arg1(dependencyMap[20]).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline };
  const items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj.statusStyle = items4;
  return closure_13(arg1(dependencyMap[20]).Avatar, obj);
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
const ChannelTypes = tmp2.ChannelTypes;
const Routes = tmp2.Routes;
const StaticChannelRoute = arg1(dependencyMap[7]).StaticChannelRoute;
const UnreadSetting = arg1(dependencyMap[8]).UnreadSetting;
const importAllResult = importAll(dependencyMap[1]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
const items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = { tintColor: importDefault(dependencyMap[11]).unsafe_rawColors.GREEN_360 };
obj.channelIconLive = obj;
obj.dmAvatar = { marginRight: 8 };
obj1 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj.avatarStatus = obj1;
obj.groupDmAvatar = {};
obj.channelInfoContainer = { paddingStart: 4 };
const tmp3 = arg1(dependencyMap[9]);
obj.avatarStatusSelected = { backgroundColor: arg1(dependencyMap[12]).DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = obj1.createStyles(obj);
const obj2 = { backgroundColor: arg1(dependencyMap[12]).DARK_393C42_LIGHT_DEE0E4 };
const memoResult = importAllResult.memo((channel) => {
  let channelInfo;
  let children;
  let hideIcon;
  let isSubscriptionGated;
  let needSubscriptionToAccess;
  let subtitle;
  let textStyle;
  channel = channel.channel;
  const arg1 = channel;
  ({ channelInfo, onPress: closure_1 } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = callback3();
  const tmp2 = callback(channel, closure_3);
  ({ isSubscriptionGated, needSubscriptionToAccess } = importDefault(dependencyMap[21])(channel.id));
  const dependencyMap = needSubscriptionToAccess;
  const tmp4 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer };
    const items = [channelInfo, ];
    let tmp8 = null;
    if (isSubscriptionGated) {
      obj = { locked: needSubscriptionToAccess };
      tmp8 = callback2(importDefault(dependencyMap[22]), obj);
    }
    items[1] = tmp8;
    obj.children = items;
    let tmp6Result = closure_14(View, obj);
    const tmp6 = closure_14;
    const tmp7 = View;
  } else {
    tmp6Result = null;
  }
  obj = { mode: tmp4 };
  const tmp12 = callback2;
  const tmp3 = importDefault(dependencyMap[21])(channel.id);
  let tmp14 = tmp4 === arg1(dependencyMap[13]).ChannelModes.UNREAD_IMPORTANT;
  if (!tmp14) {
    tmp14 = tmp4 === arg1(dependencyMap[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  }
  obj.unread = tmp14;
  obj.hideIcon = hideIcon;
  const obj1 = { mode: tmp4 };
  const tmp13 = importDefault(dependencyMap[13]);
  obj1.name = arg1(dependencyMap[23]).computeChannelName(channel, closure_8, closure_7);
  obj1.subtitle = subtitle;
  obj1.textStyle = textStyle;
  obj.name = callback2(arg1(dependencyMap[13]).BaseChannelName, obj1);
  const obj2 = {};
  const merged = Object.assign(channel);
  obj2["mode"] = tmp4;
  obj.icon = callback2(ChannelIcon, obj2);
  obj.channelInfo = tmp6Result;
  obj.onPress = function onPress(arg0) {
    if (needSubscriptionToAccess) {
      if (set.has(channel.type)) {
        channel(needSubscriptionToAccess[24]).transitionTo(closure_10.CHANNEL(channel.guild_id, constants.ROLE_SUBSCRIPTIONS));
        const obj = channel(needSubscriptionToAccess[24]);
      }
    }
    if (null != callback) {
      callback(arg0);
    }
  };
  const merged1 = Object.assign(tmp2);
  obj["children"] = children;
  return tmp12(tmp13, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default memoResult;
export { getChannelMode };
