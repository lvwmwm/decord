// Module ID: 15177
// Function ID: 114470
// Name: memoResult1
// Dependencies: []

// Module 15177 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { memo: true, current: true, body: true, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.containerInner = obj;
obj.spinnerContainer = { padding: 32 };
obj.footerSpinner = { paddingVertical: 16 };
obj1 = { color: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
obj.spinner = obj1;
let closure_10 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = importDefault(dependencyMap[6]);
  const globalName = obj.getGlobalName(user);
  obj = {};
  obj = { variant: "text-md/semibold" };
  let username = globalName;
  if (null == globalName) {
    username = user.username;
  }
  obj.children = username;
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  let tmp5 = null != globalName;
  if (tmp5) {
    const obj1 = { variant: "text-xs/medium", children: user.username };
    tmp5 = callback(arg1(dependencyMap[7]).Text, obj1);
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_8(closure_5, obj);
});
let closure_12 = importAllResult.memo((joinRequest) => {
  let end;
  let start;
  joinRequest = joinRequest.joinRequest;
  const arg1 = joinRequest;
  [][0] = joinRequest;
  ({ start, end } = joinRequest);
  if (null == joinRequest) {
    return null;
  } else {
    const user = joinRequest.user;
    if (null == user) {
      return null;
    } else {
      let userAvatarSource = null;
      if (null != user) {
        let obj = importDefault(dependencyMap[9]);
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      obj = { arrow: true };
      obj = { source: userAvatarSource, size: arg1(dependencyMap[11]).AvatarSizes.SMALL };
      obj.icon = callback(arg1(dependencyMap[11]).Avatar, obj);
      const obj1 = { user };
      obj.label = callback(memoResult, obj1);
      obj.onPress = tmp;
      obj.start = start;
      obj.end = end;
      return callback(arg1(dependencyMap[10]).TableRow, obj);
    }
  }
});
const tmp3 = arg1(dependencyMap[3]);
const memoResult1 = importAllResult.memo(function GuildSettingsModalMemberApplications(arg0) {
  let applicationStatus;
  let guildId;
  ({ guildId, applicationStatus } = arg0);
  const arg1 = applicationStatus;
  const tmp = callback2();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[13]);
  obj = { guildId, applicationStatus, sortOrder: arg1(dependencyMap[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  const guildJoinRequests = obj.useSortedMemberApplications(obj).guildJoinRequests;
  const dependencyMap = guildJoinRequests;
  let obj2 = arg1(dependencyMap[15]);
  const fetchNextPage = obj2.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  let obj3 = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items, () => fetching.isFetching());
  const items1 = [applicationStatus, fetchNextPage];
  const callback = importAllResult.useCallback(() => {
    fetchNextPage(applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items1);
  const items2 = [callback, guildJoinRequests.length];
  const effect = importAllResult.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items2);
  const items3 = [guildJoinRequests.length];
  const callback1 = importAllResult.useCallback((index) => {
    index = index.index;
    return callback(closure_12, { joinRequest: index.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items3);
  const callback2 = importAllResult.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      obj = { style: tmp.spinnerContainer };
      const obj1 = { size: "large", color: tmp.spinner.color };
      obj.children = callback(stateFromStores, obj1);
      return callback(callback, obj);
    }
  }
  if (arg1(dependencyMap[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = arg1(dependencyMap[17]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[17]).t./wqiSv);
  } else if (arg1(dependencyMap[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = arg1(dependencyMap[17]).intl;
    stringResult = intl.string(arg1(dependencyMap[17]).t.bv82GS);
  } else if (arg1(dependencyMap[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = arg1(dependencyMap[17]).intl;
    stringResult = intl3.string(arg1(dependencyMap[17]).t.7YSJ6f);
  }
  obj2 = {};
  obj3 = { style: tmp.containerInner };
  if (0 !== guildJoinRequests.length) {
    const obj4 = { keyExtractor: callback2, data: guildJoinRequests, renderItem: callback1 };
    const obj5 = { paddingBottom: importDefault(dependencyMap[12])().bottom + importDefault(dependencyMap[5]).space.PX_16 };
    obj4.contentContainerStyle = obj5;
    obj4.onEndReached = callback;
    obj4.ListFooterComponent = function ListFooterComponent() {
      let tmp = null;
      if (stateFromStores) {
        let obj = { style: tmp.footerSpinner };
        obj = { size: "small", color: tmp.spinner.color };
        obj.children = callback(stateFromStores, obj);
        tmp = callback(callback, obj);
      }
      return tmp;
    };
    let tmp21 = callback(arg1(dependencyMap[18]).FlashList, obj4);
  } else {
    const obj6 = { Illustration: arg1(dependencyMap[19]).NoResults, body: stringResult };
    tmp21 = callback(arg1(dependencyMap[11]).EmptyState, obj6);
  }
  obj3.children = tmp21;
  const items4 = [callback(callback, obj3), callback(arg1(dependencyMap[20]).NavScrim, {})];
  obj2.children = items4;
  return closure_8(closure_9, obj2);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
