// Module ID: 18436
// Function ID: 18437
// Name: GuildSettingsModalMemberApplications
// Dependencies: [19, 17, 7006, 21, 5043, 575, 5099, 5634, 18437, 1413, 6144, 1186, 1629, 18442, 5079, 18443, 504, 1112, 7482, 11596, 5617, 2]

// Module 18436 (GuildSettingsModalMemberApplications)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5079 */;
import UserUtilsDefault from "UserUtils" /* 5099 */;
import Text_Text from "Text/Text" /* 5634 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 18437 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 7006 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, spinnerContainer: { padding: 32 }, footerSpinner: { paddingVertical: 16 }, spinner: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1, marginTop: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function MemberApplicationUser(user) {
  user = user.user;
  const obj = UserUtilsDefault;
  const globalName = obj.getGlobalName(user);
  let username = globalName;
  const Text = Text_Text.Text;
  const tmp3 = metroImportAll;
  const tmp4 = hasOwnProperty;
  if (globalName == null) {
    username = user.username;
  }
  const children = [metroImportDefault(Text, { variant: "body-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    const obj2 = { variant: "body-xs/medium", children: user.username };
    tmp5Result = tmp5(Text_Text.Text, obj2);
  }
  children[1] = tmp5Result;
  return tmp3(tmp4, { children });
});
const unpackModuleId = memoResult;
let closure_12 = react.memo(function GuildSettingsModalMemberApplication(joinRequest) {
  let Avatar;
  let end;
  let obj3;
  let obj4;
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
        const obj = AvatarUtilsDefault;
        userAvatarSource = obj.getUserAvatarSource(user);
      }
      const obj2 = { arrow: true, icon: closure_7(Avatar, obj3), label: closure_7(closure_11, obj4), onPress: tmp, start, end };
      const TableRow = joinRequest(6144).TableRow;
      obj3 = { source: userAvatarSource, size: joinRequest(1186).AvatarSizes.SMALL };
      Avatar = joinRequest(1186).Avatar;
      obj4 = { user };
      return closure_7(TableRow, obj2);
    }
  }
});
const memoResult1 = react.memo(function GuildSettingsModalMemberApplications(guildId) {
  let closure_2;
  let items5;
  let obj6;
  let obj9;
  let stringResult;
  let tmp13Result;
  guildId = guildId.guildId;
  const applicationStatus = guildId.applicationStatus;
  let onEndReached;
  let tmp = closure_10();
  dependencyMap = tmp;
  const bottom = applicationStatus(1629)().bottom;
  let obj = guildId(18442);
  let obj2 = { guildId, applicationStatus, sortOrder: guildId(5079).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  const guildJoinRequests = obj.useSortedMemberApplications(obj2).guildJoinRequests;
  const obj3 = guildId(18443);
  const fetchNextPage = obj3.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  const items = [onEndReached];
  const items1 = [guildId, applicationStatus];
  const obj4 = guildId(504);
  const stateFromStores = obj4.useStateFromStores(items, () => GuildJoinRequestStore.isFetching(guildId, applicationStatus), items1);
  const items2 = [applicationStatus, fetchNextPage];
  onEndReached = guildJoinRequests.useCallback(() => {
    fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items2);
  const items3 = [onEndReached, guildJoinRequests.length];
  const effect = guildJoinRequests.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items3);
  const items4 = [guildJoinRequests.length];
  const callback1 = guildJoinRequests.useCallback((joinRequest) => {
    const index = joinRequest.index;
    const obj = { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
    return metroImportDefault(closure_12, obj);
  }, items4);
  const callback2 = guildJoinRequests.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  const tmp2 = applicationStatus;
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      const obj5 = { style: tmp.spinnerContainer, children: closure_7(fetchNextPage, obj6) };
      obj6 = { size: "large", color: tmp.spinner.color };
      return closure_7(stateFromStores, obj5);
    }
  }
  if (guildId(5079).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = tmp4(1112).intl;
    stringResult = intl2.string(tmp4(1112).t["/wqiSv"]);
  } else if (guildId(5079).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = tmp4(1112).intl;
    stringResult = intl.string(tmp4(1112).t.bv82GS);
  } else if (guildId(5079).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = tmp4(1112).intl;
    stringResult = intl3.string(tmp4(1112).t["7YSJ6f"]);
  }
  const obj7 = { style: tmp.containerInner, children: tmp13Result };
  const tmp11 = closure_8;
  const tmp12 = closure_9;
  const tmp14 = stateFromStores;
  if (0 !== guildJoinRequests.length) {
    const obj8 = {
      keyExtractor: callback2,
      data: guildJoinRequests,
      renderItem: callback1,
      contentContainerStyle: obj9,
      onEndReached,
      ListFooterComponent: function renderFooter() {
          let obj2;
          let tmp = null;
          if (stateFromStores) {
            const obj = { style: closure_2.footerSpinner, children: metroImportDefault(React3, obj2) };
            obj2 = { size: "small", color: closure_2.spinner.color };
            tmp = metroImportDefault(hasOwnProperty, obj);
          }
          return tmp;
        }
    };
    obj9 = { paddingBottom: bottom + tmp2(575).space.PX_16 };
    const FlashList = tmp4(7482).FlashList;
    tmp13Result = tmp13(FlashList, obj8);
  } else {
    const obj10 = { Illustration: guildId(11596).NoResults, body: stringResult };
    const EmptyState = tmp4(1186).EmptyState;
    tmp13Result = tmp13(EmptyState, obj10);
  }
  const obj11 = { children: items5 };
  items5 = [closure_7(tmp14, obj7), closure_7(tmp4(5617).NavScrim, {})];
  return tmp11(tmp12, obj11);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
