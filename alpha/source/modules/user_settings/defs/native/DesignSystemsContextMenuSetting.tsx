// Module ID: 16463
// Function ID: 16464
// Name: DesignSystemsContextMenuSetting
// Dependencies: [7993, 1085, 10663, 16464, 2]

// Module 16463 (DesignSystemsContextMenuSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
    getComponent() {
      return require("UserSettingsDesignSystemContextMenu").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
