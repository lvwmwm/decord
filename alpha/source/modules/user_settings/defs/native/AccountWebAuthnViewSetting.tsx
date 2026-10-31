// Module ID: 16664
// Function ID: 16665
// Name: AccountWebAuthnViewSetting
// Dependencies: [19, 16568, 1383, 8432, 1072, 5958, 1113, 6748, 504, 11539, 16665, 2]

// Module 16664 (AccountWebAuthnViewSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6748 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import react from "react" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 16568 */;
import UserStore from "UserStore" /* 1383 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["0N1s81"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
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
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
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
  },
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
