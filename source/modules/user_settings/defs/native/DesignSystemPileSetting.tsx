// Module ID: 14521
// Function ID: 110925
// Name: route
// Dependencies: [7697, 653, 10059, 14522, 2]

// Module 14521 (route)
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
    return require(14522) /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;
