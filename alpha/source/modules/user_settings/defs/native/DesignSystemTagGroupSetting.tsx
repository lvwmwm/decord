// Module ID: 18060
// Function ID: 18061
// Name: DesignSystemTagGroupSetting
// Dependencies: [8573, 1072, 11729, 18061, 2]

// Module 18060 (DesignSystemTagGroupSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
