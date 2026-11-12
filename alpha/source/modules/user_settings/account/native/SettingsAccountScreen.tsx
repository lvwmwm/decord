// Module ID: 17082
// Function ID: 17083
// Name: SettingsAccountScreen
// Dependencies: [32, 19, 17, 17083, 9135, 1072, 21, 5243, 575, 1499, 7381, 5957, 17084, 5866, 1113, 5873, 504, 17085, 7711, 6789, 7680, 17086, 12311, 17087, 17090, 5836, 14076, 2]

// Module 17082 (SettingsAccountScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useMountEffectDefault from "useMountEffect" /* 5836 */;
import FastImageDefault from "FastImage" /* 5957 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6789 */;
import TableRowGroup from "TableRowGroup" /* 7680 */;
import MFAUtils from "MFAUtils" /* 7711 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 14076 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17086 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 17087 */;
import SettingLayoutDefault from "SettingLayout" /* 17090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 17083 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let obj2;
let unpackModuleId;
function PasswordlessUpsell() {
  let Card;
  let closure_0;
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
  const obj = require("useNavigation");
  _require = obj.useNavigation();
  const obj2 = { style: tmp.upsellPasswordless, children: closure_10(Card, obj3) };
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
  const obj10 = { variant: "body-md/normal", color: "text-muted", children: intl2.string(require("intl").t.S0g2K9) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[1] = closure_10(Text, obj10);
  const obj11 = { style: { flexDirection: "row" }, children: items2 };
  const obj12 = {
    text: intl3.string(require("intl").t.piGf5c),
    onPress() {
      closure_0.push(UserSettingsSections.WEBAUTHN_REGISTER);
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
  const obj2 = first(17085);
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
  const obj4 = { title: intl.string(tmp(1113).t.fuTmEJ) };
  const TableRowGroupTitle = tmp(7680).TableRowGroupTitle;
  intl = tmp(1113).intl;
  items3[1] = closure_10(TableRowGroupTitle, obj4);
  return tmp9(tmp10, obj3);
}
function AccountStatusLabel() {
  const obj = AgeNoticeSettingsPredicate;
  const isAgeNoticeSettingsEnabled = obj.useIsAgeNoticeSettingsEnabled();
  const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  const obj2 = { title: string(isAgeNoticeSettingsEnabled ? t.GI2mea : t["16r9jm"]) };
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
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { upsellPasswordless: obj2, upsellImagePasswordless: { height: "100%", width: "100%" } };
obj2 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(function AccountSettingsScreen() {
  useMountEffectDefault(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
  });
  return authStore(AccountSecurityPage, {});
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;
