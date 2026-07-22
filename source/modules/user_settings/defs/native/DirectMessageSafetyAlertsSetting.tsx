// Module ID: 13623
// Function ID: 103214
// Name: toggle
// Dependencies: []

// Module 13623 (toggle)
const MobileSetting = require(dependencyMap[0]).MobileSetting;
const _module = require(dependencyMap[4]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require(dependencyMap[6]).useSafetyAlertsSettingOrDefault,
  onValueChange: require(dependencyMap[7]).updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    const tmp = importDefault(dependencyMap[1])();
    const isEligibleForInappropriateConversationWarning = require(dependencyMap[2]).useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require(dependencyMap[2]);
    const tmp2 = null == tmp || tmp;
    let tmp5 = !tmp2;
    const isEligibleForInappropriateConversationDefaultOn = require(dependencyMap[3]).useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (tmp5) {
      tmp5 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp5) {
      tmp5 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp5;
  }
});
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
