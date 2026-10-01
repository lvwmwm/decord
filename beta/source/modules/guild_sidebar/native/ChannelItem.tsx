// Module ID: 15748
// Function ID: 15749
// Name: ChannelItem
// Dependencies: [109, 19, 17, 4876, 4479, 1372, 1074, 2052, 5018, 21, 4836, 576, 5753, 11868, 1397, 5899, 15749, 5389, 5335, 504, 1177, 5314, 15750, 4989, 1101, 2]

// Module 15748 (ChannelItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import BookCheckIcon2 from "BookCheckIcon" /* 5389 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import BaseChannelItem from "BaseChannelItem" /* 11868 */;
import AssetRegistryDefault from "AssetRegistry" /* 15749 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
function getChannelMode(selected) {
  let DEFAULT;
  let channel;
  let unread;
  ({ unread, channel } = selected);
  if (selected.selected) {
    let SELECTED;
    const isGuildVocalResult = channel.isGuildVocal();
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (isGuildVocalResult) {
      SELECTED = unread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.RELEVANT;
    } else {
      SELECTED = ChannelModes.SELECTED;
    }
    DEFAULT = SELECTED;
  } else if (tmp2) {
    DEFAULT = BaseChannelItem.ChannelModes.LOCKED;
  } else if (tmp) {
    DEFAULT = BaseChannelItem.ChannelModes.MUTED;
  } else if (unread) {
    let UNREAD_LESS_IMPORTANT;
    if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
      UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_IMPORTANT;
    } else {
      UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_LESS_IMPORTANT;
    }
    DEFAULT = UNREAD_LESS_IMPORTANT;
  } else {
    DEFAULT = BaseChannelItem.ChannelModes.DEFAULT;
  }
  return DEFAULT;
}
function ChannelIcon(arg0) {
  let channel;
  let channelIconLive;
  let isChannelLive;
  let locked;
  let selected;
  const tmp = closure_16();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    const obj3 = { userId: channel.getRecipientId(), selected };
    const tmp24 = map1;
    const tmp25 = DMChannelIcon;
    if (selected == null) {
      selected = false;
    }
    return tmp24(tmp25, obj3);
  } else {
    let tmp13;
    let BookCheckIcon;
    let tmp10;
    let obj10;
    if (channel.type === tmp4.GROUP_DM) {
      const obj = { id: null, icon: null, applicationId: channel.getApplicationId(), size: 20 };
      ({ id: obj.id, icon: obj.icon } = channel);
      const getChannelIconSource = AvatarUtilsDefault.getChannelIconSource;
      AvatarUtilsDefault;
      const channelIconSource = getChannelIconSource(obj);
      const tmp5 = importDefault;
      if (null != channelIconSource) {
        const obj5 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return map1(tmp5(5899), obj5);
      }
    }
    if (tmp2) {
      tmp13 = AssetRegistryDefault;
      BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      tmp10 = require;
    } else {
      tmp10 = require;
      const obj6 = { isRulesChannel: false, locked };
      const obj2 = utils_ChannelUtils;
      const channelIcon = obj2.getChannelIcon(channel, obj6);
      const obj7 = { isRulesChannel: false, locked };
      const obj4 = utils_ChannelUtils;
      BookCheckIcon = obj4.getChannelIconComponent(channel, obj7);
      tmp13 = channelIcon;
    }
    const obj8 = { mode: tmp3, source: tmp13, isChannelLive, style: channelIconLive };
    channelIconLive = undefined;
    const BaseChannelIcon = tmp10(11868).BaseChannelIcon;
    const tmp17 = map1;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    if (null != BookCheckIcon) {
      obj10 = { IconComponent: BookCheckIcon };
      const obj9 = { IconComponent: BookCheckIcon };
    } else {
      obj10 = {};
    }
    const merged = Object.assign(obj10);
    return tmp17(BaseChannelIcon, obj8);
  }
}
function DMChannelIcon(userId) {
  let isMobileOnline;
  let isVROnline;
  let items4;
  let status;
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = closure_16();
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [PresenceStore];
  const items3 = [userId];
  const obj2 = userId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) };
    return obj;
  }, items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { user: stateFromStores, guildId: "o", size: userId(1177).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: items4 };
  const Avatar = userId(1177).Avatar;
  items4 = [tmp.avatarStatus, ];
  const tmp4 = closure_13;
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  return tmp4(Avatar, obj3);
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const View = react_native.View;
const ChannelTypes = Constants.ChannelTypes;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = { channelIconLive: obj2, dmAvatar: { marginRight: 8 }, avatarStatus: obj3, groupDmAvatar: { width: 20, height: 20, borderRadius: 10, marginRight: 8 }, channelInfoContainer: { paddingStart: 4 }, avatarStatusSelected: obj4 };
obj2 = { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { backgroundColor: LegacyTokens.DARK_393C42_LIGHT_DEE0E4 };
let closure_16 = createStyles(obj);
const memoResult = react.memo((channel) => {
  let BaseChannelName;
  let channelInfo;
  let children;
  let hideIcon;
  let isSubscriptionGated;
  let items;
  let needSubscriptionToAccess;
  let obj4;
  let obj5;
  let subtitle;
  let textStyle;
  let tmp14Result;
  let tmp8Result;
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  let tmp = closure_16();
  ({ subtitle, hideIcon, children, textStyle } = channel);
  let tmp3 = importDefault;
  const tmp4 = needSubscriptionToAccess;
  const tmp2 = _objectWithoutProperties(channel, closure_3);
  const tmp5 = require("useChannelRoleSubscriptionStatus")(channel.id);
  ({ isSubscriptionGated, needSubscriptionToAccess } = tmp5);
  const tmp6 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer, children: items };
    items = [channelInfo, ];
    let tmp10 = null;
    const tmp8 = closure_14;
    const tmp9 = View;
    if (isSubscriptionGated) {
      const obj2 = { locked: needSubscriptionToAccess };
      tmp10 = closure_13(tmp3(tmp4[22]), obj2);
    }
    items[1] = tmp10;
    tmp8Result = tmp8(tmp9, obj);
  } else {
    tmp8Result = null;
  }
  const obj3 = {
    mode: tmp6,
    unread: tmp6 === channel(tmp4[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(tmp4[13]).ChannelModes.UNREAD_LESS_IMPORTANT,
    hideIcon,
    name: closure_13(BaseChannelName, obj4),
    icon: closure_13(ChannelIcon, obj5),
    channelInfo: tmp8Result,
    onPress(arg0) {
      const tmp = needSubscriptionToAccess;
      if (tmp) {
        const tmp3 = channel;
        if (set.has(channel.type)) {
          const obj = router_utils;
          obj.transitionTo(Routes.CHANNEL(tmp3.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
        }
      }
      if (importDefault != null) {
        tmp4(arg0);
      }
    },
    children
  };
  const tmp3Result = tmp3(tmp4[13]);
  obj4 = { mode: tmp6, name: tmp14Result.computeChannelName(channel, UserStore, RelationshipStore), subtitle, textStyle };
  tmp6 === channel(tmp4[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(tmp4[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  BaseChannelName = tmp14(tmp4[13]).BaseChannelName;
  obj5 = { mode: tmp6 };
  tmp14Result = channel(tmp4[23]);
  const merged = Object.assign(channel);
  const merged1 = Object.assign(tmp2);
  return closure_13(tmp3Result, obj3);
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default memoResult;
export { getChannelMode };
