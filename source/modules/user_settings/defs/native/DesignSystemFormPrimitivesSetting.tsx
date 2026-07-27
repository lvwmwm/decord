// Module ID: 14526
// Function ID: 110962
// Name: route
// Dependencies: [7697, 653, 10059, 14527, 2]

// Module 14526 (route)
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
    return require(14527) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
