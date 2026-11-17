// Module ID: 18506
// Function ID: 18507
// Name: DesignSystemDragHandleSetting
// Dependencies: [9213, 1072, 12612, 18507, 2]

// Module 18506 (DesignSystemDragHandleSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Drag Handle";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_DRAG_HANDLE,
    getComponent() {
      return require("UserSettingsDesignSystemDragHandle").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemDragHandleSetting.tsx");

export default route;
