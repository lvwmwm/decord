// Module ID: 15698
// Function ID: 15699
// Name: route
// Dependencies: [7906, 673, 11400, 15699, 2]

// Module 15698 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    return "Tabs";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TABS,
  getComponent() {
    return require(15699) /* UserSettingsDesignSystemTabs */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;
