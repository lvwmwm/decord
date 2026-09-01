// Module ID: 15358
// Function ID: 15359
// Name: route
// Dependencies: [7884, 676, 11068, 15359, 2]

// Module 15358 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    return "Legacy Button";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_LEGACY_BUTTON,
  getComponent() {
    return require(15359) /* ComparisonRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
