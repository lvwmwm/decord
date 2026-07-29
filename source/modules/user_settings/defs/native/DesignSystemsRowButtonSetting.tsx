// Module ID: 14559
// Function ID: 14560
// Name: route
// Dependencies: [7756, 676, 10120, 14560, 2]

// Module 14559 (route)
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
    return require(14560) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
