// Module ID: 15351
// Function ID: 117039
// Name: memoResult1
// Dependencies: [31, 27, 6692, 33, 4130, 689, 3969, 4126, 15352, 1392, 5165, 1273, 1557, 15357, 3950, 15358, 566, 1212, 7527, 8547, 5448, 2]

// Module 15351 (memoResult1)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1, marginTop: 16 };
obj.containerInner = obj;
obj.spinnerContainer = { padding: 32 };
obj.footerSpinner = { paddingVertical: 16 };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
obj.spinner = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  let obj = importDefault(3969);
  const globalName = obj.getGlobalName(user);
  obj = {};
  obj = { variant: "text-md/semibold" };
  let username = globalName;
  if (null == globalName) {
    username = user.username;
  }
  obj.children = username;
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp5 = null != globalName;
  if (tmp5) {
    const obj1 = { variant: "text-xs/medium", children: user.username };
    tmp5 = callback(require(4126) /* Text */.Text, obj1);
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_8(closure_5, obj);
});
let closure_12 = importAllResult.memo((joinRequest) => {
  let end;
  let start;
  joinRequest = joinRequest.joinRequest;
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
        let obj = importDefault(1392);
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      obj = { arrow: true };
      obj = { source: userAvatarSource, size: joinRequest(1273).AvatarSizes.SMALL };
      obj.icon = callback(joinRequest(1273).Avatar, obj);
      const obj1 = { user };
      obj.label = callback(closure_11, obj1);
      obj.onPress = tmp;
      obj.start = start;
      obj.end = end;
      return callback(joinRequest(5165).TableRow, obj);
    }
  }
});
const memoResult1 = importAllResult.memo(function GuildSettingsModalMemberApplications(arg0) {
  let applicationStatus;
  let guildId;
  ({ guildId, applicationStatus } = arg0);
  let tmp = callback2();
  const importDefault = tmp;
  let obj = applicationStatus(guildJoinRequests[13]);
  obj = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj).guildJoinRequests;
  let obj2 = applicationStatus(guildJoinRequests[15]);
  const fetchNextPage = obj2.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  let obj3 = applicationStatus(guildJoinRequests[16]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_6.isFetching());
  const items1 = [applicationStatus, fetchNextPage];
  const callback = fetchNextPage.useCallback(() => {
    fetchNextPage(applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items1);
  const items2 = [callback, guildJoinRequests.length];
  const effect = fetchNextPage.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items2);
  const items3 = [guildJoinRequests.length];
  const callback1 = fetchNextPage.useCallback((index) => {
    index = index.index;
    return outer1_7(outer1_12, { joinRequest: index.item, start: 0 === index, end: index === guildJoinRequests.length - 1 });
  }, items3);
  callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      obj = { style: tmp.spinnerContainer };
      const obj1 = { size: "large", color: tmp.spinner.color };
      obj.children = callback(stateFromStores, obj1);
      return callback(callback, obj);
    }
  }
  if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = applicationStatus(guildJoinRequests[17]).intl;
    let stringResult = intl2.string(applicationStatus(guildJoinRequests[17]).t["/wqiSv"]);
  } else if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = applicationStatus(guildJoinRequests[17]).intl;
    stringResult = intl.string(applicationStatus(guildJoinRequests[17]).t.bv82GS);
  } else if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = applicationStatus(guildJoinRequests[17]).intl;
    stringResult = intl3.string(applicationStatus(guildJoinRequests[17]).t["7YSJ6f"]);
  }
  obj2 = {};
  obj3 = { style: tmp.containerInner };
  if (0 !== guildJoinRequests.length) {
    const obj4 = { keyExtractor: callback2, data: guildJoinRequests, renderItem: callback1 };
    const obj5 = { paddingBottom: importDefault(guildJoinRequests[12])().bottom + importDefault(guildJoinRequests[5]).space.PX_16 };
    obj4.contentContainerStyle = obj5;
    obj4.onEndReached = callback;
    obj4.ListFooterComponent = function ListFooterComponent() {
      let tmp = null;
      if (stateFromStores) {
        let obj = { style: tmp.footerSpinner };
        obj = { size: "small", color: tmp.spinner.color };
        obj.children = outer1_7(stateFromStores, obj);
        tmp = outer1_7(callback, obj);
      }
      return tmp;
    };
    let tmp21 = callback(applicationStatus(guildJoinRequests[18]).FlashList, obj4);
  } else {
    const obj6 = { Illustration: applicationStatus(guildJoinRequests[19]).NoResults, body: stringResult };
    tmp21 = callback(applicationStatus(guildJoinRequests[11]).EmptyState, obj6);
  }
  obj3.children = tmp21;
  const items4 = [callback(callback, obj3), callback(applicationStatus(guildJoinRequests[20]).NavScrim, {})];
  obj2.children = items4;
  return closure_8(closure_9, obj2);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
