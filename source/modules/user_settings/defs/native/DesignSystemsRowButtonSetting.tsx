// Module ID: 15000
// Function ID: 15001
// Name: route
// Dependencies: [8235, 676, 10516, 15001, 2]

// Module 15000 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(15001) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
