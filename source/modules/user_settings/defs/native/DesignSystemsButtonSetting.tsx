// Module ID: 14550
// Function ID: 14551
// Name: route
// Dependencies: [7756, 676, 10120, 14551, 2]

// Module 14550 (route)
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
    return require(14551) /* ExampleButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
