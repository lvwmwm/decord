// Module ID: 17065
// Function ID: 17066
// Name: DesignSystemSegmentedControlSetting
// Dependencies: [8318, 1087, 11181, 17066, 2]

// Module 17065 (DesignSystemSegmentedControlSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
    getComponent() {
      return require("UserSettingsDesignSystemSegmentedControl").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
