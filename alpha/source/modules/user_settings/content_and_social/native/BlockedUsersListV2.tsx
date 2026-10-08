// Module ID: 14883
// Function ID: 14884
// Name: BlockedUsersListV2
// Dependencies: [19, 17, 4717, 21, 5090, 587, 558, 576, 6841, 6865, 1200, 14884, 1126, 5086, 14888, 6267, 6803, 504, 2]

// Module 14883 (BlockedUsersListV2)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import Blocked from "Blocked" /* 14884 */;
import BlockedUserRowV2Default from "BlockedUserRowV2" /* 14888 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp;
const get_initialized = tmp(504);
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, sectionLabelStyle: obj3 };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedUsersList(userIds) {
  let intl3;
  let items;
  let list;
  let sectionLabelStyle;
  let tmp26;
  let obj = react2;
  const cResult = obj.c(21);
  userIds = userIds.userIds;
  const tmp4 = closure_7();
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.BLOCKED_USERS).analyticsLocations;
  if (0 === userIds.length) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { Illustration: Blocked.Blocked, body: intl3.string(intl4.t.nnsFif) };
      const EmptyState = tmp(1200).EmptyState;
      intl3 = tmp(1126).intl;
      const tmp32 = hasOwnProperty(EmptyState, obj2);
      cResult[0] = tmp32;
      first = tmp32;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let tmp6;
    ({ list, sectionLabelStyle } = tmp4);
    if (cResult[1] !== userIds.length) {
      const intl = tmp(1126).intl;
      const obj3 = { numberOfBlockedUsers: userIds.length };
      const formatToPlainStringResult = intl.formatToPlainString(intl4.t["c+JVEB"], obj3);
      cResult[1] = userIds.length;
      cResult[2] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    } else {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.sectionLabelStyle) {
      let tmp8;
      let tmp12;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(intl4.t.PFOUKW);
        cResult[6] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== userIds) {
        let tmp15;
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(arg0) {
              obj = { userId: userIds };
              return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
            }
          }
          cResult[9] = B;
          tmp15 = B;
        } else {
          class B {
            constructor(arg0) {
              obj = { userId: userIds };
              return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
            }
          }
        }
        const mapped = userIds.map(tmp15);
        cResult[7] = userIds;
        cResult[8] = mapped;
      } else {
        class B {
          constructor(arg0) {
            obj = { userId: userIds };
            return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
          }
        }
      }
      if (cResult[10] !== tmp14) {
        class B {
          constructor(arg0) {
            obj = { userId: userIds };
            return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
          }
        }
        const obj4 = { hasIcons: true, children: tmp14 };
        cResult[10] = tmp14;
        cResult[11] = hasOwnProperty(TableRowGroup2.TableRowGroup, obj4, tmp12);
        const tmp18 = hasOwnProperty(TableRowGroup2.TableRowGroup, obj4, tmp12);
      } else {
        class B {
          constructor(arg0) {
            obj = { userId: userIds };
            return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
          }
        }
      }
      if (cResult[12] === tmp8) {
        class B {
          constructor(arg0) {
            obj = { userId: userIds };
            return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
          }
        }
        if (cResult[15] === tmp4.list) {
          class B {
            constructor(arg0) {
              obj = { userId: userIds };
              return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
            }
          }
          if (cResult[18] === analyticsLocations) {
            class B {
              constructor(arg0) {
                obj = { userId: userIds };
                return closure_1_5(closure_1_1(closure_1_2[14]), obj, userIds);
              }
            }
            return tmp26;
          }
          const obj5 = { value: analyticsLocations, children: tmp23 };
          const tmp28 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj5);
          cResult[18] = analyticsLocations;
          cResult[19] = tmp23;
          cResult[20] = tmp28;
          tmp26 = tmp28;
        }
        const obj6 = { bottom: true, style: list, children: tmp19 };
        cResult[15] = tmp4.list;
        cResult[16] = tmp19;
        cResult[17] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj6);
        const tmp25 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj6);
      }
      const obj7 = { children: items };
      items = [tmp8, tmp17];
      cResult[12] = tmp8;
      cResult[13] = tmp17;
      cResult[14] = metroRequire(ScrollView, obj7);
      const tmp22 = metroRequire(ScrollView, obj7);
    }
    const obj8 = { style: sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: tmp6 };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj8);
    cResult[3] = tmp4.sectionLabelStyle;
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
}) : (function BlockedUsersList(userIds) {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let obj6;
  let tmp7;
  userIds = userIds.userIds;
  const tmp = closure_7();
  useAnalyticsLocationsDefault;
  if (0 === userIds.length) {
    let obj = { Illustration: Blocked.Blocked, body: intl.string(intl4.t.nnsFif) };
    const EmptyState = native.EmptyState;
    intl = intl4.intl;
    tmp7 = hasOwnProperty(EmptyState, obj);
  } else {
    const obj2 = { value: tmp4, children: hasOwnProperty(SafeAreaPaddingView, obj3) };
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    obj3 = { bottom: true, style: tmp.list, children: metroRequire(ScrollView, obj4) };
    obj4 = { children: items };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const obj5 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: intl2.formatToPlainString(intl4.t["c+JVEB"], obj6) };
    const Text = Text_Text.Text;
    intl2 = intl4.intl;
    obj6 = { numberOfBlockedUsers: userIds.length };
    items = [hasOwnProperty(Text, obj5), ];
    const obj7 = {
      hasIcons: true,
      children: userIds.map((userId) => {
          const obj = { userId };
          return closure_1_5(BlockedUserRowV2Default, obj, userId);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const intl3 = intl4.intl;
    items[1] = hasOwnProperty(TableRowGroup, obj7, intl3.string(intl4.t.PFOUKW));
    tmp7 = hasOwnProperty(AnalyticsLocationProvider, obj2);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedBlockedUsersList() {
  let blockedIDs;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function l() {
      return blockedIDs.getBlockedIDs();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const obj2 = { userIds: stateFromStoresArray };
    const tmp11 = hasOwnProperty(closure_8, obj2);
    cResult[2] = stateFromStoresArray;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function ConnectedBlockedUsersList() {
  let blockedIDs;
  const items = [RelationshipStore];
  const obj = get_initialized;
  const obj2 = { userIds: obj.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()) };
  return hasOwnProperty(closure_8, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default tmp5;
