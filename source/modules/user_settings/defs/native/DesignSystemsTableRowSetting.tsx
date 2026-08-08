// Module ID: 14786
// Function ID: 14787
// Name: route
// Dependencies: [8082, 676, 10446, 14787, 2]

// Module 14786 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Table Row";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
  getComponent() {
    return require(14787) /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
