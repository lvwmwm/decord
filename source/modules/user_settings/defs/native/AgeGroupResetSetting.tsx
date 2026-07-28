// Module ID: 13783
// Function ID: 105637
// Name: pressable
// Dependencies: [7733, 33, 10099, 1212, 2717, 13784, 4507, 4382, 2]

// Module 13783 (pressable)
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).Gn0SAj);
  },
  onPress() {
    require(4507) /* useAlertStore */.openAlert(require(13784) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13784) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).Gn0SAj);
  },
  onPress() {
    require(4507) /* useAlertStore */.openAlert(require(13784) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13784) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
