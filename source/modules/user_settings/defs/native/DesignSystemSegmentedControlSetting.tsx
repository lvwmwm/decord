// Module ID: 15372
// Function ID: 15373
// Name: route
// Dependencies: [7884, 676, 11068, 15373, 2]

// Module 15372 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return require(15373) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
