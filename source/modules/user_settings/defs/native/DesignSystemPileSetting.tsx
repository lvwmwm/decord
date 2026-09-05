// Module ID: 15794
// Function ID: 15795
// Name: route
// Dependencies: [7975, 1074, 11468, 15795, 2]

// Module 15794 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    return "Pile";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_PILE,
  getComponent() {
    return require(15795) /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;
