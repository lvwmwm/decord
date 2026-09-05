// Module ID: 15760
// Function ID: 15761
// Name: route
// Dependencies: [7975, 1074, 11468, 15761, 2]

// Module 15760 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    return "Button Group";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
  getComponent() {
    return require(15761) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
