// Module ID: 14969
// Function ID: 114113
// Name: getChannelMode
// Dependencies: [29, 31, 27, 4217, 3767, 1849, 653, 1355, 4326, 33, 4130, 689, 4973, 11424, 1392, 5085, 14970, 4633, 4593, 566, 1273, 4574, 14971, 4320, 1198, 2]

// Module 14969 (getChannelMode)
import _objectWithoutProperties from "_objectWithoutProperties";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import set from "get ActivityIndicator";

let closure_13;
let closure_14;
const require = arg1;
function getChannelMode(selected) {
  let channel;
  let unread;
  ({ unread, channel } = selected);
  if (selected.selected) {
    const ChannelModes = require(11424) /* BaseChannelSubtitle */.ChannelModes;
    if (!isGuildVocalResult) {
      const SELECTED = ChannelModes.SELECTED;
    }
    isGuildVocalResult = channel.isGuildVocal();
  } else {
    if (tmp2) {
      let DEFAULT = require(11424) /* BaseChannelSubtitle */.ChannelModes.LOCKED;
    } else if (tmp) {
      DEFAULT = require(11424) /* BaseChannelSubtitle */.ChannelModes.MUTED;
    } else if (unread) {
      if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
        let UNREAD_LESS_IMPORTANT = require(11424) /* BaseChannelSubtitle */.ChannelModes.UNREAD_IMPORTANT;
      } else {
        UNREAD_LESS_IMPORTANT = require(11424) /* BaseChannelSubtitle */.ChannelModes.UNREAD_LESS_IMPORTANT;
      }
    } else {
      DEFAULT = require(11424) /* BaseChannelSubtitle */.ChannelModes.DEFAULT;
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
      obj = importDefault(1392);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = channel);
      obj.applicationId = channel.getApplicationId();
      obj.size = 20;
      const channelIconSource = obj.getChannelIconSource(obj);
      if (null != channelIconSource) {
        const obj1 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return callback2(importDefault(5085), obj1);
      }
    }
    if (tmp2) {
      let tmp11 = importDefault(14970);
      let BookCheckIcon = require(4633) /* BookCheckIcon */.BookCheckIcon;
    } else {
      let obj2 = require(4593) /* getThreadChannelIcon */;
      obj2 = { isRulesChannel: false, locked };
      const channelIcon = obj2.getChannelIcon(channel, obj2);
      let obj4 = require(4593) /* getThreadChannelIcon */;
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
    return callback2(require(11424) /* BaseChannelSubtitle */.BaseChannelIcon, obj4);
  }
}
function DMChannelIcon(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = callback3();
  let obj = userId(566);
  const items = [closure_8];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(userId), items1);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [userId];
  const stateFromStoresObject = userId(566).useStateFromStoresObject(items2, () => ({ status: outer1_6.getStatus(userId), isMobileOnline: outer1_6.isMobileOnline(userId), isVROnline: outer1_6.isVROnline(userId) }), items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { user: stateFromStores, guildId: undefined, size: userId(1273).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline };
  const items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj.statusStyle = items4;
  return closure_13(userId(1273).Avatar, obj);
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const ChannelTypes = ME.ChannelTypes;
const Routes = ME.Routes;
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
let set = new Set(items);
let obj = {};
obj = { tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj.channelIconLive = obj;
obj.dmAvatar = { marginRight: 8 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.avatarStatus = _createForOfIteratorHelperLoose;
obj.groupDmAvatar = { width: 20, height: 20, borderRadius: 10, marginRight: 8 };
obj.channelInfoContainer = { paddingStart: 4 };
obj.avatarStatusSelected = { backgroundColor: require("result").DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { backgroundColor: require("result").DARK_393C42_LIGHT_DEE0E4 };
const result = set.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default importAllResult.memo((channel) => {
  let channelInfo;
  let children;
  let hideIcon;
  let importDefault;
  let isSubscriptionGated;
  let needSubscriptionToAccess;
  let subtitle;
  let textStyle;
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = callback3();
  const tmp2 = callback(channel, closure_3);
  ({ isSubscriptionGated, needSubscriptionToAccess } = importDefault(needSubscriptionToAccess[21])(channel.id));
  const tmp4 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer };
    const items = [channelInfo, ];
    let tmp8 = null;
    if (isSubscriptionGated) {
      obj = { locked: needSubscriptionToAccess };
      tmp8 = callback2(importDefault(needSubscriptionToAccess[22]), obj);
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
  const tmp3 = importDefault(needSubscriptionToAccess[21])(channel.id);
  let tmp14 = tmp4 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT;
  if (!tmp14) {
    tmp14 = tmp4 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  }
  obj.unread = tmp14;
  obj.hideIcon = hideIcon;
  const obj1 = { mode: tmp4 };
  const tmp13 = importDefault(needSubscriptionToAccess[13]);
  obj1.name = channel(needSubscriptionToAccess[23]).computeChannelName(channel, closure_8, closure_7);
  obj1.subtitle = subtitle;
  obj1.textStyle = textStyle;
  obj.name = callback2(channel(needSubscriptionToAccess[13]).BaseChannelName, obj1);
  const obj2 = {};
  const merged = Object.assign(channel);
  obj2["mode"] = tmp4;
  obj.icon = callback2(ChannelIcon, obj2);
  obj.channelInfo = tmp6Result;
  obj.onPress = function onPress(arg0) {
    if (needSubscriptionToAccess) {
      if (outer1_15.has(channel.type)) {
        channel(needSubscriptionToAccess[24]).transitionTo(outer1_10.CHANNEL(channel.guild_id, outer1_11.ROLE_SUBSCRIPTIONS));
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
export { getChannelMode };
