// Module ID: 15716
// Function ID: 15717
// Name: AccountWebAuthnRegisterSetting
// Dependencies: [8210, 1085, 10991, 1126, 15717, 2]

// Module 15716 (AccountWebAuthnRegisterSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
