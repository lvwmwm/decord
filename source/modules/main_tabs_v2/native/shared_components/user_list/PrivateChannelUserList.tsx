// Module ID: 11309
// Function ID: 87976
// Dependencies: [31, 1348, 3767, 1849, 653, 33, 5464, 566, 22, 1327, 10868, 1212, 8492, 8825, 2]

// Module 11309
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ RelationshipTypes: closure_7, MAX_GROUP_DM_PARTICIPANTS: closure_8 } = ME);
const memoResult = importAllResult.memo(function PrivateChannelUserList(channelId) {
  let disableBottomSafeZone;
  let disableStickySections;
  let inActionSheet;
  let insetEnd;
  let listActionHeight;
  let listActionRenderer;
  let listStyleOverride;
  let opensUserProfileOnUserPress;
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
  let analyticsLocations;
  let stateFromStores;
  let stateFromStoresArray;
  let c7;
  let c8;
  let num;
  analyticsLocations = hideTitle(onUserPress[6])().analyticsLocations;
  let obj = channelId(onUserPress[7]);
  let items = [analyticsLocations];
  stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(channelId));
  const items1 = [stateFromStoresArray];
  const items2 = [stateFromStores];
  stateFromStoresArray = channelId(onUserPress[7]).useStateFromStoresArray(items1, () => {
    if (null != stateFromStores) {
      const mapped = hideTitle(onUserPress[8])(stateFromStores.recipients).map(stateFromStoresArray.getUser);
      const arr2 = hideTitle(onUserPress[8])(stateFromStores.recipients);
      const found = mapped.unshift(stateFromStoresArray.getCurrentUser()).filter(channelId(onUserPress[9]).isNotNullish);
      const arr = mapped.unshift(stateFromStoresArray.getCurrentUser());
      let items = found.sortBy((username) => username.username.toLowerCase()).value();
      const iter = found.sortBy((username) => username.username.toLowerCase());
    } else {
      items = [];
    }
    return items;
  }, items2);
  obj = { channel: stateFromStores, disable: !flag };
  const obj3 = channelId(onUserPress[7]);
  let isMultiUserDMResult;
  ({ listActionRenderer, listActionHeight } = hideTitle(onUserPress[10])(obj));
  if (null != stateFromStores) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  c7 = tmp4;
  let tmp5;
  if (null != isMultiUserDMResult && isMultiUserDMResult) {
    let ownerId;
    if (null != stateFromStores) {
      ownerId = stateFromStores.ownerId;
    }
    tmp5 = ownerId;
  }
  c8 = tmp5;
  let userLimit;
  if (null != stateFromStores) {
    userLimit = stateFromStores.userLimit;
  }
  num = 0;
  if (null != userLimit) {
    num = userLimit;
  }
  const items3 = [stateFromStoresArray];
  const items4 = [null != isMultiUserDMResult && isMultiUserDMResult, stateFromStoresArray, num, hideTitle];
  const sections = opensUserProfileOnUserPress.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, null != isMultiUserDMResult && isMultiUserDMResult, tmp5, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = opensUserProfileOnUserPress.useCallback(() => {
    const intl = channelId(onUserPress[11]).intl;
    let combined1 = globalThis;
    const combined = "" + intl.string(channelId(onUserPress[11]).t["9Oq93m"]) + " \u2014 " + stateFromStoresArray.length;
    if (!c7) {
      let obj = { type: "section" };
      obj = { title: combined, hideTitle };
      obj.props = obj;
      return obj;
    } else {
      combined1 = "/" + num > 0 ? num : c8;
      const sum = combined + combined1;
    }
  }, items4);
  const getItemProps = opensUserProfileOnUserPress.useCallback((arg0, arg1) => {
    let closure_0 = arg1;
    if (null != stateFromStoresArray[arg1]) {
      let tmp4 = _undefined;
      if (_undefined) {
        tmp4 = tmp3.id === c8;
      }
      let obj = { type: "user" };
      obj = {
        type: _undefined.NONE,
        user: tmp3,
        nickname: stateFromStores.getNickname(tmp3.id),
        isNameplatedRow: true,
        onPress(user) {
            if (null != outer1_2) {
              let obj = { user, index: closure_0 };
              outer1_2(obj);
            }
            if (outer1_3) {
              obj = { userId: user.id, sourceAnalyticsLocations: outer1_4, channelId: closure_0 };
              hideTitle(onUserPress[12])(obj);
            }
          },
        isOwner: tmp4,
        start: tmp,
        end: tmp2,
        canShowDisplayNameStyles: true
      };
      obj.props = obj;
      return obj;
    } else {
      obj = { type: "placeholder" };
      const obj1 = { start: tmp, end: tmp2 };
      obj.props = obj1;
      return obj;
    }
  }, items5);
  return num(channelId(onUserPress[13]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;
