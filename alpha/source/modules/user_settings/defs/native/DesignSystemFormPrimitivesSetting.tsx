// Module ID: 17688
// Function ID: 17689
// Name: DesignSystemFormPrimitivesSetting
// Dependencies: [8387, 1084, 11302, 17689, 2]

// Module 17688 (DesignSystemFormPrimitivesSetting)
import Constants from "Constants" /* 1084 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
