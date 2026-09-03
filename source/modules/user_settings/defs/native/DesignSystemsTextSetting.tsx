// Module ID: 15593
// Function ID: 15594
// Name: route
// Dependencies: [7896, 673, 11292, 15594, 2]

// Module 15593 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import createToggle from "createToggle" /* 11292 */;

obj = {
  useTitle() {
    return "Text";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TEXT,
  getComponent() {
    return require(15594) /* UserSettingsDesignSystemText */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
