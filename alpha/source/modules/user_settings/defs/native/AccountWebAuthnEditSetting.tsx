// Module ID: 15963
// Function ID: 15964
// Name: AccountWebAuthnEditSetting
// Dependencies: [8308, 1087, 11155, 1128, 15964, 2]

// Module 15963 (AccountWebAuthnEditSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.UBBwwF);
  },
  parent: MobileUserSettings.ACCOUNT_WEB_AUTHN_VIEW,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.WEBAUTHN_EDIT,
    getComponent() {
      return require("WebAuthnEditStep").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnEditSetting.tsx");

export default route;
