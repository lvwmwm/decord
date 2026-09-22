// Module ID: 14924
// Function ID: 14925
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8079, 12011, 11104, 11107, 11605, 1114, 11106, 14925, 2]

// Module 14924 (DirectMessageSafetyAlertsSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11104 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11106 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11107 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 12011 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 14925 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.qFsx5q);
  },
  parent() {
    return MobileUserSettings.CONTENT_AND_SOCIAL;
  },
  useValue: useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault,
  onValueChange: updateDmSafetyAlertsSetting.updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = useUserIsConsideredAdultDefault();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
