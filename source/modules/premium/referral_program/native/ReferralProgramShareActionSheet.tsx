// Module ID: 12250
// Function ID: 93952
// Name: mapToUser
// Dependencies: []
// Exports: default

// Module 12250 (mapToUser)
function mapToUser(arg0) {
  const items = [arg0, user.getUser(arg0)];
  return items;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_24 };
obj.searchBarContainer = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.searchBarRowContainer = { paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
const obj1 = { paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.header = { height: importDefault(dependencyMap[9]).space.PX_64 };
const obj2 = { height: importDefault(dependencyMap[9]).space.PX_64 };
obj.subtitle = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_8 };
obj.centeredContainer = { alignItems: "center" };
const obj3 = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_8 };
obj.errorImage = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
const obj4 = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
obj.emptyImage = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
const obj5 = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_48 };
let closure_12 = obj.createStyles(obj);
const obj6 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_48 };
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet() {
  let headerSize;
  let renderHeader;
  let tmp7;
  const tmp = callback2();
  const ref = React.useRef(null);
  const arg1 = ref;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => fetchUsers.getReferralsRemaining());
  const importDefault = stateFromStores;
  const tmp4 = callback(React.useState(""), 2);
  const tmp5 = callback(React.useState([]), 2);
  const first = tmp5[0];
  const dependencyMap = first;
  let closure_3 = tmp5[1];
  const arr3 = importDefault(dependencyMap[11])(tmp4[0], 400);
  [tmp7, closure_4] = callback(React.useState(false), 2);
  importDefault(dependencyMap[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [first];
  const memo = React.useMemo(() => {
    let mapped;
    if (null != first) {
      mapped = first.map(callback);
    }
    return new Map(mapped);
  }, items1);
  const React = memo;
  const items2 = [memo];
  const memo1 = React.useMemo(() => {
    const found = Array.from(memo.values()).filter(ref(first[13]).isNotNullish);
    return found.map(stateFromStores(first[14]));
  }, items2);
  const View = memo1;
  const items3 = [tmp4[0]];
  const layoutEffect = React.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToTop(false);
    }
  }, items3);
  let obj1 = arg1(dependencyMap[15]);
  const referralProgramEligibleUsers = obj1.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  const eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  let closure_7 = eligibleUsers;
  const fetchUsers = referralProgramEligibleUsers.fetchUsers;
  closure_8 = fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const AnalyticEvents = isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  const resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [first, resendUsers];
  const memo2 = React.useMemo(() => first.filter((arg0) => !set.has(arg0)), items4);
  let callback2 = memo2;
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = React.useMemo(() => {
    let tmp = isFetching;
    if (isFetching) {
      tmp = !hasError;
    }
    if (tmp) {
      tmp = 0 === eligibleUsers.length;
    }
    return tmp;
  }, items5);
  const intl = arg1(dependencyMap[16]).intl;
  const tmp6 = callback(React.useState(false), 2);
  const callback = React.useCallback((arg0) => {
    callback((arr) => {
      const index = arr.indexOf(arr.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(arr.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  const mapToUser = callback;
  const items6 = [callback, memo1];
  const items7 = [eligibleUsers];
  const callback1 = React.useCallback((arg0) => {
    const user = eligibleUsers.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = ref(first[17]).AccessibilityAnnouncer;
      const intl = ref(first[16]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(ref(first[16]).t.srlxB8, obj));
    }
  }, items6);
  const memo4 = React.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, callback, first, resendUsers, stateFromStores, memo2];
  callback2 = React.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = React.useCallback((arg0, row) => {
    let obj = ref(first[18]);
    obj = { eligibleUsers, row, selectedUserIds: first, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser: callback };
    return obj.buildReferralUserRow(obj);
  }, items8);
  const stringResult = intl.string(arg1(dependencyMap[16]).t.DXgoi2);
  const analyticsLocations = importDefault(dependencyMap[19])(importDefault(dependencyMap[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  const items9 = [analyticsLocations];
  let closure_15 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items9);
  const items10 = [stateFromStores];
  obj = { style: tmp.header };
  const memo5 = React.useMemo(() => {
    if (0 === stateFromStores) {
      const intl2 = ref(first[16]).intl;
      let stringResult = intl2.string(ref(first[16]).t.SY9tyI);
    } else {
      const intl = ref(first[16]).intl;
      stringResult = intl.string(ref(first[16]).t.2dVCLl);
    }
    return stringResult;
  }, items10);
  const items11 = [hasError(arg1(dependencyMap[27]).BottomSheetTitleHeader, { title: memo5 }), ];
  obj = { style: tmp.subtitle, children: stringResult };
  items11[1] = hasError(arg1(dependencyMap[28]).Text, obj);
  obj.children = items11;
  if (hasError) {
    obj1 = { style: tmp.centeredContainer };
    const obj2 = {};
    const obj3 = { uri: importDefault(dependencyMap[30]) };
    obj2.source = obj3;
    obj2.resizeMode = "contain";
    obj2.style = tmp.errorImage;
    const items12 = [hasError(importDefault(dependencyMap[29]), obj2), , ];
    const obj4 = { variant: "heading-xl/bold", style: tmp.subtitle };
    const intl4 = arg1(dependencyMap[16]).intl;
    obj4.children = intl4.string(arg1(dependencyMap[16]).t.a9HOKg);
    items12[1] = hasError(arg1(dependencyMap[28]).Text, obj4);
    const obj5 = { style: tmp.subtitle };
    const intl5 = arg1(dependencyMap[16]).intl;
    obj5.children = intl5.string(arg1(dependencyMap[16]).t.JjjeZb);
    items12[2] = hasError(arg1(dependencyMap[28]).Text, obj5);
    obj1.children = items12;
    let tmp25 = resendUsers(View, obj1);
    const tmp38 = importDefault(dependencyMap[29]);
  } else {
    tmp25 = tmp23;
    if (tmp24) {
      const obj6 = { style: tmp.centeredContainer };
      const obj7 = {};
      const obj8 = { uri: importDefault(dependencyMap[31]) };
      obj7.source = obj8;
      obj7.resizeMode = "contain";
      obj7.style = tmp.emptyImage;
      const items13 = [hasError(importDefault(dependencyMap[29]), obj7), , ];
      const obj9 = { variant: "heading-xl/bold", style: tmp.subtitle };
      const intl2 = arg1(dependencyMap[16]).intl;
      obj9.children = intl2.string(arg1(dependencyMap[16]).t.PFp+aJ);
      items13[1] = hasError(arg1(dependencyMap[28]).Text, obj9);
      const obj10 = { style: tmp.subtitle };
      const intl3 = arg1(dependencyMap[16]).intl;
      obj10.children = intl3.string(arg1(dependencyMap[16]).t.eBIGB4);
      items13[2] = hasError(arg1(dependencyMap[28]).Text, obj10);
      obj6.children = items13;
      tmp25 = resendUsers(View, obj6);
      const tmp31 = importDefault(dependencyMap[29]);
    }
    const tmp24 = 0 === eligibleUsers.length && arr3.length > 0;
  }
  const tmp21 = importDefault(dependencyMap[19]);
  let obj14 = arg1(dependencyMap[32]);
  const obj11 = { actions: [] };
  let prop;
  if (!tmp40) {
    prop = tmp.searchBarRowContainer;
  }
  obj11.style = prop;
  const userListActionsProps = obj14.useUserListActionsProps(obj11);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = React.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj12 = { style: items15 };
  const items15 = [tmp.footer];
  const tmp40 = tmp4[0].trim().length > 0;
  const obj13 = { size: "lg" };
  const intl6 = arg1(dependencyMap[16]).intl;
  obj13.text = intl6.string(arg1(dependencyMap[16]).t.ItpQxk);
  obj13.onPress = function onPress() {
    callback2(Array.from(memo.values()));
  };
  obj13.loading = tmp7;
  obj13.disabled = tmp7;
  obj12.children = hasError(arg1(dependencyMap[34]).Button, obj13);
  const tmp45 = hasError(arg1(dependencyMap[33]).ActivityIndicator, {});
  const tmp46 = View;
  obj14 = { ind: null, PX_8: null, header: tmp25, footer: hasError(View, obj12) };
  const obj15 = { style: tmp.searchBarContainer };
  const obj16 = { onChangeText: tmp4[1], onRemove: callback1, tags: memo1 };
  const tmp44Result = hasError(View, obj12);
  const tmp48 = resendUsers;
  const intl7 = arg1(dependencyMap[16]).intl;
  obj16.placeholder = intl7.string(arg1(dependencyMap[16]).t.Kd5RaI);
  obj15.children = hasError(importDefault(dependencyMap[36]), obj16);
  const items16 = [hasError(View, obj15), , ];
  let tmp50 = null;
  if (memo3) {
    tmp50 = tmp45;
  }
  items16[1] = tmp50;
  items16[2] = hasError(arg1(dependencyMap[37]).UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  obj14.children = items16;
  return tmp48(arg1(dependencyMap[35]).BottomSheet, obj14);
};
