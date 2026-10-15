// Module ID: 15773
// Function ID: 15774
// Name: AndroidViewNsfwDmCommandsSetting
// Dependencies: [8210, 558, 7136, 576, 6140, 7137, 6125, 1382, 7714, 6134, 2041, 10991, 1126, 2]

// Module 15773 (AndroidViewNsfwDmCommandsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6125 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6134 */;
import AgeGateUtils from "AgeGateUtils" /* 6140 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7136 */;
import useNSFWAllowed from "useNSFWAllowed" /* 7137 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7714 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useViewNsfwDmCommandsSettingValue() {
  const obj = AgeRestrictedContentSettingsUtils;
  return obj.useViewNsfwCommandsOrDefault();
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePredicate() {
  let tmp8;
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = AgeGateUtils;
  const shouldAgeVerifyForSettingsToggles = obj2.useShouldAgeVerifyForSettingsToggles();
  const obj3 = useNSFWAllowed;
  let flag = obj3.useNSFWAllowed();
  if (flag == null) {
    flag = true;
  }
  const tmpResult = AgeVerificationUtils;
  if (shouldAgeVerifyForSettingsToggles) {
    let first;
    if (!tmpResult.useIsVerifiedTeen()) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult3 = PlatformUtils;
        const isAndroidResult = tmpResult3.isAndroid();
        cResult[0] = isAndroidResult;
        first = isAndroidResult;
      } else {
        first = cResult[0];
      }
    }
    return first;
  }
  if (cResult[1] !== flag) {
    let isAndroidResult1 = flag;
    if (isAndroidResult1) {
      const tmpResult4 = PlatformUtils;
      isAndroidResult1 = tmpResult4.isAndroid();
    }
    cResult[1] = flag;
    cResult[2] = isAndroidResult1;
    tmp8 = isAndroidResult1;
  } else {
    tmp8 = cResult[2];
  }
  first = tmp8;
}) : (function usePredicate() {
  const obj = AgeGateUtils;
  let shouldAgeVerifyForSettingsToggles = obj.useShouldAgeVerifyForSettingsToggles();
  const obj2 = useNSFWAllowed;
  let flag = obj2.useNSFWAllowed();
  if (flag == null) {
    flag = true;
  }
  const tmpResult = AgeVerificationUtils;
  if (shouldAgeVerifyForSettingsToggles) {
    shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
  }
  if (!shouldAgeVerifyForSettingsToggles) {
    shouldAgeVerifyForSettingsToggles = flag;
  }
  if (shouldAgeVerifyForSettingsToggles) {
    const tmpResult2 = PlatformUtils;
    shouldAgeVerifyForSettingsToggles = tmpResult2.isAndroid();
  }
  return shouldAgeVerifyForSettingsToggles;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.VGWIAo);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["J4zza/"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: useViewNsfwDmCommandsSettingValue,
  onValueChange: function handleValueChange(arg0) {
    const obj = AgeGateUtils;
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj2);
      }
    }
    const ViewNsfwCommands = tmp(2041).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate: tmp3
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
