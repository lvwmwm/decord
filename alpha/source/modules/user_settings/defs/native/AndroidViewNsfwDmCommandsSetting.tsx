// Module ID: 17247
// Function ID: 17248
// Name: AndroidViewNsfwDmCommandsSetting
// Dependencies: [9135, 10739, 6775, 10740, 6767, 1377, 8124, 6770, 5068, 12311, 1113, 2]

// Module 17247 (AndroidViewNsfwDmCommandsSetting)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import AgeGateUtils from "AgeGateUtils" /* 6775 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 10739 */;
import useNSFWAllowed from "useNSFWAllowed" /* 10740 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useValue: function useViewNsfwDmCommandsSettingValue() {
    const obj = AgeRestrictedContentSettingsUtils;
    return obj.useViewNsfwCommandsOrDefault();
  },
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
    const ViewNsfwCommands = tmp(5068).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate() {
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
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
