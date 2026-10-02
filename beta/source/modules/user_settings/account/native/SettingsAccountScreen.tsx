// Module ID: 14201
// Function ID: 14202
// Name: SettingsAccountScreen
// Dependencies: [32, 19, 17, 14202, 7421, 14203, 21, 4837, 588, 1491, 5918, 5896, 14204, 4833, 1127, 5282, 5040, 14205, 1987, 558, 576, 504, 14230, 6367, 6009, 5997, 14231, 10874, 14232, 14235, 11235, 5297, 2]

// Module 14201 (SettingsAccountScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl4 from "intl" /* 1127 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import useMountEffectDefault from "useMountEffect" /* 5297 */;
import FastImageDefault from "FastImage" /* 5896 */;
import TableRowGroup from "TableRowGroup" /* 5997 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6009 */;
import MFAUtils from "MFAUtils" /* 6367 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11235 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14231 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 14232 */;
import SettingLayoutDefault from "SettingLayout" /* 14235 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14202 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let obj2;
let unpackModuleId;
function PasswordlessUpsell() {
  let Card;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let tmp2;
  const tmp = closure_13();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  let obj2 = { style: tmp.upsellPasswordless, children: closure_10(Card, obj3) };
  obj3 = { border: "none", shadow: "none", children: closure_11(View, obj4) };
  obj4 = { style: { flexDirection: "row", gap: 8 }, children: items };
  const obj5 = { style: { width: 70, height: 70 }, children: closure_10(tmp2, obj6) };
  Card = require("Card/Card").Card;
  obj6 = { source: require("AssetRegistry"), resizeMode: "contain", style: tmp.upsellImagePasswordless };
  tmp2 = FastImageDefault;
  items = [closure_10(View, obj5), ];
  const obj7 = { style: { flex: 1 }, children: closure_11(View, obj8) };
  obj8 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: items1 };
  const obj9 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: intl.string(require("intl").t["+Svv46"]) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items1 = [closure_10(Heading, obj9), , ];
  const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(require("intl").t.S0g2K9) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[1] = closure_10(Text, obj10);
  const obj11 = { style: { flexDirection: "row" }, children: items2 };
  const obj12 = {
    text: intl3.string(require("intl").t.piGf5c),
    onPress() {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { navigation, initialRouteName: WebAuthnScreens.REGISTER, showNav: true };
      obj.pushLazy(asyncRequire(14205, dependencyMap.paths), obj2);
    },
    size: "sm"
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items2 = [closure_10(Button, obj12), closure_10(View, {})];
  items1[2] = closure_11(View, obj11);
  items[1] = closure_10(View, obj7);
  return closure_10(View, obj2);
}
function getAccountSettings() {
  let intl;
  let intl2;
  let items;
  let items2;
  let items3;
  let items4;
  const obj = { label: intl.string(intl4.t.e262Nn), settings: items };
  intl = intl4.intl;
  items = [, , , , , , ];
  ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = MobileUserSettings);
  const items1 = [obj, , , ];
  const obj2 = { label: authStore(closure_15, {}), settings: items2 };
  items2 = [, , , , , ];
  ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = MobileUserSettings);
  items1[1] = obj2;
  const obj3 = { label: authStore(closure_16, {}), settings: items3 };
  items3 = [, ];
  ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
  items1[2] = obj3;
  const obj4 = { label: intl2.string(intl4.t["5V0AkP"]), settings: items4 };
  intl2 = intl4.intl;
  items4 = [, ];
  ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
  items1[3] = obj4;
  return items1;
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { upsellPasswordless: obj2, upsellImagePasswordless: { height: "100%", width: "100%" } };
obj2 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let intl;
  let items2;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp19;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [WebAuthnStore];
    const fn = function o() {
      const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const tmp7 = _slicedToArray(tmpResult.useStateFromStoresObject(tmp4, tmp5), 2);
  _require = tmp9;
  const first = tmp7[0];
  const tmpResult2 = tmp(14230);
  const isUserVerified = tmpResult2.useIsUserVerified();
  const tmp11 = tmp(6367).hasWebAuthn && isUserVerified && tmp7[1] && !first;
  if (cResult[2] !== tmp7[1]) {
    const fn2 = function u() {
      const tmp = closure_0;
      if (!tmp) {
        const obj = WebAuthnActionCreators;
        const webAuthnCredentials = obj.fetchWebAuthnCredentials();
      }
    };
    const items1 = [tmp7[1]];
    cResult[2] = tmp7[1];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp13 = items1;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const effect = react.useEffect(tmp12, tmp13);
  if (cResult[5] !== tmp11) {
    const tmp16 = tmp11 && closure_10(PasswordlessUpsell, {});
    cResult[5] = tmp11;
    cResult[6] = tmp16;
    tmp15 = tmp16;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(tmp(1127).t.fuTmEJ) };
    const TableRowGroupTitle = tmp(5997).TableRowGroupTitle;
    intl = tmp(1127).intl;
    const tmp21 = closure_10(TableRowGroupTitle, obj2);
    cResult[7] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp15) {
    const obj3 = { children: items2 };
    items2 = [tmp15, tmp19];
    const tmp25 = closure_11(closure_12, obj3);
    cResult[8] = tmp15;
    cResult[9] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[9];
  }
  return tmp22;
}) : (() => {
  let first;
  let intl;
  let items3;
  let tmp = first;
  let obj = first(504);
  let items = [WebAuthnStore];
  const tmp3 = _slicedToArray(obj.useStateFromStoresObject(items, () => {
    const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  let closure_1 = tmp5;
  const obj2 = first(14230);
  const isUserVerified = obj2.useIsUserVerified();
  const items1 = [tmp3[1], first, isUserVerified];
  const memo = react.useMemo(() => {
    const tmp = MFAUtils.hasWebAuthn && isUserVerified && closure_1 && !first;
    return tmp;
  }, items1);
  const items2 = [tmp3[1]];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      const obj = WebAuthnActionCreators;
      const webAuthnCredentials = obj.fetchWebAuthnCredentials();
    }
  }, items2);
  let tmp11 = memo;
  const tmp10 = closure_12;
  const tmp9 = closure_11;
  if (memo) {
    tmp11 = closure_10(PasswordlessUpsell, {});
  }
  const obj3 = { children: items3 };
  items3 = [tmp11, ];
  const obj4 = { title: intl.string(tmp(1127).t.fuTmEJ) };
  const TableRowGroupTitle = tmp(5997).TableRowGroupTitle;
  intl = tmp(1127).intl;
  items3[1] = closure_10(TableRowGroupTitle, obj4);
  return tmp9(tmp10, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = TinyBroncoSettingsPredicate;
  const isTinyBroncoSettingsEnabled = obj2.useIsTinyBroncoSettingsEnabled();
  if (cResult[0] !== isTinyBroncoSettingsEnabled) {
    const intl = tmp(1127).intl;
    const string = intl.string;
    const t = tmp(1127).t;
    const stringResult = string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]);
    cResult[0] = isTinyBroncoSettingsEnabled;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj3 = { title: tmp5 };
    const tmp9 = authStore(TableRowGroup.TableRowGroupTitle, obj3);
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  const obj = TinyBroncoSettingsPredicate;
  const isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  const obj2 = { title: string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) };
  return authStore(TableRowGroupTitle, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault };
    const createList = tmp(10874).createList;
    SettingBuilders;
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp12 = authStore(SettingLayoutDefault, obj3);
    cResult[1] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[1];
  }
  return tmp9;
}) : (() => {
  const node = react.useMemo(() => {
    const obj = require("SettingBuilders");
    const obj2 = { sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault };
    return obj.createList(obj2);
  }, []);
  return authStore(SettingLayoutDefault, { node });
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = SafetyHubActionCreatorsAll;
      const safetyHubData = obj.getSafetyHubData();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = authStore(closure_18, {});
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  useMountEffectDefault(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
  });
  return authStore(closure_18, {});
}));
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;
