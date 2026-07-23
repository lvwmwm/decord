// Module ID: 10116
// Function ID: 78281
// Name: GroupDmMemberCount
// Dependencies: [31, 1348, 4217, 3767, 1849, 653, 33, 1273, 4130, 689, 566, 10111, 4320, 1212, 9063, 10117, 3969, 10119, 2]

// Module 10116 (GroupDmMemberCount)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  let items = [closure_7, closure_5];
  const stateFromStores = channel(566).useStateFromStores(items, () => {
    const items = [...channel.recipients];
    const currentUser = outer1_7.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let str = "0";
    if (null != id) {
      str = id;
    }
    items[tmp] = str;
    return items.reduce((arg0, arg1) => {
      const status = outer2_5.getStatus(arg1);
      let num = 0;
      if (status !== outer2_9.INVISIBLE) {
        num = 0;
        if (status !== outer2_9.OFFLINE) {
          num = 0;
          if (status !== outer2_9.UNKNOWN) {
            num = 1;
          }
        }
      }
      return arg0 + num;
    }, 0);
  });
  const obj = channel(566);
  return channel(10119).renderMemberCountText(stateFromStores, channel.recipients.length);
}
({ ChannelTypes: closure_8, StatusTypes: closure_9 } = ME);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32];
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj.activityStatusText = obj;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function PrivateChannelHeader(channelId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let obj = channelId(stateFromStores[10]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId));
  let obj2 = channelId(stateFromStores[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    let user;
    if (type === outer1_8.DM) {
      user = outer1_7.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  let obj4 = channelId(stateFromStores[10]);
  const items2 = [closure_5];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    const obj = {};
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = outer1_5.isMobileOnline(stateFromStores1.id);
    }
    obj.isMobileOnline = isMobileOnlineResult;
    let isVROnlineResult = null != stateFromStores1;
    if (isVROnlineResult) {
      isVROnlineResult = outer1_5.isVROnline(stateFromStores1.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = outer1_5.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = outer1_9.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = channelId(stateFromStores[11]).navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let obj5 = channelId(stateFromStores[12]);
    let channelName = obj5.computeChannelName(stateFromStores, closure_7, closure_6);
  } else {
    const intl = channelId(stateFromStores[13]).intl;
    channelName = intl.string(channelId(stateFromStores[13]).t.ai6Lbr);
  }
  let tmp12Result = null;
  if (null != stateFromStores1) {
    obj = { userId: stateFromStores1.id };
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    obj.guildId = guild_id;
    obj.textStyle = tmp.activityStatusText;
    tmp12Result = callback(screenIndex(stateFromStores[14]), obj);
    const tmp12 = callback;
    const tmp15 = screenIndex(stateFromStores[14]);
  }
  tmp = callback2();
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = channelId(stateFromStores[15]).useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp12Result = callback(channelId(stateFromStores[15]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    obj = { channel: stateFromStores };
    tmp12Result = callback(GroupDmMemberCount, obj);
  }
  const intl2 = channelId(stateFromStores[13]).intl;
  const obj1 = { channelName };
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[13]).t.UbNmGc, obj1);
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      obj2 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = channelId(stateFromStores[16]).humanizeStatus(status, obj2);
      const obj11 = channelId(stateFromStores[16]);
    }
  }
  const intl3 = channelId(stateFromStores[13]).intl;
  const stringResult = intl3.string(channelId(stateFromStores[13]).t.x87QCk);
  if (null != humanizeStatusResult) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + formatToPlainStringResult + ", " + humanizeStatusResult + ", " + stringResult;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + stringResult;
  }
  const obj3 = {};
  if (null != stateFromStores1) {
    const obj16 = channelId(stateFromStores[17]);
    let renderUserAvatarResult = obj16.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    if (null != stateFromStores) {
      if (stateFromStores.isGroupDM()) {
        renderUserAvatarResult = channelId(stateFromStores[17]).renderGroupDMIcon(stateFromStores);
        const obj15 = channelId(stateFromStores[17]);
      }
    }
    renderUserAvatarResult = channelId(stateFromStores[17]).renderEmptyIcon();
    const obj14 = channelId(stateFromStores[17]);
  }
  const items4 = [renderUserAvatarResult, ];
  const obj8 = channelId(stateFromStores[15]);
  const tmp35 = closure_12;
  const tmp36 = closure_11;
  obj4 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp12Result, disableArrow: !pressable };
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  obj4.userId = id;
  let guild_id1;
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  obj4.guildId = guild_id1;
  items4[1] = channelId(stateFromStores[17]).renderChannelTitle(channelName, obj4);
  obj3.children = items4;
  const tmp35Result = tmp35(tmp36, obj3);
  if (pressable) {
    let num8 = 44;
    if (null == tmp12Result) {
      num8 = closure_13;
    }
    obj5 = {};
    const obj20 = channelId(stateFromStores[17]);
    obj5.children = obj20.renderTitleWrapper(tmp35Result, callback, combined, num8);
    return callback(closure_11, obj5);
  } else {
    return tmp35Result;
  }
  const obj17 = channelId(stateFromStores[17]);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;
