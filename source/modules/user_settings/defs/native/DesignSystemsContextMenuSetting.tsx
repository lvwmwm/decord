// Module ID: 15014
// Function ID: 15015
// Name: route
// Dependencies: [8235, 676, 10516, 15015, 2]

// Module 15014 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

obj = {
  useTitle() {
    return "Context Menu";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
  getComponent() {
    return require(15015) /* DemoContextMenu */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
