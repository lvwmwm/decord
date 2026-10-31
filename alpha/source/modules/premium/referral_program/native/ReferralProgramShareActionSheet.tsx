// Module ID: 15323
// Function ID: 15324
// Name: ReferralProgramShareActionSheet
// Dependencies: [5, 32, 19, 17, 1383, 7632, 1072, 21, 5014, 575, 504, 15324, 38, 1379, 10730, 15325, 1113, 5023, 15326, 7326, 7351, 1252, 7633, 5258, 15327, 1994, 5711, 7321, 5624, 5717, 15332, 15333, 10731, 6953, 5634, 5272, 9062, 10733, 2]
// Exports: default

// Module 15323 (ReferralProgramShareActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl8 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10730 */;
import ReferralProgramShareActionSheetUtils from "ReferralProgramShareActionSheetUtils" /* 15326 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7632 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, closure_2, trialCreationResult, v3;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
function mapToUser(arg0) {
  const items = [arg0, UserStore.getUser(arg0)];
  return items;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, searchBarRowContainer: obj3, header: obj4, subtitle: obj5, centeredContainer: { alignItems: "center" }, errorImage: size, emptyImage: size1, footer: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj4 = { height: nativeDefault.space.PX_64 };
obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
size = { height: 200, width: 180, marginVertical: nativeDefault.space.PX_16 };
size1 = { height: 200, width: 240, marginTop: nativeDefault.space.PX_16 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet(actionSheetKey) {
  let Button;
  let c5;
  let closure_4;
  let headerSize;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items11;
  let items12;
  let items13;
  let items15;
  let obj13;
  let obj18;
  let obj21;
  let obj8;
  let prop;
  let renderHeader;
  let selectedUserIds;
  let str2;
  let tmp11;
  let tmp27Result;
  let tmp7;
  let tmp9Result4;
  let str = actionSheetKey.actionSheetKey;
  if (str === undefined) {
    str = "referral-program-share-action-sheet";
  }
  let stateFromStores;
  selectedUserIds = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let eligibleUsers;
  let resendUsers;
  let tmp = resendUsers();
  let obj = react;
  const ref = react.useRef(null);
  const tmp3 = str;
  const tmp4 = stateFromStores;
  let obj2 = str(stateFromStores[10]);
  let items = [eligibleUsers];
  stateFromStores = obj2.useStateFromStores(items, () => eligibleUsers.getReferralsRemaining());
  [str2, tmp7] = _slicedToArray(react.useState(""), 2);
  const tmp6 = _slicedToArray(react.useState(""), 2);
  [selectedUserIds, _slicedToArray] = react.useState([]);
  const arr3 = ref(stateFromStores[11])(str2, 400);
  const tmp10 = _slicedToArray(react.useState(false), 2);
  [tmp11, c5] = tmp10;
  ref(stateFromStores[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [selectedUserIds];
  const memo = react.useMemo(() => {
    let mapped;
    const _Map = Map;
    const arr = first;
    if (first != null) {
      mapped = arr.map(mapToUser);
    }
    const _Map1 = new _Map(mapped);
    return _Map1;
  }, items1);
  const items2 = [memo];
  const memo1 = react.useMemo(() => {
    const arr = Array.from(memo.values());
    const found = arr.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items2);
  const items3 = [str2];
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items3);
  const obj3 = str(stateFromStores[15]);
  const referralProgramEligibleUsers = obj3.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  const fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [selectedUserIds, resendUsers];
  const memo2 = react.useMemo(() => first.filter((item) => !set.has(item)), items4);
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = react.useMemo(() => isFetching && !hasError && 0 === eligibleUsers.length, items5);
  let intl = str(stateFromStores[16]).intl;
  let stringResult = intl.string(str(stateFromStores[16]).t.DXgoi2);
  const onSelectUser = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_4((arr) => {
      const index = arr.indexOf(id.id);
      const items = [...arr];
      const tmp = id;
      if (-1 === index) {
        items.push(tmp.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  const items6 = [onSelectUser, memo1];
  const items7 = [eligibleUsers];
  const callback1 = react.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl8.intl;
      const obj = { text: memo1[arg0].text };
      announce(intl.formatToPlainString(intl8.t.srlxB8, obj));
    }
  }, items6);
  const memo4 = react.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, onSelectUser, selectedUserIds, resendUsers, stateFromStores, memo2];
  const callback2 = react.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = react.useCallback((arg0, row) => {
    const obj = ReferralProgramShareActionSheetUtils;
    const obj2 = { eligibleUsers, row, selectedUserIds, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser };
    return obj.buildReferralUserRow(obj2);
  }, items8);
  const tmp25 = ref(stateFromStores[19]);
  const analyticsLocations = tmp25(ref(stateFromStores[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  const useCallback = react.useCallback;
  let closure_0 = selectedUserIds((selectedUsers) => {
    let location_stack;
    let c4 = 0;
    c5 = 0;
    let c3 = 0;
    return (function*(arg0, value) {
      let obj9;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              trialCreationResult = undefined;
              c3 = 1;
              v3(true);
              const obj4 = { location_stack };
              const obj7 = ref(paths[21]);
              obj7.track(constants.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, obj4);
              c4 = 2;
              v3 = 1;
              const obj6 = { value: obj9.createReferralTrials(selectedUsers.map((id) => id.id)), done: false };
              obj9 = selectedUsers(paths[22]);
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              v3(false);
              const presentError = selectedUsers(paths[26]).presentError;
              selectedUsers(paths[26]);
              const intl = selectedUsers(paths[16]).intl;
              presentError(intl.string(selectedUsers(paths[16]).t.R0RpRX));
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              return { value, done: true };
            } else {
              trialCreationResult = value;
              v3(false);
              const obj8 = { selectedUsers, trialCreationResult };
              const obj5 = ref(paths[23]);
              obj5.openLazy(selectedUsers(paths[25])(paths[24], paths.paths), selectedUsers, obj8);
              c3 = 0;
            }
            v3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp16) {
          if (0 === c3) {
            v3 = 3;
            throw tmp16;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  const items9 = [analyticsLocations, str];
  let closure_16 = useCallback(function() {
    return closure_0(...arguments);
  }, items9);
  const items10 = [stateFromStores];
  let obj4 = { style: tmp.header, children: items11 };
  const memo5 = react.useMemo(() => {
    let stringResult;
    if (0 === stateFromStores) {
      const intl2 = intl8.intl;
      stringResult = intl2.string(intl8.t.SY9tyI);
    } else {
      const intl = intl8.intl;
      stringResult = intl.string(intl8.t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  items11 = [isFetching(str(stateFromStores[27]).BottomSheetTitleHeader, { title: memo5 }), ];
  let obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  items11[1] = isFetching(str(stateFromStores[28]).Text, obj5);
  if (hasError) {
    let obj6 = { style: tmp.centeredContainer, children: items12 };
    let obj7 = { source: obj8, resizeMode: "contain", style: tmp.errorImage };
    obj8 = { uri: tmp9(tmp4[30]) };
    const tmp9Result = ref(tmp4[29]);
    items12 = [tmp29(tmp9Result, obj7), , ];
    let obj9 = { variant: "heading-xl/bold", style: tmp.subtitle, children: intl4.string(tmp3(tmp4[16]).t.a9HOKg) };
    const Text3 = tmp3(tmp4[28]).Text;
    intl4 = tmp3(tmp4[16]).intl;
    items12[1] = isFetching(Text3, obj9);
    const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: intl5.string(tmp3(tmp4[16]).t.JjjeZb) };
    const Text4 = tmp3(tmp4[28]).Text;
    intl5 = tmp3(tmp4[16]).intl;
    items12[2] = isFetching(Text4, obj10);
    tmp27Result = tmp27(tmp28, obj6);
  } else {
    tmp27Result = tmp30;
    const tmp31 = 0 === eligibleUsers.length && arr3.length > 0;
    if (tmp31) {
      const obj11 = { style: tmp.centeredContainer, children: items13 };
      const obj12 = { source: obj13, resizeMode: "contain", style: tmp.emptyImage };
      obj13 = { uri: ref(tmp4[31]) };
      const tmp9Result3 = ref(tmp4[29]);
      items13 = [tmp29(tmp9Result3, obj12), , ];
      const obj14 = { variant: "heading-xl/bold", style: tmp.subtitle, children: intl2.string(tmp3(tmp4[16]).t["PFp+aJ"]) };
      const Text = tmp3(tmp4[28]).Text;
      intl2 = tmp3(tmp4[16]).intl;
      items13[1] = isFetching(Text, obj14);
      const obj15 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: intl3.string(tmp3(tmp4[16]).t.eBIGB4) };
      const Text2 = tmp3(tmp4[28]).Text;
      intl3 = tmp3(tmp4[16]).intl;
      items13[2] = isFetching(Text2, obj15);
      tmp27Result = tmp27(tmp28, obj11);
    }
  }
  const obj16 = { actions: [], style: prop };
  prop = undefined;
  const tmp35 = str2.trim().length > 0;
  const useUserListActionsProps = tmp3(tmp4[32]).useUserListActionsProps;
  tmp3(tmp4[32]);
  if (!tmp35) {
    prop = tmp.searchBarRowContainer;
  }
  const userListActionsProps = useUserListActionsProps(obj16);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = obj.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj17 = { style: tmp.footer, children: isFetching(Button, obj18) };
  obj18 = {
    size: "lg",
    text: intl6.string(tmp3(tmp4[16]).t.ItpQxk),
    onPress() {
      closure_16(Array.from(memo.values()));
    },
    loading: tmp11,
    disabled: tmp11
  };
  const tmp29Result = isFetching(tmp3(tmp4[33]).ActivityIndicator, {});
  Button = tmp3(tmp4[34]).Button;
  intl6 = tmp3(tmp4[16]).intl;
  const obj19 = { scrollable: true, startExpanded: true, header: tmp27Result, footer: isFetching(memo, obj17), children: items15 };
  const obj20 = { style: tmp.searchBarContainer, children: isFetching(tmp9Result4, obj21) };
  BottomSheet = tmp3(tmp4[35]).BottomSheet;
  obj21 = { onChangeText: tmp7, onRemove: callback1, tags: memo1, placeholder: intl7.string(tmp3(tmp4[16]).t.Kd5RaI) };
  tmp9Result4 = ref(tmp4[36]);
  intl7 = tmp3(tmp4[16]).intl;
  items15 = [tmp29(tmp28, obj20), , ];
  let tmp43 = null;
  if (memo3) {
    tmp43 = tmp29Result;
  }
  items15[1] = tmp43;
  items15[2] = isFetching(tmp3(tmp4[37]).UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  return hasError(BottomSheet, obj19);
};
