// Module ID: 16347
// Function ID: 16348
// Name: AndroidViewNsfwDmCommandsSetting
// Dependencies: [9555, 7570, 6833, 7571, 6825, 1379, 7870, 6828, 4868, 11962, 1112, 2]

// Module 16347 (AndroidViewNsfwDmCommandsSetting)
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6828 */;
import AgeGateUtils from "AgeGateUtils" /* 6833 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7570 */;
import useNSFWAllowed from "useNSFWAllowed" /* 7571 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7870 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
    const ViewNsfwCommands = tmp(4868).ViewNsfwCommands;
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
