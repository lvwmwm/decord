// Module ID: 14570
// Function ID: 111135
// Name: route
// Dependencies: [7733, 653, 10099, 14571, 2]

// Module 14570 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Form Primitives";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
  getComponent() {
    return require(14571) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
