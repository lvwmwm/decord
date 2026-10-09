// Module ID: 14971
// Function ID: 14972
// Name: AccountWebAuthnViewSetting
// Dependencies: [19, 14876, 1390, 7974, 1085, 558, 576, 5298, 1126, 5946, 504, 10629, 14972, 2]

// Module 14971 (AccountWebAuthnViewSetting)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 5946 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14876 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountCanUseWebAuthnView() {
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
}) : (function useAccountCanUseWebAuthnView() {
  return react.useCallback(() => {
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
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountSecurityKeysSettingTrailing() {
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
}) : (function useAccountSecurityKeysSettingTrailing() {
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
    return intl.string(intl3.t["0N1s81"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("PasskeyInitStep").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
