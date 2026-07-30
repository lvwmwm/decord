// Module ID: 13798
// Function ID: 13799
// Name: pressable
// Dependencies: [7753, 6744, 6746, 10116, 1236, 2741, 4405, 2]

// Module 13798 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(6744);
    obj = { entryPoint: require(6746) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useShouldCallReactiveCheck").useShowAssignedAgeGroupSettings
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).SH6Tcv);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2741).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(6744);
    obj = { entryPoint: require(6746) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require("useShouldCallReactiveCheck").useShowAssignedAgeGroupSettings
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
