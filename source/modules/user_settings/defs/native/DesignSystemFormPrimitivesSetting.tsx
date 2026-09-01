// Module ID: 15398
// Function ID: 15399
// Name: route
// Dependencies: [7884, 676, 11068, 15399, 2]

// Module 15398 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    return "Form Primitives";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
  getComponent() {
    return require(15399) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
