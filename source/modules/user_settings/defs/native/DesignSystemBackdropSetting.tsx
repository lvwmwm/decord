// Module ID: 15028
// Function ID: 15029
// Name: route
// Dependencies: [8235, 676, 10516, 15029, 2]

// Module 15028 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return require(15029) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
