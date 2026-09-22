// Module ID: 16126
// Function ID: 16127
// Name: DesignSystemFormPrimitivesSetting
// Dependencies: [8237, 1074, 11729, 16127, 2]

// Module 16126 (DesignSystemFormPrimitivesSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
