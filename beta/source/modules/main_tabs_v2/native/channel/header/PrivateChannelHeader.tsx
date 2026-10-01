// Module ID: 12843
// Function ID: 12844
// Name: PrivateChannelHeader
// Dependencies: [19, 17, 2045, 4876, 4479, 1372, 1074, 21, 1177, 4836, 576, 504, 12840, 4989, 1115, 10335, 12844, 12845, 12847, 4678, 12850, 2]

// Module 12843 (PrivateChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ChannelHeader from "ChannelHeader" /* 12840 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let currentUser;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelTypes: c9, StatusTypes: c10 } = Constants);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let closure_14 = native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32];
let closure_15 = Object.freeze({ onlineCount: null, memberCount: null });
let obj = { activityStatusText: obj2, groupDMIconAnchor: { marginRight: 12, flexShrink: 0 } };
obj2 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj);
const memoResult = react.memo(function PrivateChannelHeader(channelId) {
  let channelName;
  let guild_id;
  let guild_id1;
  let guild_id2;
  let id1;
  let isMobileOnline;
  let isVROnline;
  let memberCount;
  let obj9;
  let onlineCount;
  let renderUserAvatarResult;
  let status;
  let tmp15Result;
  let tmp2Result15;
  let tmp2Result18;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  let obj = channelId(stateFromStores[11]);
  let items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [UserStore];
  const obj3 = channelId(stateFromStores[11]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = obj.type;
    }
    let user;
    if (type === constants.DM) {
      user = UserStore.getUser(obj.getRecipientId());
    }
    return user;
  });
  const items2 = [PresenceStore];
  const obj5 = channelId(stateFromStores[11]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items2, () => {
    let UNKNOWN;
    let isVROnlineResult;
    const obj = { isMobileOnline: null != stateFromStores1 && PresenceStore.isMobileOnline(tmp.id), isVROnline: isVROnlineResult, status: UNKNOWN };
    isVROnlineResult = null != tmp && PresenceStore.isVROnline(tmp.id);
    if (null != stateFromStores1) {
      UNKNOWN = PresenceStore.getStatus(tmp.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  const tmp5 = PresenceStore;
  if (null != stateFromStores) {
    const tmp2Result = channelId(stateFromStores[13]);
    channelName = tmp2Result.computeChannelName(stateFromStores, tmp4, RelationshipStore);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    channelName = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
  }
  let result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: guild_id, textStyle: tmp.activityStatusText };
    guild_id = undefined;
    const tmp11 = closure_11;
    const tmp13 = screenIndex(stateFromStores[15]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    result = tmp11(tmp13, obj2);
  }
  let id;
  const tmp15 = screenIndex;
  const tmp16 = screenIndex(stateFromStores[16]);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj4 = { userId: id, guildId: guild_id1 };
  guild_id1 = undefined;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  let isMultiUserDMResult;
  const tmp16Result = tmp16(obj4);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  stateFromStores = tmp21;
  const items4 = [tmp4, tmp5];
  const items5 = [tmp21];
  const tmp2Result10 = channelId(stateFromStores[11]);
  const stateFromStoresObject1 = tmp2Result10.useStateFromStoresObject(items4, () => {
    let id;
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != stateFromStores) {
      if (null != id) {
        const items = [];
        let num = 0;
        items[HermesBuiltin.arraySpread(items, stateFromStores.recipients, 0)] = id;
        const obj = {
          onlineCount: items.reduce((acc, item) => {
                status = status.getStatus(item);
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
                return acc + num;
              }, 0),
          memberCount: stateFromStores.recipients.length
        };
        return obj;
      }
    }
    return closure_2_15;
  }, items5);
  const tmp2Result11 = channelId(stateFromStores[17]);
  const shouldChannelShowLoadingIndicator = tmp2Result11.useShouldChannelShowLoadingIndicator(channelId);
  const tmp24 = null != stateFromStoresObject1.onlineCount && null != stateFromStoresObject1.memberCount;
  if (shouldChannelShowLoadingIndicator) {
    result = closure_11(tmp2(tmp3[17]).ChannelHeaderLoadingIndicator, {});
  } else if (tmp24) {
    const tmp2Result12 = channelId(stateFromStores[18]);
    result = tmp2Result12.renderMemberCountText(stateFromStoresObject1.onlineCount, stateFromStoresObject1.memberCount);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  const items6 = [formatToPlainStringResult, , , , ];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      const tmp2Result13 = channelId(stateFromStores[19]);
      humanizeStatusResult = tmp2Result13.humanizeStatus(status, obj6);
    }
  }
  items6[1] = humanizeStatusResult;
  items6[2] = tmp16Result;
  let formatToPlainStringResult1 = null;
  if (!shouldChannelShowLoadingIndicator) {
    formatToPlainStringResult1 = null;
    if (null != stateFromStoresObject1.onlineCount) {
      formatToPlainStringResult1 = null;
      if (null != stateFromStoresObject1.memberCount) {
        ({ onlineCount, memberCount } = stateFromStoresObject1);
        let num = 0;
        let str2 = "online";
        if (0 === onlineCount) {
          str2 = "total";
        }
        if ("online" === str2) {
          memberCount = onlineCount;
        }
        const intl3 = tmp2(tmp3[14]).intl;
        const formatToPlainString = intl3.formatToPlainString;
        const t = tmp2(tmp3[14]).t;
        const obj7 = { count: memberCount };
        formatToPlainStringResult1 = formatToPlainString(tmp29 ? t.PIikks : t.etqpUG, obj7);
      }
    }
  }
  items6[3] = formatToPlainStringResult1;
  const intl4 = tmp2(tmp3[14]).intl;
  items6[4] = intl4.string(channelId(stateFromStores[14]).t.x87QCk);
  const found = items6.filter((item) => null != item);
  const joined = found.join(", ");
  const tmp31 = closure_13;
  if (null != stateFromStores1) {
    const tmp2Result14 = channelId(stateFromStores[18]);
    renderUserAvatarResult = tmp2Result14.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj8 = { style: tmp.groupDMIconAnchor, children: closure_11(tmp15Result, obj9, channelId) };
      obj9 = { channelId, location: "GroupDMChannelHeader", children: tmp2Result15.renderGroupDMIcon(stateFromStores) };
      tmp15Result = tmp15(stateFromStores[20]);
      tmp2Result15 = channelId(stateFromStores[18]);
      renderUserAvatarResult = closure_11(View, obj8);
    } else {
      const tmp2Result16 = channelId(stateFromStores[18]);
      renderUserAvatarResult = tmp2Result16.renderEmptyIcon();
    }
  }
  const items7 = [renderUserAvatarResult, ];
  const obj10 = { accessibleTitle: formatToPlainStringResult, subtitle: result, disableArrow: !pressable, userId: id1, guildId: guild_id2 };
  id1 = undefined;
  const renderChannelTitle = tmp2(tmp3[18]).renderChannelTitle;
  channelId(stateFromStores[18]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  guild_id2 = undefined;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj11 = { children: items7 };
  items7[1] = renderChannelTitle(channelName, obj10);
  const tmp31Result = tmp31(closure_12, obj11);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj12 = { children: tmp2Result18.renderTitleWrapper(tmp31Result, callback, joined, num2) };
    tmp2Result18 = channelId(stateFromStores[18]);
    return closure_11(closure_12, obj12);
  } else {
    return tmp31Result;
  }
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;
