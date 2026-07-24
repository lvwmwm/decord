// Module ID: 13788
// Function ID: 105694
// Name: toggle
// Dependencies: [7751, 11049, 10137, 10139, 10127, 1212, 10138, 13789, 2]

// Module 13788 (toggle)
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    const tmp = importDefault(11049)();
    const isEligibleForInappropriateConversationWarning = require(10137) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require(10137) /* InappropriateConversationExperiment */;
    const tmp2 = null == tmp || tmp;
    let tmp5 = !tmp2;
    const isEligibleForInappropriateConversationDefaultOn = require(10139) /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (tmp5) {
      tmp5 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp5) {
      tmp5 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp5;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    const tmp = importDefault(11049)();
    const isEligibleForInappropriateConversationWarning = require(10137) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require(10137) /* InappropriateConversationExperiment */;
    const tmp2 = null == tmp || tmp;
    let tmp5 = !tmp2;
    const isEligibleForInappropriateConversationDefaultOn = require(10139) /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (tmp5) {
      tmp5 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp5) {
      tmp5 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp5;
  }
};
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
