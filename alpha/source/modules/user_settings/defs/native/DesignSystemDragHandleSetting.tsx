// Module ID: 17312
// Function ID: 17313
// Name: DesignSystemDragHandleSetting
// Dependencies: [8593, 1072, 11875, 17313, 2]

// Module 17312 (DesignSystemDragHandleSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
