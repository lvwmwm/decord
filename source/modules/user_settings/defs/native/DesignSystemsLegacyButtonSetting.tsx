// Module ID: 14551
// Function ID: 14552
// Name: route
// Dependencies: [7753, 676, 10116, 14552, 2]

// Module 14551 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Legacy Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_LEGACY_BUTTON,
  getComponent() {
    return require(14552) /* ComparisonRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
