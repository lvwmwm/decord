// Module ID: 13924
// Function ID: 13925
// Name: pressable
// Dependencies: [7892, 21, 10361, 1236, 2803, 13925, 4625, 4500, 2]

// Module 13924 (pressable)
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2803)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2803).Gn0SAj);
  },
  onPress() {
    require(4625) /* useAlertStore */.openAlert(require(13925) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13925) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2803)["bD//cU"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2803).Gn0SAj);
  },
  onPress() {
    require(4625) /* useAlertStore */.openAlert(require(13925) /* SettingsAgeGroupResetAlert */.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(13925) /* SettingsAgeGroupResetAlert */.default, {}));
  },
  withArrow: true,
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
