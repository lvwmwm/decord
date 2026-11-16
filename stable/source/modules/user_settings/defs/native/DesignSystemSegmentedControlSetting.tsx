// Module ID: 18146
// Function ID: 18147
// Name: DesignSystemSegmentedControlSetting
// Dependencies: [8536, 1072, 11717, 18147, 2]

// Module 18146 (DesignSystemSegmentedControlSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
