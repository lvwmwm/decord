// Module ID: 11298
// Function ID: 87901
// Dependencies: []

// Module 11298
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ RelationshipTypes: closure_7, MAX_GROUP_DM_PARTICIPANTS: closure_8 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[4]);
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
  const arg1 = channelId;
  let flag = channelId.headerShown;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  const hideTitle = channelId.hideTitle;
  const importDefault = hideTitle;
  const onUserPress = channelId.onUserPress;
  const dependencyMap = onUserPress;
  ({ opensUserProfileOnUserPress, inActionSheet } = channelId);
  if (opensUserProfileOnUserPress === undefined) {
    opensUserProfileOnUserPress = true;
  }
  let closure_4;
  let closure_5;
  let closure_6;
  let tmp4;
  let tmp5;
  let jsx;
  const analyticsLocations = importDefault(dependencyMap[6])().analyticsLocations;
  closure_4 = analyticsLocations;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(channelId));
  closure_5 = stateFromStores;
  const items1 = [closure_6];
  const items2 = [stateFromStores];
  const stateFromStoresArray = arg1(dependencyMap[7]).useStateFromStoresArray(items1, () => {
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
  closure_6 = stateFromStoresArray;
  obj = { channel: stateFromStores, disable: !flag };
  const obj3 = arg1(dependencyMap[7]);
  let isMultiUserDMResult;
  ({ listActionRenderer, listActionHeight } = importDefault(dependencyMap[10])(obj));
  if (null != stateFromStores) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  tmp4 = null != isMultiUserDMResult && isMultiUserDMResult;
  tmp5 = undefined;
  if (tmp4) {
    let ownerId;
    if (null != stateFromStores) {
      ownerId = stateFromStores.ownerId;
    }
    tmp5 = ownerId;
  }
  let userLimit;
  if (null != stateFromStores) {
    userLimit = stateFromStores.userLimit;
  }
  let num = 0;
  if (null != userLimit) {
    num = userLimit;
  }
  jsx = num;
  const items3 = [stateFromStoresArray];
  const items4 = [tmp4, stateFromStoresArray, num, hideTitle];
  const sections = importAllResult.useMemo(() => {
    const items = [stateFromStoresArray.length];
    return items;
  }, items3);
  const items5 = [stateFromStoresArray, tmp4, tmp5, onUserPress, opensUserProfileOnUserPress, analyticsLocations, channelId];
  const getSectionProps = importAllResult.useCallback(() => {
    const intl = channelId(onUserPress[11]).intl;
    let combined1 = globalThis;
    const combined = "" + intl.string(channelId(onUserPress[11]).t.9Oq93m) + " \u2014 " + stateFromStoresArray.length;
    if (!tmp4) {
      let obj = { type: "section" };
      obj = { title: combined, hideTitle };
      obj.props = obj;
      return obj;
    } else {
      combined1 = "/" + num > 0 ? num : tmp5;
      const sum = combined + combined1;
    }
  }, items4);
  const getItemProps = importAllResult.useCallback((arg0, arg1) => {
    const channelId = arg1;
    if (null != stateFromStoresArray[arg1]) {
      if (tmp4) {
        const tmp4 = tmp3.id === tmp5;
      }
      let obj = { type: "user" };
      obj = {
        type: tmp4.NONE,
        user: tmp3,
        nickname: stateFromStores.getNickname(tmp3.id),
        isNameplatedRow: true,
        onPress(user) {
            if (null != callback2) {
              let obj = { user, index: arg1 };
              callback2(obj);
            }
            if (closure_3) {
              obj = { userId: user.id, sourceAnalyticsLocations: closure_4, channelId: arg1 };
              callback(callback2[12])(obj);
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
  return jsx(arg1(dependencyMap[13]).UsersFastList, { sections, getItemProps, getSectionProps, listHeaderSize, renderListHeader, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd, inActionSheet });
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx");

export default memoResult;
