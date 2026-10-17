// Module ID: 16871
// Function ID: 16872
// Name: DesignSystemTagGroupSetting
// Dependencies: [8260, 1087, 11065, 16872, 2]

// Module 16871 (DesignSystemTagGroupSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Tag Group";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TAG_GROUP,
    getComponent() {
      return require("UserSettingsDesignSystemTagGroup").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemTagGroupSetting.tsx");

export default route;
