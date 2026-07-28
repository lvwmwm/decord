// Module ID: 14566
// Function ID: 111103
// Name: route
// Dependencies: [7733, 653, 10099, 14567, 2]

// Module 14566 (route)
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
    return require(14567) /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;
