// Module ID: 15295
// Function ID: 15296
// Name: route
// Dependencies: [7830, 676, 11006, 15296, 2]

// Module 15295 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

obj = {
  useTitle() {
    return "Row Button";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return require(15296) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
