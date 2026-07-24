// Module ID: 13673
// Function ID: 104968
// Name: PasswordlessUpsell
// Dependencies: [57, 31, 27, 13674, 7751, 11051, 653, 13675, 33, 4130, 689, 1456, 5167, 5085, 13676, 4126, 1212, 4543, 4337, 13677, 1934, 566, 13699, 9239, 5592, 5501, 10127, 13700, 13601, 13703, 6653, 8404, 675, 8799, 8797, 2]

// Module 13673 (PasswordlessUpsell)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useSegmentedControlState";
import { View } from "RestrictedAccountRedirect";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MobileSetting } from "MobileSetting";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { AnalyticEvents } from "ME";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "SegmentedControl";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function PasswordlessUpsell() {
  const tmp = callback4();
  let obj = _require(1456);
  _require = obj.useNavigation();
  obj = { style: tmp.upsellPasswordless };
  obj = { border: "none", shadow: "none" };
  const obj1 = { style: { flexDirection: "row", gap: 8 } };
  const obj2 = { style: { width: 70, height: 70 } };
  const obj3 = { source: _require(13676), resizeMode: "contain", style: tmp.upsellImagePasswordless };
  obj2.children = callback2(importDefault(5085), obj3);
  const items = [callback2(View, obj2), ];
  const obj4 = { style: { flex: 1 } };
  const obj5 = { style: { flexShrink: 1, width: "90%", gap: 8 } };
  const obj6 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary" };
  const intl = _require(1212).intl;
  obj6.children = intl.string(_require(1212).t["+Svv46"]);
  const items1 = [callback2(_require(4126).Heading, obj6), , ];
  const obj7 = { variant: "text-md/normal", color: "text-muted" };
  const intl2 = _require(1212).intl;
  obj7.children = intl2.string(_require(1212).t.S0g2K9);
  items1[1] = callback2(_require(4126).Text, obj7);
  const obj8 = { style: { flexDirection: "row" } };
  const obj9 = {};
  const intl3 = _require(1212).intl;
  obj9.text = intl3.string(_require(1212).t.piGf5c);
  obj9.onPress = function onPress() {
    let obj = outer1_1(outer1_2[18]);
    obj = { navigation: callback, initialRouteName: outer1_10.REGISTER, showNav: true };
    obj.pushLazy(callback(outer1_2[20])(outer1_2[19], outer1_2.paths), obj);
  };
  obj9.size = "sm";
  const items2 = [callback2(_require(4543).Button, obj9), callback2(View, {})];
  obj8.children = items2;
  items1[2] = callback3(View, obj8);
  obj5.children = items1;
  obj4.children = callback3(View, obj5);
  items[1] = callback2(View, obj4);
  obj1.children = items;
  obj.children = callback3(View, obj1);
  obj.children = callback2(_require(5167).Card, obj);
  return callback2(View, obj);
}
function AccountTwoFALabel() {
  let obj = first(isUserVerified[21]);
  let items = [_isNativeReflectConstruct];
  let tmp = callback(obj.useStateFromStoresObject(items, () => {
    const items = [outer1_6.hasCredentials, outer1_6.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp[0];
  const importDefault = tmp3;
  isUserVerified = first(isUserVerified[22]).useIsUserVerified();
  const items1 = [tmp[1], first, isUserVerified];
  const memo = importAllResult.useMemo(() => {
    let tmp = first(isUserVerified[23]).hasWebAuthn && isUserVerified && closure_1;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp[1]];
  const effect = importAllResult.useEffect(() => {
    if (!closure_1) {
      const webAuthnCredentials = first(isUserVerified[24]).fetchWebAuthnCredentials();
      const obj = first(isUserVerified[24]);
    }
  }, items2);
  obj = {};
  let tmp9 = memo;
  if (memo) {
    tmp9 = callback2(PasswordlessUpsell, {});
  }
  const items3 = [tmp9, ];
  obj = {};
  const intl = first(isUserVerified[16]).intl;
  obj.title = intl.string(first(isUserVerified[16]).t.fuTmEJ);
  items3[1] = callback2(first(isUserVerified[25]).TableRowGroupTitle, obj);
  obj.children = items3;
  return closure_12(closure_13, obj);
}
function AccountSecurityPage() {
  const node = importAllResult.useMemo(() => {
    let obj = outer1_0(outer1_2[26]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[16]).intl;
    obj.label = intl.string(outer1_0(outer1_2[16]).t.e262Nn);
    const items = [outer1_7.ACCOUNT_USERNAME, outer1_7.ACCOUNT_DISPLAY_NAME, outer1_7.ACCOUNT_EMAIL, outer1_7.ACCOUNT_PHONE, outer1_7.ACCOUNT_AGE_GROUP_ADULT, outer1_7.ACCOUNT_AGE_GROUP_NON_ADULT, outer1_7.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT];
    obj.settings = items;
    const items1 = [obj, , ];
    const items2 = [outer1_7.ACCOUNT_CHANGE_PASSWORD, outer1_7.ACCOUNT_WEB_AUTHN_VIEW, outer1_7.ACCOUNT_ENABLE_2FA, outer1_7.ACCOUNT_VIEW_BACKUP_CODES, outer1_7.ACCOUNT_REMOVE_2FA, outer1_7.ACCOUNT_SMS_BACKUP];
    items1[1] = { label: outer1_11(outer1_16, {}), settings: items2 };
    const obj2 = {};
    const intl2 = outer1_0(outer1_2[16]).intl;
    obj2.label = intl2.string(outer1_0(outer1_2[16]).t["5V0AkP"]);
    const items3 = [outer1_7.ACCOUNT_DISABLE, outer1_7.ACCOUNT_DELETE];
    obj2.settings = items3;
    items1[2] = obj2;
    obj.sections = items1.filter(Boolean);
    obj.ListHeaderComponent = outer1_1(outer1_2[27]);
    return obj.createList(obj);
  }, []);
  return callback2(importDefault(13601), { node });
}
function AccountStandingPage() {
  return callback2(require(13703) /* AutomatedUnderageAppealStatus */.default, { visible: true });
}
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let obj = {};
obj = { marginBottom: 16, borderColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.upsellPasswordless = obj;
obj.upsellImagePasswordless = { height: "100%", width: "100%" };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.controlContainer = _createForOfIteratorHelperLoose;
obj.pageContainer = { flex: 1 };
obj.standingPage = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const memoResult = importAllResult.memo(() => {
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  const _require = tmp2[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = _require(6653);
  const params = obj.useSettingNavigationRoute().params;
  let initialTab;
  if (null != params) {
    initialTab = params.initialTab;
  }
  let obj1 = _require(8404);
  obj = {};
  obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.Am9YHi);
  obj.id = AccountSettingsTabs.SECURITY;
  obj.page = callback2(AccountSecurityPage, {});
  const items = [obj, ];
  obj1 = {};
  const intl2 = _require(1212).intl;
  obj1.label = intl2.string(_require(1212).t["00Sfl/"]);
  obj1.id = AccountSettingsTabs.STANDING;
  obj1.page = callback2(View, { style: tmp.standingPage, children: callback2(AccountStandingPage, {}) });
  items[1] = obj1;
  obj.items = items;
  obj.pageWidth = tmp2[0];
  let num = 0;
  if (initialTab === AccountSettingsTabs.STANDING) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj.onSetActiveIndex = function onSetActiveIndex(arg0) {
    let obj = outer1_1(outer1_2[32]);
    obj = {};
    if (0 === arg0) {
      let STANDING = outer1_8.SECURITY;
    } else {
      STANDING = outer1_8.STANDING;
    }
    obj.target_tab_name = STANDING;
    obj.track(outer1_9.MY_ACCOUNT_PAGE_TAB_NAVIGATE, obj);
  };
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  const obj3 = {};
  const obj2 = { style: tmp.standingPage, children: callback2(AccountStandingPage, {}) };
  const items1 = [callback2(View, { style: tmp.controlContainer, onLayout: callback, children: callback2(_require(8799).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj4 = { style: tmp.controlContainer, onLayout: callback, children: callback2(_require(8799).SegmentedControl, { state: segmentedControlState }) };
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(_require(8797).SegmentedControlPages, { state: segmentedControlState }) });
  obj3.children = items1;
  return callback3(closure_13, obj3);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;
