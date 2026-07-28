// Module ID: 13782
// Function ID: 105633
// Name: pressable
// Dependencies: [7733, 6726, 6728, 10099, 1212, 2717, 4382, 2]

// Module 13782 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(6726);
    obj = { entryPoint: require(6728) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2717).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(6726);
    obj = { entryPoint: require(6728) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
