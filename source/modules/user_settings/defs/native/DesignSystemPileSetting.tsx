// Module ID: 14744
// Function ID: 14745
// Name: route
// Dependencies: [8022, 676, 10380, 14745, 2]

// Module 14744 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Pile";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_PILE,
  getComponent() {
    return require(14745) /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;
