// Module ID: 15720
// Function ID: 15721
// Name: route
// Dependencies: [7906, 673, 11400, 15721, 2]

// Module 15720 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return require(15721) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
