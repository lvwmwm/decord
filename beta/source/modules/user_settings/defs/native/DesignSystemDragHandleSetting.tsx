// Module ID: 17277
// Function ID: 17278
// Name: DesignSystemDragHandleSetting
// Dependencies: [8712, 1071, 11942, 17278, 2]

// Module 17277 (DesignSystemDragHandleSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
