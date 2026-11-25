// Module ID: 16144
// Function ID: 16145
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8712, 12418, 11795, 11797, 11942, 1112, 11796, 16145, 2]

// Module 16144 (DirectMessageSafetyAlertsSetting)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11795 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11796 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11797 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 12418 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 16145 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
