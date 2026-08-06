// Module ID: 14687
// Function ID: 14688
// Name: route
// Dependencies: [8005, 676, 10364, 14688, 2]

// Module 14687 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON,
  getComponent() {
    return require(14688) /* ExampleButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
