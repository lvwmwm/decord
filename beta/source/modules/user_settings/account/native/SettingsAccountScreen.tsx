// Module ID: 14920
// Function ID: 14921
// Name: SettingsAccountScreen
// Dependencies: [32, 19, 17, 14921, 8238, 14922, 21, 4758, 580, 1488, 5824, 5802, 14923, 4754, 1119, 5188, 4961, 14924, 1984, 558, 568, 504, 14945, 7192, 6836, 5903, 14946, 11594, 14950, 14953, 12012, 5203, 2]

// Module 14920 (SettingsAccountScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import FastImageDefault from "FastImage" /* 5802 */;
import TableRowGroup from "TableRowGroup" /* 5903 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6836 */;
import MFAUtils from "MFAUtils" /* 7192 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12012 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14946 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 14950 */;
import SettingLayoutDefault from "SettingLayout" /* 14953 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14921 */;

require = fn;
function PasswordlessUpsell() {
  const tmp = closure_13();
  _require = require("useNavigation").useNavigation();
  const obj2 = { style: tmp.upsellPasswordless, children: null };
  const obj3 = { border: "none", shadow: "none", children: null };
  const obj4 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj5 = { style: { width: 70, height: 70 }, children: null };
  const obj6 = { source: null, resizeMode: "contain", style: null };
  const obj = require("useNavigation");
  obj6.source = require("module_14923");
  obj6.style = tmp.upsellImagePasswordless;
  obj5.children = closure_10(FastImageDefault, obj6);
  const items = [closure_10(View, obj5), ];
  const obj7 = { style: { flex: 1 }, children: null };
  const obj8 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: null };
  const obj9 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj9.children = intl.string(require("util").t["+Svv46"]);
  const items1 = [closure_10(require("Text/Text").Heading, obj9), , ];
  const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj10.children = intl2.string(require("util").t.S0g2K9);
  items1[1] = closure_10(require("Text/Text").Text, obj10);
  const obj11 = { style: { flexDirection: "row" }, children: null };
  const obj12 = { text: null, onPress: null, size: "sm" };
  const intl3 = require("util").intl;
  obj12.text = intl3.string(require("util").t.piGf5c);
  obj12.onPress = function onPress() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14924, dependencyMap.paths), { navigation, initialRouteName: WebAuthnScreens.REGISTER, showNav: true });
  };
  const items2 = [closure_10(require("components/Button/Button").Button, obj12), closure_10(View, {})];
  obj11.children = items2;
  items1[2] = closure_11(View, obj11);
  obj8.children = items1;
  obj7.children = closure_11(View, obj8);
  items[1] = closure_10(View, obj7);
  obj4.children = items;
  obj3.children = closure_11(View, obj4);
  obj2.children = closure_10(require("Card").Card, obj3);
  return closure_10(View, obj2);
}
function getAccountSettings() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.e262Nn);
  const items = [, , , , , , ];
  ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , ];
  const obj2 = { label: v65535(closure_15, {}), settings: null };
  const items2 = [, , , , , ];
  ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = MobileUserSettings);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = { label: v65535(closure_16, {}), settings: null };
  const items3 = [, ];
  ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { label: null, settings: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t["5V0AkP"]);
  const items4 = [, ];
  ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
  obj4.settings = items4;
  items1[3] = obj4;
  return items1;
}
const View = fn(17).View;
const MobileUserSettings = fn(8238).MobileUserSettings;
const WebAuthnScreens = fn(14922).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj = { upsellPasswordless: { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, upsellImagePasswordless: { height: "100%", width: "100%" } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(10);
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
  let obj = require("c");
  const tmp7 = _slicedToArray(require("initialize").useStateFromStoresObject(tmp4, tmp5), 2);
  _require = tmp8;
  const tmpResult = require("initialize");
  const isUserVerified = require("SettingsAccountUtils").useIsUserVerified();
  const tmp10 = require("MFAUtils").hasWebAuthn && isUserVerified && tmp7[1] && !tmp7[0];
  if (cResult[2] !== tmp7[1]) {
    const fn2 = function u() {
      if (!closure_0) {
        const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
      }
    };
    const items1 = [tmp8];
    cResult[2] = tmp8;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  if (cResult[5] !== tmp10) {
    let tmp15 = tmp10;
    if (tmp10) {
      tmp15 = closure_10(PasswordlessUpsell, {});
    }
    cResult[5] = tmp10;
    cResult[6] = tmp15;
    let tmp14 = tmp15;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.fuTmEJ);
    const tmp20 = closure_10(tmp(5903).TableRowGroupTitle, obj2);
    cResult[7] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp14) {
    const obj3 = { children: null };
    const items2 = [tmp14, tmp18];
    obj3.children = items2;
    const tmp24 = closure_11(closure_12, obj3);
    cResult[8] = tmp14;
    cResult[9] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  return tmp21;
}) : (() => {
  let items = [WebAuthnStore];
  const tmp3 = _slicedToArray(first(504).useStateFromStoresObject(items, () => {
    const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  let obj = first(504);
  const isUserVerified = first(14945).useIsUserVerified();
  const items1 = [tmp3[1], first, isUserVerified];
  const memo = noop.useMemo(() => {
    let tmp = MFAUtils.hasWebAuthn && isUserVerified && closure_1;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp3[1]];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
  }, items2);
  let tmp11 = memo;
  if (memo) {
    tmp11 = closure_10(PasswordlessUpsell, {});
  }
  const obj3 = { children: null };
  const items3 = [tmp11, ];
  const obj4 = { title: null };
  const intl = tmp(1119).intl;
  obj4.title = intl.string(first(1119).t.fuTmEJ);
  items3[1] = closure_10(first(5903).TableRowGroupTitle, obj4);
  obj3.children = items3;
  return closure_11(closure_12, obj3);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  if (cResult[0] !== isTinyBroncoSettingsEnabled) {
    const intl = tmp(1119).intl;
    const t = tmp(1119).t;
    const stringResult = intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]);
    cResult[0] = isTinyBroncoSettingsEnabled;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj3 = { title: tmp5 };
      const tmp10 = v65535(tmp(5903).TableRowGroupTitle, obj3);
      cResult[2] = tmp5;
      cResult[3] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    return tmp8;
  }
}) : (() => {
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  const intl = util.intl;
  const t = util.t;
  const tmp2 = v65535;
  return tmp2(TableRowGroup.TableRowGroupTitle, { title: intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault };
    const list = SettingBuilders.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmpResult = SettingBuilders;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp11 = v65535(SettingLayoutDefault, obj3);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  return tmp8;
}) : (() => {
  const node = noop.useMemo(() => {
    const obj = require("SettingBuilders");
    return obj.createList({ sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault });
  }, []);
  return v65535(SettingLayoutDefault, { node });
});
ReactCompilerGating = fn(558);
let obj3 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = v65535(closure_18, {});
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  useMountEffectDefault(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
  });
  return v65535(closure_18, {});
}));
