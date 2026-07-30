// Module ID: 14555
// Function ID: 14556
// Name: route
// Dependencies: [7753, 676, 10116, 14556, 2]

// Module 14555 (route)
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
    return require(14556) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
