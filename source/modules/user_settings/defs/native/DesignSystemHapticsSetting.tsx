// Module ID: 15366
// Function ID: 15367
// Name: route
// Dependencies: [7852, 676, 11031, 15367, 2]

// Module 15366 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import createToggle from "createToggle" /* 11031 */;

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
    return require(15367) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
