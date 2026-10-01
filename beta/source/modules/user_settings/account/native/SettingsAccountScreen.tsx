// Module ID: 14213
// Function ID: 14214
// Name: SettingsAccountScreen
// Dependencies: [32, 19, 17, 14214, 7417, 14215, 21, 4836, 576, 1485, 5919, 5899, 14216, 4832, 1115, 5281, 5039, 14217, 1981, 504, 14242, 6370, 6014, 5999, 14243, 11006, 14244, 14247, 5298, 11360, 2]

// Module 14213 (SettingsAccountScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6014 */;
import MFAUtils from "MFAUtils" /* 6370 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11360 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14243 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 14244 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14214 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
      obj.pushLazy(asyncRequire(14217, dependencyMap.paths), obj2);
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
function AccountTwoFALabel() {
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
  const obj2 = first(14242);
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
  const obj4 = { title: intl.string(tmp(1115).t.fuTmEJ) };
  const TableRowGroupTitle = tmp(5999).TableRowGroupTitle;
  intl = tmp(1115).intl;
  items3[1] = closure_10(TableRowGroupTitle, obj4);
  return tmp9(tmp10, obj3);
}
function AccountStatusLabel() {
  const obj = TinyBroncoSettingsPredicate;
  const isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  const obj2 = { title: string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) };
  return authStore(TableRowGroupTitle, obj2);
}
function AccountSecurityPage() {
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    const obj = { sections: items1, ListHeaderComponent: SettingsAccountHeaderDefault };
    const obj2 = { label: intl.string(require("intl").t.e262Nn), settings: items };
    const createList = require("SettingBuilders").createList;
    require("SettingBuilders");
    intl = require("intl").intl;
    items = [, , , , , , ];
    ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = MobileUserSettings);
    items1 = [obj2, , , ];
    const obj3 = { label: closure_1_10(AccountTwoFALabel, {}), settings: items2 };
    items2 = [, , , , , ];
    ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = MobileUserSettings);
    items1[1] = obj3;
    const obj4 = { label: closure_1_10(AccountStatusLabel, {}), settings: items3 };
    items3 = [, ];
    ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
    items1[2] = obj4;
    const obj5 = { label: intl2.string(require("intl").t["5V0AkP"]), settings: items4 };
    intl2 = require("intl").intl;
    items4 = [, ];
    ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
    items1[3] = obj5;
    return createList(obj);
  }, []);
  return authStore(SettingLayoutDefault, { node });
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { upsellPasswordless: obj2, upsellImagePasswordless: { height: "100%", width: "100%" } };
obj2 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(() => {
  useMountEffectDefault(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
  });
  return authStore(AccountSecurityPage, {});
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;
