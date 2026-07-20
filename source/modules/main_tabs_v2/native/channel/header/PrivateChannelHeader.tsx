// Module ID: 10101
// Function ID: 78199
// Name: GroupDmMemberCount
// Dependencies: []

// Module 10101 (GroupDmMemberCount)
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const items = [closure_7, closure_5];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const items = [...closure_0.recipients];
    const currentUser = currentUser.getCurrentUser();
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
      const status = status.getStatus(arg1);
      let num = 0;
      if (status !== constants.INVISIBLE) {
        num = 0;
        if (status !== constants.OFFLINE) {
          num = 0;
          if (status !== constants.UNKNOWN) {
            num = 1;
          }
        }
      }
      return arg0 + num;
    }, 0);
  });
  const obj = arg1(dependencyMap[10]);
  return arg1(dependencyMap[17]).renderMemberCountText(stateFromStores, channel.recipients.length);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ ChannelTypes: closure_8, StatusTypes: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let closure_13 = arg1(dependencyMap[7]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[7]).AvatarSizes.REFRESH_MEDIUM_32];
const tmp3 = arg1(dependencyMap[6]);
let obj = {};
obj = { color: importDefault(dependencyMap[9]).colors.TEXT_MUTED };
obj.activityStatusText = obj;
let closure_14 = arg1(dependencyMap[8]).createStyles(obj);
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function PrivateChannelHeader(channelId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  const pressable = channelId.pressable;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    let user;
    if (type === constants.DM) {
      user = user.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  let obj4 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    const obj = {};
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = closure_5.isMobileOnline(stateFromStores1.id);
    }
    obj.isMobileOnline = isMobileOnlineResult;
    let isVROnlineResult = null != stateFromStores1;
    if (isVROnlineResult) {
      isVROnlineResult = closure_5.isVROnline(stateFromStores1.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = closure_5.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
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
    let obj5 = arg1(dependencyMap[12]);
    let channelName = obj5.computeChannelName(stateFromStores, closure_7, closure_6);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    channelName = intl.string(arg1(dependencyMap[13]).t.ai6Lbr);
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
    tmp12Result = callback(importDefault(dependencyMap[14]), obj);
    const tmp12 = callback;
    const tmp15 = importDefault(dependencyMap[14]);
  }
  const importAllResult = stateFromStores1;
  const tmp = callback2();
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = arg1(dependencyMap[15]).useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp12Result = callback(arg1(dependencyMap[15]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    obj = { channel: stateFromStores };
    tmp12Result = callback(GroupDmMemberCount, obj);
  }
  const intl2 = arg1(dependencyMap[13]).intl;
  const obj1 = { channelName };
  const formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.UbNmGc, obj1);
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      obj2 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = arg1(dependencyMap[16]).humanizeStatus(status, obj2);
      const obj11 = arg1(dependencyMap[16]);
    }
  }
  const intl3 = arg1(dependencyMap[13]).intl;
  const stringResult = intl3.string(arg1(dependencyMap[13]).t.x87QCk);
  if (null != humanizeStatusResult) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + formatToPlainStringResult + ", " + humanizeStatusResult + ", " + stringResult;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + stringResult;
  }
  const obj3 = {};
  if (null != stateFromStores1) {
    const obj16 = arg1(dependencyMap[17]);
    let renderUserAvatarResult = obj16.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    if (null != stateFromStores) {
      if (stateFromStores.isGroupDM()) {
        renderUserAvatarResult = arg1(dependencyMap[17]).renderGroupDMIcon(stateFromStores);
        const obj15 = arg1(dependencyMap[17]);
      }
    }
    renderUserAvatarResult = arg1(dependencyMap[17]).renderEmptyIcon();
    const obj14 = arg1(dependencyMap[17]);
  }
  const items4 = [renderUserAvatarResult, ];
  const obj8 = arg1(dependencyMap[15]);
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
  items4[1] = arg1(dependencyMap[17]).renderChannelTitle(channelName, obj4);
  obj3.children = items4;
  const tmp35Result = tmp35(tmp36, obj3);
  if (pressable) {
    let num8 = 44;
    if (null == tmp12Result) {
      num8 = closure_13;
    }
    obj5 = {};
    const obj20 = arg1(dependencyMap[17]);
    obj5.children = obj20.renderTitleWrapper(tmp35Result, callback, combined, num8);
    return callback(closure_11, obj5);
  } else {
    return tmp35Result;
  }
  const obj17 = arg1(dependencyMap[17]);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;
