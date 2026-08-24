// Module ID: 14979
// Function ID: 14980
// Name: route
// Dependencies: [8238, 676, 10708, 14977, 2]

// Module 14979 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import createToggle from "createToggle" /* 10708 */;

obj = {
  useTitle() {
    return "Shadows";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
  getComponent() {
    return require(14977) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;
