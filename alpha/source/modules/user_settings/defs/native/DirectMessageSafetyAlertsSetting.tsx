// Module ID: 16683
// Function ID: 16684
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8424, 13255, 11237, 11239, 11505, 1114, 11238, 16684, 2]

// Module 16683 (DirectMessageSafetyAlertsSetting)
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11237 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11238 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11239 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 13255 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 16684 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
