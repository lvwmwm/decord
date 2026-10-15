// Module ID: 15728
// Function ID: 15729
// Name: AccountWebAuthnSuccessSetting
// Dependencies: [8210, 1085, 10991, 1126, 15729, 2]

// Module 15728 (AccountWebAuthnSuccessSetting)
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
    return intl.string(intl2.t["7wPZln"]);
  },
  parent: MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.WEBAUTHN_SUCCESS,
    getComponent() {
      return require("WebAuthnSuccessStep").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnSuccessSetting.tsx");

export default route;
