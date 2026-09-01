// Module ID: 15400
// Function ID: 15401
// Name: route
// Dependencies: [7884, 676, 11068, 15401, 2]

// Module 15400 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    return "Haptics";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_HAPTICS,
  getComponent() {
    return require(15401) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
