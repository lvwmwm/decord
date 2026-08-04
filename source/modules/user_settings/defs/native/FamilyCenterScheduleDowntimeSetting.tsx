// Module ID: 14084
// Function ID: 14085
// Name: route
// Dependencies: [7892, 676, 10361, 1236, 2285, 14085, 2]

// Module 14084 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2285)["w/ISB8"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
  getComponent() {
    return require(14085) /* OverlappingSchedulesWarning */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
