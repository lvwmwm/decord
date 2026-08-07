// Module ID: 14748
// Function ID: 14749
// Name: route
// Dependencies: [8022, 676, 10380, 14749, 2]

// Module 14748 (route)
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
    return require(14749) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
