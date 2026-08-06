// Module ID: 14700
// Function ID: 14701
// Name: route
// Dependencies: [8005, 676, 10364, 14701, 2]

// Module 14700 (route)
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
    return require(14701) /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
