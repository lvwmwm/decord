// Module ID: 16934
// Function ID: 16935
// Name: AccountWebAuthnRegisterSetting
// Dependencies: [8573, 1072, 11729, 1113, 16935, 2]

// Module 16934 (AccountWebAuthnRegisterSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.vrOCCk);
  },
  parent: MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.WEBAUTHN_REGISTER,
    getComponent() {
      return require("WebAuthnRegisterStep").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnRegisterSetting.tsx");

export default route;
