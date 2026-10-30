// Module ID: 12343
// Function ID: 12344
// Name: PrivateChannelUserList
// Dependencies: [32, 19, 17, 4858, 4951, 1384, 1072, 21, 7320, 504, 12, 1380, 11585, 11591, 11590, 5591, 575, 12344, 1114, 9506, 12345, 8742, 10713, 2]

// Module 12343 (PrivateChannelUserList)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 12345 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let tmp;
let unpackModuleId;
const NitroWheelIcon2 = tmp(9506);
const View = react_native.View;
({ RelationshipTypes: c9, MAX_GROUP_DM_PARTICIPANTS: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const memoResult = react.memo(function PrivateChannelUserList(channelId) {
  let _undefined;
  let c16;
  let disableBottomSafeZone;
  let disableStickySections;
  let inActionSheet;
  let insetEnd;
  let listStyleOverride;
  let opensUserProfileOnUserPress;
  let tmp21;
  let tmp8;
  channelId = channelId.channelId;
  let flag = channelId.headerShown;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  const hideTitle = channelId.hideTitle;
  const onUserPress = channelId.onUserPress;
  ({ opensUserProfileOnUserPress, inActionSheet } = channelId);
  if (opensUserProfileOnUserPress === undefined) {
    opensUserProfileOnUserPress = true;
  }
  const listHeaderContent = channelId.listHeaderContent;
  let stateFromStores;
  let renderListHeader;
  let ownerId;
  let closure_12;
  let token;
  let token1;
  let closure_15;
  c16 = undefined;
  let height;
  let callback2;
  let tmp = hideTitle;
  let tmp2 = onUserPress;
  const analyticsLocations = hideTitle(onUserPress[8])().analyticsLocations;
  let tmp3 = channelId;
  let obj = channelId(onUserPress[9]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(onUserPress[9]);
  const items1 = [renderListHeader];
  const items2 = [stateFromStores];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    let items;
    if (null != stateFromStores) {
      const arr2 = _modDef12(tmp.recipients);
      const mapped = arr2.map(UserStore.getUser);
      const arr = mapped.unshift(UserStore.getCurrentUser());
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.sortBy((username) => {
        const str = username.username;
        return str.toLowerCase();
      });
      items = iter.value();
    } else {
      items = [];
    }
    return items;
  }, items2);
  let obj2 = { channel: stateFromStores, disable: !flag };
  const tmp5 = hideTitle(onUserPress[12])(obj2);
  renderListHeader = tmp5.listActionRenderer;
  let listHeaderSize = tmp5.listActionHeight;
  let flag2;
  if (stateFromStores != null) {
    flag2 = stateFromStores.isMultiUserDM();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp6;
  if (flag2) {
    ownerId = undefined;
    if (stateFromStores != null) {
      ownerId = stateFromStores.ownerId;
    }
    tmp6 = ownerId;
  }
  ownerId = tmp6;
  if (flag2) {
    tmp8 = tmp(tmp2[13])({ useNitroCapExperiment: true });
  } else {
    tmp8 = flag2;
  }
  tmp3(tmp2[14]);
  let tmp11 = flag2;
  if (tmp11) {
    let str = "entitled";
    tmp11 = "entitled" === tmp10;
  }
  if (tmp11) {
    tmp11 = tmp8 > flag2;
  }
  closure_12 = tmp11;
  const tmp3Result3 = tmp3(tmp2[15]);
  token = tmp3Result3.useToken(tmp(tmp2[16]).colors.TEXT_SUBTLE);
  const tmp3Result4 = tmp3(tmp2[15]);
  token1 = tmp3Result4.useToken(tmp(tmp2[16]).colors.ICON_SUBTLE);
  const tmp15 = tmp(tmp2[17])("PrivateChannelUserList");
  closure_15 = tmp15;
  const items3 = [stateFromStoresArray];
  const items4 = [stateFromStoresArray, hideTitle, tmp11, token, token1, tmp15];
  const sections = listHeaderContent.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, flag2, tmp6, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = listHeaderContent.useCallback(() => {
    let intl;
    let obj3;
    const obj = { title: "" + intl.string(intl2.t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length, hideTitle };
    intl = intl2.intl;
    let tmp3 = closure_12;
    if (tmp3) {
      let str = "xxs";
      const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
      const tmp4 = unpackModuleId;
      if (closure_15) {
        str = "xs";
      }
      const obj2 = { titleLeading: tmp4(NitroWheelIcon, obj3), onTitlePress: openGroupDMNitroCapInfoActionSheetDefault, colorOverride: token };
      tmp3 = obj2;
      obj3 = { size: str, color: token1, accessible: false };
    }
    const element = { type: "section", props: obj };
    const merged = Object.assign(tmp3);
    return element;
  }, items4);
  const getItemProps = listHeaderContent.useCallback((arg0, index) => {
    let obj;
    let obj2;
    const tmp = 0 === index;
    if (null != stateFromStoresArray[index]) {
      let tmp4 = flag2;
      if (tmp4) {
        tmp4 = tmp3.id === ownerId;
      }
      const element = { type: "user", props: obj };
      obj = {
        type: listHeaderSize.NONE,
        user: stateFromStoresArray[index],
        nickname: stateFromStoresArray.getNickname(stateFromStoresArray[index].id),
        isNameplatedRow: true,
        onPress(user) {
            if (onUserPress != null) {
              const obj = { user, index };
              tmp(obj);
            }
            const tmp4 = opensUserProfileOnUserPress;
            if (tmp4) {
              const obj2 = { userId: user.id, sourceAnalyticsLocations: analyticsLocations, channelId };
              showUserProfileActionSheetDefault(obj2);
            }
          },
        isOwner: tmp4,
        start: tmp,
        end: tmp2,
        canShowDisplayNameStyles: true
      };
      return element;
    } else {
      const element1 = { type: "placeholder", props: obj2 };
      obj2 = { start: tmp, end: tmp2 };
      return element1;
    }
  }, items5);
  [tmp21, c16] = opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  let channelId1;
  opensUserProfileOnUserPress(listHeaderContent.useState(), 2);
  if (tmp21 != null) {
    channelId1 = tmp21.channelId;
  }
  height = undefined;
  if (channelId1 === channelId) {
    height = tmp21.height;
  }
  const items6 = [channelId];
  callback2 = obj7.useCallback((nativeEvent) => {
    height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((arg0) => {
      let tmp = arg0;
      channelId = undefined;
      if (arg0 != null) {
        channelId = tmp.channelId;
      }
      if (channelId !== channelId) {
        tmp = { channelId: tmp3, height };
        const obj = { channelId: tmp3, height };
      }
      return tmp;
    });
  }, items6);
  const items7 = [channelId, listHeaderContent, renderListHeader, callback2];
  const items8 = [height, listHeaderSize];
  const callback3 = obj7.useCallback(() => {
    let items;
    const obj = { onLayout: callback2, children: items };
    items = [listHeaderContent, ];
    let tmp3;
    const tmp = authStore2;
    const tmp2 = View;
    if (renderListHeader != null) {
      tmp3 = renderListHeader();
    }
    items[1] = tmp3;
    return tmp(tmp2, obj, channelId);
  }, items7);
  const callback4 = obj7.useCallback(() => {
    let num = height;
    if (height == null) {
      let tmp;
      if (listHeaderSize != null) {
        tmp = listHeaderSize();
      }
      num = tmp;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items8);
  if (null != listHeaderContent) {
    renderListHeader = callback3;
  }
  if (null != listHeaderContent) {
    listHeaderSize = callback4;
  }
  return ownerId(tmp3(tmp2[22]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;
