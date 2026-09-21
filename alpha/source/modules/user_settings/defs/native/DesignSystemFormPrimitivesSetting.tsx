// Module ID: 16114
// Function ID: 16115
// Name: DesignSystemFormPrimitivesSetting
// Dependencies: [8233, 1074, 11725, 16115, 2]

// Module 16114 (DesignSystemFormPrimitivesSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Form Primitives";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
    getComponent() {
      return require("UserSettingsDesignSystemFormPrimitives").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
