// Module ID: 16228
// Function ID: 16229
// Name: GuildSettingsModalMemberApplications
// Dependencies: [19, 17, 5854, 21, 4836, 576, 4678, 4832, 16229, 1397, 5917, 1177, 1613, 16234, 4658, 16235, 504, 1115, 8179, 7678, 6461, 2]

// Module 16228 (GuildSettingsModalMemberApplications)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16229 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5854 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, joinRequest;

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
const memoResult = react.memo((user) => {
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
  const children = [metroImportDefault(Text, { variant: "text-md/semibold", children: username }), ];
  let tmp5Result = null != globalName;
  if (tmp5Result) {
    const obj2 = { variant: "text-xs/medium", children: user.username };
    tmp5Result = tmp5(Text_Text.Text, obj2);
  }
  children[1] = tmp5Result;
  return tmp3(tmp4, { children });
});
const unpackModuleId = memoResult;
let closure_12 = react.memo((joinRequest) => {
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
      const TableRow = joinRequest(5917).TableRow;
      obj3 = { source: userAvatarSource, size: joinRequest(1177).AvatarSizes.SMALL };
      Avatar = joinRequest(1177).Avatar;
      obj4 = { user };
      return closure_7(TableRow, obj2);
    }
  }
});
const memoResult1 = react.memo(function GuildSettingsModalMemberApplications(arg0) {
  let applicationStatus;
  let closure_1;
  let fetching;
  let guildId;
  let items4;
  let obj6;
  let obj9;
  let stringResult;
  let tmp13Result;
  ({ guildId, applicationStatus } = arg0);
  let guildJoinRequests;
  let tmp = closure_10();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = applicationStatus(guildJoinRequests[13]);
  let obj2 = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[14]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj2).guildJoinRequests;
  const obj3 = applicationStatus(guildJoinRequests[15]);
  const fetchNextPage = obj3.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  const items = [GuildJoinRequestStore];
  const obj4 = applicationStatus(guildJoinRequests[16]);
  const stateFromStores = obj4.useStateFromStores(items, () => fetching.isFetching());
  const items1 = [applicationStatus, fetchNextPage];
  const onEndReached = fetchNextPage.useCallback(() => {
    fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
  }, items1);
  const items2 = [onEndReached, guildJoinRequests.length];
  const effect = fetchNextPage.useEffect(() => {
    if (0 === guildJoinRequests.length) {
      callback();
    }
  }, items2);
  const items3 = [guildJoinRequests.length];
  const callback1 = fetchNextPage.useCallback((joinRequest) => {
    const index = joinRequest.index;
    const obj = { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
    return metroImportDefault(closure_12, obj);
  }, items3);
  const callback2 = fetchNextPage.useCallback((joinRequestId) => joinRequestId.joinRequestId, []);
  const tmp2 = importDefault;
  if (stateFromStores) {
    if (0 === guildJoinRequests.length) {
      const obj5 = { style: tmp.spinnerContainer, children: closure_7(stateFromStores, obj6) };
      obj6 = { size: "large", color: tmp.spinner.color };
      return closure_7(onEndReached, obj5);
    }
  }
  if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = tmp4(tmp3[17]).intl;
    stringResult = intl2.string(tmp4(tmp3[17]).t["/wqiSv"]);
  } else if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = tmp4(tmp3[17]).intl;
    stringResult = intl.string(tmp4(tmp3[17]).t.bv82GS);
  } else if (applicationStatus(guildJoinRequests[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = tmp4(tmp3[17]).intl;
    stringResult = intl3.string(tmp4(tmp3[17]).t["7YSJ6f"]);
  }
  const obj7 = { style: tmp.containerInner, children: tmp13Result };
  const tmp11 = closure_8;
  const tmp12 = closure_9;
  const tmp14 = onEndReached;
  if (0 !== guildJoinRequests.length) {
    const obj8 = {
      keyExtractor: callback2,
      data: guildJoinRequests,
      renderItem: callback1,
      contentContainerStyle: obj9,
      onEndReached,
      ListFooterComponent() {
          let obj2;
          let tmp = null;
          if (stateFromStores) {
            const obj = { style: closure_1.footerSpinner, children: metroImportDefault(React3, obj2) };
            obj2 = { size: "small", color: closure_1.spinner.color };
            tmp = metroImportDefault(hasOwnProperty, obj);
          }
          return tmp;
        }
    };
    obj9 = { paddingBottom: bottom + tmp2(guildJoinRequests[5]).space.PX_16 };
    const FlashList = tmp4(tmp3[18]).FlashList;
    tmp13Result = tmp13(FlashList, obj8);
  } else {
    const obj10 = { Illustration: applicationStatus(guildJoinRequests[19]).NoResults, body: stringResult };
    const EmptyState = tmp4(tmp3[11]).EmptyState;
    tmp13Result = tmp13(EmptyState, obj10);
  }
  const obj11 = { children: items4 };
  items4 = [closure_7(tmp14, obj7), closure_7(tmp4(tmp3[20]).NavScrim, {})];
  return tmp11(tmp12, obj11);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
