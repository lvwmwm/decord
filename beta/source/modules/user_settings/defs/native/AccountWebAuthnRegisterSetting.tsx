// Module ID: 16092
// Function ID: 16093
// Name: AccountWebAuthnRegisterSetting
// Dependencies: [8712, 1071, 11942, 1112, 16093, 2]

// Module 16092 (AccountWebAuthnRegisterSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
