// Module ID: 14888
// Function ID: 14889
// Name: route
// Dependencies: [8123, 676, 10493, 14889, 2]

// Module 14888 (route)
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
    return require(14889) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
