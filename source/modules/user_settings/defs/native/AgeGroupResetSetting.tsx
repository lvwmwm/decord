// Module ID: 13799
// Function ID: 13800
// Name: pressable
// Dependencies: [7753, 21, 10116, 1236, 2741, 13800, 4530, 4405, 2]

// Module 13799 (pressable)
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).Gn0SAj);
  },
  onPress() {
    require(4530) /* useAlertStore */.openAlert(require(13800) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13800) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useShouldCallReactiveCheck").useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).Gn0SAj);
  },
  onPress() {
    require(4530) /* useAlertStore */.openAlert(require(13800) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13800) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useShouldCallReactiveCheck").useShowAssignedAgeGroupSettings
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
