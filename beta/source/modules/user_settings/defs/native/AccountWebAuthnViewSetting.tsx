// Module ID: 15065
// Function ID: 15066
// Name: AccountWebAuthnViewSetting
// Dependencies: [19, 14921, 1376, 8238, 1078, 558, 568, 5110, 1119, 6836, 504, 11594, 14924, 2]

// Module 15065 (AccountWebAuthnViewSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6836 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14921 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      if (!flag) {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.v740sh);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.uggF7o);
        AlertActionCreatorsDefault.show(obj2);
      }
      return flag;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useCallback(() => {
  currentUser = currentUser.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.verified;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    const obj2 = { title: null, body: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.v740sh);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.uggF7o);
    AlertActionCreatorsDefault.show(obj2);
  }
  return flag;
}, []));
const SettingBuilders = fn(11594);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (!WebAuthnStore.hasFetchedCredentials()) {
    const webAuthnCredentials = tmp(6836).fetchWebAuthnCredentials();
    const tmpResult = tmp(6836);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp4];
    const fn = function s() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  tmp4 = WebAuthnStore;
  return initialize.useStateFromStores(tmp6, tmp7);
}) : (() => {
  if (!WebAuthnStore.hasFetchedCredentials()) {
    const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
  }
  const items = [WebAuthnStore];
  return initialize.useStateFromStores(items, () => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
  });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.y7SXYX);
  },
  parent: fn(8238).MobileUserSettings.ACCOUNT,
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = tmp(6836).fetchWebAuthnCredentials();
      const tmpResult = tmp(6836);
    }
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [tmp4];
      const fn = function s() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp6 = items;
      tmp7 = fn;
    } else {
      [tmp6, tmp7] = cResult;
    }
    tmp4 = WebAuthnStore;
    return initialize.useStateFromStores(tmp6, tmp7);
  }) : (() => {
    if (!WebAuthnStore.hasFetchedCredentials()) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
    const items = [WebAuthnStore];
    return initialize.useStateFromStores(items, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.n8mZ0X, { count: credentials.getCredentials().length });
    });
  }),
  unsearchable: true,
  screen: {
    route: fn(1078).UserSettingsSections.WEBAUTHN_VIEW,
    getComponent() {
      return require("UserSettingsWebAuthn").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
