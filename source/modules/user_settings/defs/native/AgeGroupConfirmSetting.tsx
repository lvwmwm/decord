// Module ID: 13726
// Function ID: 105328
// Name: pressable
// Dependencies: [7751, 7581, 7583, 10127, 1212, 2716, 4347, 2]

// Module 13726 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2716).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2716).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(7581);
    obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2716).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2716).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(7581);
    obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
