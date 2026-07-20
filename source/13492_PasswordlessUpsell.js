// Module ID: 13492
// Function ID: 102410
// Name: PasswordlessUpsell
// Dependencies: []

// Module 13492 (PasswordlessUpsell)
function PasswordlessUpsell() {
  const tmp = callback5();
  let obj = callback(dependencyMap[11]);
  const callback = obj.useNavigation();
  obj = { style: tmp.upsellPasswordless };
  obj = {};
  const obj1 = { style: { 0: null, 9223372036854775807: null } };
  const obj2 = { style: { aze: null, azj: null } };
  const obj3 = { source: callback(dependencyMap[14]), resizeMode: "contain", style: tmp.upsellImagePasswordless };
  obj2.children = callback3(importDefault(dependencyMap[13]), obj3);
  const items = [callback3(View, obj2), ];
  const obj4 = { style: { flex: 1 } };
  const obj5 = { style: {} };
  const obj6 = { INTEGRATION_CREATE: 240, ConstraintReasonCode: "center" };
  const intl = callback(dependencyMap[16]).intl;
  obj6.children = intl.string(callback(dependencyMap[16]).t.+Svv46);
  const items1 = [callback3(callback(dependencyMap[15]).Heading, obj6), , ];
  const obj7 = {};
  const intl2 = callback(dependencyMap[16]).intl;
  obj7.children = intl2.string(callback(dependencyMap[16]).t.S0g2K9);
  items1[1] = callback3(callback(dependencyMap[15]).Text, obj7);
  const obj8 = { style: { flexDirection: "row" } };
  const obj9 = {};
  const intl3 = callback(dependencyMap[16]).intl;
  obj9.text = intl3.string(callback(dependencyMap[16]).t.piGf5c);
  obj9.onPress = function onPress() {
    let obj = callback2(paths[18]);
    obj = { navigation: callback, initialRouteName: constants.REGISTER, showNav: true };
    obj.pushLazy(callback(paths[20])(paths[19], paths.paths), obj);
  };
  obj9.size = "sm";
  const items2 = [callback3(callback(dependencyMap[17]).Button, obj9), callback3(View, {})];
  obj8.children = items2;
  items1[2] = callback4(View, obj8);
  obj5.children = items1;
  obj4.children = callback4(View, obj5);
  items[1] = callback3(View, obj4);
  obj1.children = items;
  obj.children = callback4(View, obj1);
  obj.children = callback3(callback(dependencyMap[12]).Card, obj);
  return callback3(View, obj);
}
function AccountTwoFALabel() {
  let obj = arg1(dependencyMap[21]);
  const items = [closure_6];
  const tmp = callback2(obj.useStateFromStoresObject(items, () => {
    const items = [closure_6.hasCredentials, closure_6.hasFetchedCredentials()];
    return items;
  }), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp3;
  const isUserVerified = arg1(dependencyMap[22]).useIsUserVerified();
  const dependencyMap = isUserVerified;
  const items1 = [tmp[1], first, isUserVerified];
  const memo = importAllResult.useMemo(() => {
    let tmp = first(isUserVerified[23]).hasWebAuthn && isUserVerified && tmp3;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp[1]];
  const effect = importAllResult.useEffect(() => {
    if (!tmp3) {
      const webAuthnCredentials = first(isUserVerified[24]).fetchWebAuthnCredentials();
      const obj = first(isUserVerified[24]);
    }
  }, items2);
  obj = {};
  let tmp9 = memo;
  if (memo) {
    tmp9 = callback3(PasswordlessUpsell, {});
  }
  const items3 = [tmp9, ];
  obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj.title = intl.string(arg1(dependencyMap[16]).t.fuTmEJ);
  items3[1] = callback3(arg1(dependencyMap[25]).TableRowGroupTitle, obj);
  obj.children = items3;
  return closure_12(closure_13, obj);
}
function AccountSecurityPage() {
  const node = importAllResult.useMemo(() => {
    let obj = callback(closure_2[26]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[16]).intl;
    obj.label = intl.string(callback(closure_2[16]).t.e262Nn);
    const items = [closure_7.ACCOUNT_USERNAME, closure_7.ACCOUNT_DISPLAY_NAME, closure_7.ACCOUNT_EMAIL, closure_7.ACCOUNT_PHONE, closure_7.ACCOUNT_AGE_GROUP_ADULT, closure_7.ACCOUNT_AGE_GROUP_NON_ADULT, closure_7.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT];
    obj.settings = items;
    const items1 = [obj, , ];
    const items2 = [closure_7.ACCOUNT_CHANGE_PASSWORD, closure_7.ACCOUNT_WEB_AUTHN_VIEW, closure_7.ACCOUNT_ENABLE_2FA, closure_7.ACCOUNT_VIEW_BACKUP_CODES, closure_7.ACCOUNT_REMOVE_2FA, closure_7.ACCOUNT_SMS_BACKUP];
    items1[1] = { label: callback3(closure_16, {}), settings: items2 };
    const obj2 = {};
    const intl2 = callback(closure_2[16]).intl;
    obj2.label = intl2.string(callback(closure_2[16]).t.5V0AkP);
    const items3 = [closure_7.ACCOUNT_DISABLE, closure_7.ACCOUNT_DELETE];
    obj2.settings = items3;
    items1[2] = obj2;
    obj.sections = items1.filter(Boolean);
    obj.ListHeaderComponent = callback2(closure_2[27]);
    return obj.createList(obj);
  }, []);
  return callback3(importDefault(dependencyMap[28]), { node });
}
function AccountStandingPage() {
  return callback3(arg1(dependencyMap[29]).default, { visible: true });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const MobileSetting = arg1(dependencyMap[4]).MobileSetting;
const AccountSettingsTabs = arg1(dependencyMap[5]).AccountSettingsTabs;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const WebAuthnScreens = arg1(dependencyMap[7]).WebAuthnScreens;
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, borderColor: importDefault(dependencyMap[10]).colors.REDESIGN_INPUT_CONTROL_SELECTED, borderRadius: importDefault(dependencyMap[10]).radii.lg };
obj.upsellPasswordless = obj;
obj.upsellImagePasswordless = { <string:1140607356>: 30271555, <string:1751293292>: 22092032 };
obj1 = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_16 };
obj.controlContainer = obj1;
obj.pageContainer = { flex: 1 };
const tmp2 = arg1(dependencyMap[8]);
obj.standingPage = { paddingTop: importDefault(dependencyMap[10]).space.PX_24 };
let closure_14 = obj1.createStyles(obj);
const obj2 = { paddingTop: importDefault(dependencyMap[10]).space.PX_24 };
const memoResult = importAllResult.memo(() => {
  const tmp = callback5();
  const tmp2 = callback2(importAllResult.useState(0), 2);
  let callback = tmp2[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = callback(dependencyMap[30]);
  const params = obj.useSettingNavigationRoute().params;
  let initialTab;
  if (null != params) {
    initialTab = params.initialTab;
  }
  let obj1 = callback(dependencyMap[31]);
  obj = {};
  obj = {};
  const intl = callback(dependencyMap[16]).intl;
  obj.label = intl.string(callback(dependencyMap[16]).t.Am9YHi);
  obj.id = AccountSettingsTabs.SECURITY;
  obj.page = callback3(AccountSecurityPage, {});
  const items = [obj, ];
  obj1 = {};
  const intl2 = callback(dependencyMap[16]).intl;
  obj1.label = intl2.string(callback(dependencyMap[16]).t.00Sfl/);
  obj1.id = AccountSettingsTabs.STANDING;
  obj1.page = callback3(View, { style: tmp.standingPage, children: callback3(AccountStandingPage, {}) });
  items[1] = obj1;
  obj.items = items;
  obj.pageWidth = tmp2[0];
  let num = 0;
  if (initialTab === AccountSettingsTabs.STANDING) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj.onSetActiveIndex = function onSetActiveIndex(arg0) {
    let obj = callback2(closure_2[32]);
    obj = {};
    if (0 === arg0) {
      let STANDING = constants.SECURITY;
    } else {
      STANDING = constants.STANDING;
    }
    obj.target_tab_name = STANDING;
    obj.track(constants2.MY_ACCOUNT_PAGE_TAB_NAVIGATE, obj);
  };
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  const obj3 = {};
  const obj2 = { style: tmp.standingPage, children: callback3(AccountStandingPage, {}) };
  const items1 = [callback3(View, { style: tmp.controlContainer, onLayout: callback, children: callback3(callback(dependencyMap[33]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj4 = { style: tmp.controlContainer, onLayout: callback, children: callback3(callback(dependencyMap[33]).SegmentedControl, { state: segmentedControlState }) };
  items1[1] = callback3(View, { style: tmp.pageContainer, children: callback3(callback(dependencyMap[34]).SegmentedControlPages, { state: segmentedControlState }) });
  obj3.children = items1;
  return callback4(closure_13, obj3);
});
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;
