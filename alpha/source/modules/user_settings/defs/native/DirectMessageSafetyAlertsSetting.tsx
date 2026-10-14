// Module ID: 15471
// Function ID: 15472
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8000, 558, 576, 12266, 10399, 10401, 10767, 1126, 10400, 15472, 2]

// Module 15471 (DirectMessageSafetyAlertsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10399 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10400 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 10401 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 12266 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 15472 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasDmSafetyAlertsSetting() {
  let first;
  let tmp6;
  const obj = react;
  const cResult = obj.c(2);
  let flag = useUserIsConsideredAdultDefault();
  if (flag == null) {
    flag = true;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "user_settings_mobile_redesign" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = tmpResult.useIsEligibleForInappropriateConversationWarning(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "user_settings_mobile_redesign" };
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = !flag;
  const tmpResult2 = InappropriateConversationsDefaultOn;
  const isEligibleForInappropriateConversationDefaultOn = tmpResult2.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
  if (!flag) {
    tmp8 = isEligibleForInappropriateConversationWarning;
  }
  if (tmp8) {
    tmp8 = !isEligibleForInappropriateConversationDefaultOn;
  }
  return tmp8;
}) : (function useHasDmSafetyAlertsSetting() {
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
});
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
  usePredicate: tmp2
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
