// Module ID: 12369
// Function ID: 96131
// Name: mapToUser
// Dependencies: [5, 57, 31, 27, 1849, 6689, 653, 33, 4130, 689, 566, 12370, 44, 1327, 8822, 12371, 1212, 3843, 12372, 5464, 5484, 675, 6690, 4098, 12373, 1934, 3830, 5186, 4126, 5085, 12374, 12375, 8823, 5586, 4543, 5187, 8425, 8825, 2]
// Exports: default

// Module 12369 (mapToUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import metadata from "metadata";
import { View } from "RedesignBottomSheetTitleHeaderBase";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function mapToUser(arg0) {
  const items = [arg0, user.getUser(arg0)];
  return items;
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.searchBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.searchBarRowContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.header = { height: require("_createForOfIteratorHelperLoose").space.PX_64 };
let obj2 = { height: require("_createForOfIteratorHelperLoose").space.PX_64 };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.centeredContainer = { alignItems: "center" };
let obj4 = { height: 200, width: 180, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.errorImage = obj4;
let obj5 = { height: 200, width: 240, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.emptyImage = obj5;
let obj3 = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_48 };
const result = require("result").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet() {
  let _slicedToArray;
  let headerSize;
  let renderHeader;
  let tmp7;
  let tmp = memo2();
  const ref = memo.useRef(null);
  let obj = ref(first[10]);
  let items = [fetchUsers];
  const stateFromStores = obj.useStateFromStores(items, () => fetchUsers.getReferralsRemaining());
  const tmp4 = callback(memo.useState(""), 2);
  const tmp5 = callback(memo.useState([]), 2);
  first = tmp5[0];
  let _isNativeReflectConstruct = tmp5[1];
  const arr3 = stateFromStores(first[11])(tmp4[0], 400);
  [tmp7, _slicedToArray] = callback(memo.useState(false), 2);
  stateFromStores(first[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [first];
  memo = memo.useMemo(() => {
    let mapped;
    if (null != first) {
      mapped = first.map(callback);
    }
    return new Map(mapped);
  }, items1);
  const items2 = [memo];
  const memo1 = memo.useMemo(() => {
    const found = Array.from(memo.values()).filter(ref(first[13]).isNotNullish);
    return found.map(stateFromStores(first[14]));
  }, items2);
  const items3 = [tmp4[0]];
  const layoutEffect = memo.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToTop(false);
    }
  }, items3);
  let obj1 = ref(first[15]);
  const referralProgramEligibleUsers = obj1.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  const eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  const resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [first, resendUsers];
  memo2 = memo.useMemo(() => first.filter((arg0) => !outer1_11.has(arg0)), items4);
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = memo.useMemo(() => {
    let tmp = isFetching;
    if (isFetching) {
      tmp = !hasError;
    }
    if (tmp) {
      tmp = 0 === eligibleUsers.length;
    }
    return tmp;
  }, items5);
  let intl = ref(first[16]).intl;
  const tmp6 = callback(memo.useState(false), 2);
  callback = memo.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => {
      const index = arr.indexOf(user.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(user.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  const items6 = [callback, memo1];
  const items7 = [eligibleUsers];
  const callback1 = memo.useCallback((arg0) => {
    const user = eligibleUsers.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = ref(first[17]).AccessibilityAnnouncer;
      const intl = ref(first[16]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(ref(first[16]).t.srlxB8, obj));
    }
  }, items6);
  const memo4 = memo.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, callback, first, resendUsers, stateFromStores, memo2];
  const callback2 = memo.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = memo.useCallback((arg0, row) => {
    let obj = ref(first[18]);
    obj = { eligibleUsers, row, selectedUserIds: first, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser: callback };
    return obj.buildReferralUserRow(obj);
  }, items8);
  let stringResult = intl.string(ref(first[16]).t.DXgoi2);
  const analyticsLocations = stateFromStores(first[19])(stateFromStores(first[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  const items9 = [analyticsLocations];
  let closure_15 = memo.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items9);
  const items10 = [stateFromStores];
  obj = { style: tmp.header };
  const memo5 = memo.useMemo(() => {
    if (0 === stateFromStores) {
      const intl2 = ref(first[16]).intl;
      let stringResult = intl2.string(ref(first[16]).t.SY9tyI);
    } else {
      const intl = ref(first[16]).intl;
      stringResult = intl.string(ref(first[16]).t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  const items11 = [hasError(ref(first[27]).BottomSheetTitleHeader, { title: memo5 }), ];
  obj = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  items11[1] = hasError(ref(first[28]).Text, obj);
  obj.children = items11;
  if (hasError) {
    obj1 = { style: tmp.centeredContainer };
    const obj2 = {};
    const obj3 = { uri: stateFromStores(first[30]) };
    obj2.source = obj3;
    obj2.resizeMode = "contain";
    obj2.style = tmp.errorImage;
    const items12 = [hasError(stateFromStores(first[29]), obj2), , ];
    const obj4 = { variant: "heading-xl/bold", style: tmp.subtitle };
    const intl4 = ref(first[16]).intl;
    obj4.children = intl4.string(ref(first[16]).t.a9HOKg);
    items12[1] = hasError(ref(first[28]).Text, obj4);
    const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle };
    const intl5 = ref(first[16]).intl;
    obj5.children = intl5.string(ref(first[16]).t.JjjeZb);
    items12[2] = hasError(ref(first[28]).Text, obj5);
    obj1.children = items12;
    let tmp25 = resendUsers(memo1, obj1);
    const tmp38 = stateFromStores(first[29]);
  } else {
    tmp25 = tmp23;
    if (tmp24) {
      const obj6 = { style: tmp.centeredContainer };
      const obj7 = {};
      const obj8 = { uri: stateFromStores(first[31]) };
      obj7.source = obj8;
      obj7.resizeMode = "contain";
      obj7.style = tmp.emptyImage;
      const items13 = [hasError(stateFromStores(first[29]), obj7), , ];
      const obj9 = { variant: "heading-xl/bold", style: tmp.subtitle };
      let intl2 = ref(first[16]).intl;
      obj9.children = intl2.string(ref(first[16]).t["PFp+aJ"]);
      items13[1] = hasError(ref(first[28]).Text, obj9);
      const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle };
      const intl3 = ref(first[16]).intl;
      obj10.children = intl3.string(ref(first[16]).t.eBIGB4);
      items13[2] = hasError(ref(first[28]).Text, obj10);
      obj6.children = items13;
      tmp25 = resendUsers(memo1, obj6);
      const tmp31 = stateFromStores(first[29]);
    }
    tmp24 = 0 === eligibleUsers.length && arr3.length > 0;
  }
  const tmp21 = stateFromStores(first[19]);
  let obj14 = ref(first[32]);
  const obj11 = { actions: [] };
  let prop;
  if (!tmp40) {
    prop = tmp.searchBarRowContainer;
  }
  obj11.style = prop;
  const userListActionsProps = obj14.useUserListActionsProps(obj11);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = memo.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj12 = { style: items15 };
  items15 = [tmp.footer];
  tmp40 = tmp4[0].trim().length > 0;
  const obj13 = { size: "lg" };
  const intl6 = ref(first[16]).intl;
  obj13.text = intl6.string(ref(first[16]).t.ItpQxk);
  obj13.onPress = function onPress() {
    callback2(Array.from(memo.values()));
  };
  obj13.loading = tmp7;
  obj13.disabled = tmp7;
  obj12.children = hasError(ref(first[34]).Button, obj13);
  const tmp45 = hasError(ref(first[33]).ActivityIndicator, {});
  const tmp46 = memo1;
  obj14 = { scrollable: true, startExpanded: true, header: tmp25, footer: hasError(memo1, obj12) };
  const obj15 = { style: tmp.searchBarContainer };
  const obj16 = { onChangeText: tmp4[1], onRemove: callback1, tags: memo1 };
  const tmp44Result = hasError(memo1, obj12);
  const tmp48 = resendUsers;
  const intl7 = ref(first[16]).intl;
  obj16.placeholder = intl7.string(ref(first[16]).t.Kd5RaI);
  obj15.children = hasError(stateFromStores(first[36]), obj16);
  const items16 = [hasError(memo1, obj15), , ];
  let tmp50 = null;
  if (memo3) {
    tmp50 = tmp45;
  }
  items16[1] = tmp50;
  items16[2] = hasError(ref(first[37]).UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  obj14.children = items16;
  return tmp48(ref(first[35]).BottomSheet, obj14);
};
