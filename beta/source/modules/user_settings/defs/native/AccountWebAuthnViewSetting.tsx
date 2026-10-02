// Module ID: 14321
// Function ID: 14322
// Name: AccountWebAuthnViewSetting
// Dependencies: [19, 14202, 1378, 7421, 1086, 558, 576, 5204, 1127, 6009, 504, 10874, 14205, 2]

// Module 14321 (AccountWebAuthnViewSetting)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6009 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14202 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      let intl;
      let intl2;
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        const obj = { title: intl.string(intl3.t.v740sh), body: intl2.string(intl3.t.uggF7o) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl3.intl;
        intl2 = intl3.intl;
        show(obj);
      }
      return flag;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useCallback(() => {
  let intl;
  let intl2;
  currentUser = currentUser.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.verified;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    const obj = { title: intl.string(intl3.t.v740sh), body: intl2.string(intl3.t.uggF7o) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj);
  }
  return flag;
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let credentials;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(2);
  const tmp4 = WebAuthnStore;
  if (!WebAuthnStore.hasFetchedCredentials()) {
    const tmpResult = WebAuthnActionCreators;
    const webAuthnCredentials = tmpResult.fetchWebAuthnCredentials();
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp4];
    const fn = function s() {
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { count: credentials.getCredentials().length };
      const n8mZ0X = intl3.t.n8mZ0X;
      return formatToPlainString(n8mZ0X, obj);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult2 = get_initialized;
  return tmpResult2.useStateFromStores(tmp6, tmp7);
}) : (() => {
  let credentials;
  const tmp = WebAuthnStore;
  if (!WebAuthnStore.hasFetchedCredentials()) {
    let obj = WebAuthnActionCreators;
    const webAuthnCredentials = obj.fetchWebAuthnCredentials();
  }
  const items = [tmp];
  const obj2 = get_initialized;
  return obj2.useStateFromStores(items, () => {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { count: credentials.getCredentials().length };
    const n8mZ0X = intl3.t.n8mZ0X;
    return formatToPlainString(n8mZ0X, obj);
  });
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.y7SXYX);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("UserSettingsWebAuthn").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
