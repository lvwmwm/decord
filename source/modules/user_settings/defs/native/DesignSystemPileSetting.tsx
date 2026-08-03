// Module ID: 14677
// Function ID: 14678
// Name: route
// Dependencies: [7880, 676, 10272, 14678, 2]

// Module 14677 (route)
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
    return require(14678) /* SampleCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemPileSetting.tsx");

export default route;
