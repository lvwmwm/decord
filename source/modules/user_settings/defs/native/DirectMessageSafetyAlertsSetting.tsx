// Module ID: 13860
// Function ID: 13861
// Name: toggle
// Dependencies: [7753, 11064, 10126, 10128, 10116, 1236, 10127, 13861, 2]

// Module 13860 (toggle)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = importDefault(11064)();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = require(10126) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require(10126) /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = require(10128) /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = importDefault(11064)();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = require(10126) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require(10126) /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = require(10128) /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
};
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
