// Module ID: 14578
// Function ID: 14579
// Name: route
// Dependencies: [7761, 676, 10133, 14579, 2]

// Module 14578 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Row Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return require(14579) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
