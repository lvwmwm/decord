// Module ID: 17087
// Function ID: 17088
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8536, 13570, 11435, 11437, 11717, 1113, 11436, 17088, 2]

// Module 17087 (DirectMessageSafetyAlertsSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11435 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11436 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11437 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 13570 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 17088 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.qFsx5q);
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
    const obj = SelfModInappropriateConversationExperiment;
    const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    let tmp4 = !flag;
    const obj2 = InappropriateConversationsDefaultOn;
    const isEligibleForInappropriateConversationDefaultOn = obj2.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
