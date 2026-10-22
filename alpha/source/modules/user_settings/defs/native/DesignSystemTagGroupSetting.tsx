// Module ID: 17090
// Function ID: 17091
// Name: DesignSystemTagGroupSetting
// Dependencies: [8318, 1087, 11181, 17091, 2]

// Module 17090 (DesignSystemTagGroupSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
