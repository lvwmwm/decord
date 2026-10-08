// Module ID: 16829
// Function ID: 16830
// Name: GuildSettingsModalMemberApplications
// Dependencies: [19, 17, 6122, 21, 5090, 587, 558, 576, 4922, 5086, 16830, 1414, 1200, 6184, 1630, 4902, 16835, 16836, 504, 1126, 8600, 8334, 6719, 2]

// Module 16829 (GuildSettingsModalMemberApplications)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16830 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6122 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

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
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MemberApplicationUser(user) {
  let items;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  user = user.user;
  if (cResult[0] !== user) {
    const obj2 = UserUtilsDefault;
    const globalName = obj2.getGlobalName(user);
    cResult[0] = user;
    cResult[1] = globalName;
    tmp4 = globalName;
  } else {
    tmp4 = cResult[1];
  }
  let username = tmp4;
  if (tmp4 == null) {
    username = user.username;
  }
  if (cResult[2] !== username) {
    const obj3 = { variant: "text-md/semibold", children: username };
    const tmp9 = metroImportDefault(Text_Text.Text, obj3);
    cResult[2] = username;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp10;
    if (cResult[5] === user) {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      let tmp13;
      if (cResult[8] === tmp10) {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
    const obj4 = { children: items };
    items = [tmp7, tmp10];
    const tmp16 = metroImportAll(hasOwnProperty, obj4);
    cResult[7] = tmp7;
    cResult[8] = tmp10;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  let tmp11 = null != tmp4;
  if (tmp11) {
    const obj5 = { variant: "text-xs/medium", children: user.username };
    tmp11 = metroImportDefault(tmp(5086).Text, obj5);
  }
  cResult[4] = tmp4;
  cResult[5] = user;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function MemberApplicationUser(user) {
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
}));
const unpackModuleId = memoResult;
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMemberApplication(joinRequest) {
  let end;
  let start;
  let tmp4;
  const obj = joinRequest(576);
  const cResult = obj.c(14);
  joinRequest = joinRequest.joinRequest;
  ({ start, end } = joinRequest);
  if (cResult[0] !== joinRequest) {
    const fn = function n() {
      openJoinRequestActionSheetDefault(joinRequest);
    };
    cResult[0] = joinRequest;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (null == joinRequest) {
    return null;
  } else {
    const user = joinRequest.user;
    if (null == user) {
      return null;
    } else {
      let tmp5;
      let tmp8;
      let tmp11;
      if (cResult[2] !== user) {
        let userAvatarSource = null;
        if (null != user) {
          const obj2 = AvatarUtilsDefault;
          userAvatarSource = obj2.getUserAvatarSource(user);
        }
        cResult[2] = user;
        cResult[3] = userAvatarSource;
        tmp5 = userAvatarSource;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { source: tmp5, size: joinRequest(1200).AvatarSizes.SMALL };
        const Avatar = tmp(1200).Avatar;
        const tmp10 = closure_7(Avatar, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== user) {
        const obj4 = { user };
        const tmp14 = closure_7(closure_11, obj4);
        cResult[6] = user;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === end) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === start) {
            if (cResult[11] === tmp8) {
              let tmp15;
              if (cResult[12] === tmp11) {
                tmp15 = cResult[13];
              }
              return tmp15;
            }
          }
        }
      }
      const obj5 = { arrow: true, icon: tmp8, label: tmp11, onPress: tmp4, start, end };
      const tmp17 = closure_7(joinRequest(6184).TableRow, obj5);
      cResult[8] = end;
      cResult[9] = tmp4;
      cResult[10] = start;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp17;
      tmp15 = tmp17;
    }
  }
}) : (function GuildSettingsModalMemberApplication(joinRequest) {
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
      const TableRow = joinRequest(6184).TableRow;
      obj3 = { source: userAvatarSource, size: joinRequest(1200).AvatarSizes.SMALL };
      Avatar = joinRequest(1200).Avatar;
      obj4 = { user };
      return closure_7(TableRow, obj2);
    }
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMemberApplications(arg0) {
  let applicationStatus;
  let closure_1;
  let fetching;
  let guildId;
  let guildJoinRequests;
  let tmp21;
  let tmp = applicationStatus;
  let obj = applicationStatus(guildJoinRequests[7]);
  const cResult = obj.c(43);
  ({ guildId, applicationStatus } = arg0);
  const tmp4 = closure_10();
  importDefault = tmp4;
  const bottom = require("useSafeAreaInsets")().bottom;
  if (cResult[0] === applicationStatus) {
    let tmp5;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    const tmpResult = tmp(guildJoinRequests[16]);
    guildJoinRequests = tmpResult.useSortedMemberApplications(tmp5).guildJoinRequests;
    if (cResult[3] === guildId) {
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[4] === guildJoinRequests) {
        tmp6 = cResult[5];
      }
      const tmpResult3 = tmp(guildJoinRequests[17]);
      const fetchNextPage = tmpResult3.usePaginatedMemberApplications(tmp6).fetchNextPage;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildJoinRequestStore];
        const fn = function y() {
          return fetching.isFetching();
        };
        cResult[6] = items;
        cResult[7] = fn;
        tmp9 = fn;
        tmp8 = items;
      } else {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const tmpResult4 = tmp(guildJoinRequests[18]);
      const stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp9);
      if (cResult[8] === applicationStatus) {
        let tmp12;
        if (cResult[9] === fetchNextPage) {
          tmp12 = cResult[10];
        }
        let closure_5 = tmp12;
        if (cResult[11] === tmp12) {
          let tmp13;
          let tmp14;
          if (cResult[12] === guildJoinRequests.length) {
            tmp13 = cResult[13];
            tmp14 = cResult[14];
          }
          const effect = fetchNextPage.useEffect(tmp13, tmp14);
          if (cResult[15] !== guildJoinRequests.length) {
            class J {
              constructor(joinRequest) {
                const index = joinRequest.index;
                const obj = { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
                return metroImportDefault(closure_12, obj);
              }
            }
            cResult[15] = guildJoinRequests.length;
            cResult[16] = J;
          } else {
            class J {
              constructor(joinRequest) {
                const index = joinRequest.index;
                const obj = { joinRequest: joinRequest.item, start: 0 === index, end: index === guildJoinRequests.length - 1 };
                return metroImportDefault(closure_12, obj);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(joinRequestId) {
                return joinRequestId.joinRequestId;
              }
            }
            cResult[17] = F;
          } else {
            class F {
              constructor(joinRequestId) {
                return joinRequestId.joinRequestId;
              }
            }
          }
          if (stateFromStores) {
            class F {
              constructor(joinRequestId) {
                return joinRequestId.joinRequestId;
              }
            }
            if (0 === guildJoinRequests.length) {
              class F {
                constructor(joinRequestId) {
                  return joinRequestId.joinRequestId;
                }
              }
              if (cResult[20] === tmp4.spinnerContainer) {
                class F {
                  constructor(joinRequestId) {
                    return joinRequestId.joinRequestId;
                  }
                }
                return tmp21;
              }
              let obj2 = { style: tmp4.spinnerContainer, children: tmp20 };
              const tmp24 = closure_7(closure_5, obj2);
              cResult[20] = tmp4.spinnerContainer;
              cResult[21] = tmp20;
              cResult[22] = tmp24;
              tmp21 = tmp24;
            }
          }
          if (cResult[23] === stateFromStores) {
            class F {
              constructor(joinRequestId) {
                return joinRequestId.joinRequestId;
              }
            }
          }
          function renderFooter() {
            let obj2;
            let tmp = null;
            if (stateFromStores) {
              const obj = { style: closure_1.footerSpinner, children: metroImportDefault(React3, obj2) };
              obj2 = { size: "small", color: closure_1.spinner.color };
              tmp = metroImportDefault(hasOwnProperty, obj);
            }
            return tmp;
          }
          cResult[23] = stateFromStores;
          cResult[24] = tmp4.footerSpinner;
          cResult[25] = tmp4.spinner;
          cResult[26] = renderFooter;
        }
        const fn3 = function x() {
          if (0 === guildJoinRequests.length) {
            closure_5();
          }
        };
        const items1 = [tmp12, guildJoinRequests.length];
        cResult[11] = tmp12;
        cResult[12] = guildJoinRequests.length;
        cResult[13] = fn3;
        cResult[14] = items1;
        tmp14 = items1;
        tmp13 = fn3;
      }
      const fn2 = function q() {
        fetchNextPage(MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC, applicationStatus);
      };
      cResult[8] = applicationStatus;
      cResult[9] = fetchNextPage;
      cResult[10] = fn2;
      tmp12 = fn2;
    }
    const obj3 = { guildId, guildJoinRequests };
    cResult[3] = guildId;
    cResult[4] = guildJoinRequests;
    cResult[5] = obj3;
    tmp6 = obj3;
  }
  const obj4 = { guildId, applicationStatus, sortOrder: tmp(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  cResult[0] = applicationStatus;
  cResult[1] = guildId;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function GuildSettingsModalMemberApplications(arg0) {
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
  let obj = applicationStatus(guildJoinRequests[16]);
  let obj2 = { guildId, applicationStatus, sortOrder: applicationStatus(guildJoinRequests[15]).GuildJoinRequestSortOrders.TIMESTAMP_DESC };
  guildJoinRequests = obj.useSortedMemberApplications(obj2).guildJoinRequests;
  const obj3 = applicationStatus(guildJoinRequests[17]);
  const fetchNextPage = obj3.usePaginatedMemberApplications({ guildId, guildJoinRequests }).fetchNextPage;
  const items = [GuildJoinRequestStore];
  const obj4 = applicationStatus(guildJoinRequests[18]);
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
  if (applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const intl2 = tmp4(tmp3[19]).intl;
    stringResult = intl2.string(tmp4(tmp3[19]).t["/wqiSv"]);
  } else if (applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const intl = tmp4(tmp3[19]).intl;
    stringResult = intl.string(tmp4(tmp3[19]).t.bv82GS);
  } else if (applicationStatus(guildJoinRequests[15]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const intl3 = tmp4(tmp3[19]).intl;
    stringResult = intl3.string(tmp4(tmp3[19]).t["7YSJ6f"]);
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
      ListFooterComponent: function renderFooter() {
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
    const FlashList = tmp4(tmp3[20]).FlashList;
    tmp13Result = tmp13(FlashList, obj8);
  } else {
    const obj10 = { Illustration: applicationStatus(guildJoinRequests[21]).NoResults, body: stringResult };
    const EmptyState = tmp4(tmp3[12]).EmptyState;
    tmp13Result = tmp13(EmptyState, obj10);
  }
  const obj11 = { children: items4 };
  items4 = [closure_7(tmp14, obj7), closure_7(tmp4(tmp3[22]).NavScrim, {})];
  return tmp11(tmp12, obj11);
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx");

export default memoResult1;
export const MemberApplicationUser = memoResult;
