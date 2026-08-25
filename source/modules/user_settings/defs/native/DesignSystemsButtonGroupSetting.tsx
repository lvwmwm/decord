// Module ID: 14998
// Function ID: 14999
// Name: route
// Dependencies: [8235, 676, 10516, 14999, 2]

// Module 14998 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(14999) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
