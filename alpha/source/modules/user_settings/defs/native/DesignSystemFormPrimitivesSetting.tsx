// Module ID: 17308
// Function ID: 17309
// Name: DesignSystemFormPrimitivesSetting
// Dependencies: [8593, 1072, 11875, 17309, 2]

// Module 17308 (DesignSystemFormPrimitivesSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Form Primitives";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
    getComponent() {
      return require("UserSettingsDesignSystemFormPrimitives").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
