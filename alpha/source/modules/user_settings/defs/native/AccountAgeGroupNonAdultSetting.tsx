// Module ID: 16889
// Function ID: 16890
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [8524, 8046, 6809, 6806, 1113, 5847, 16842, 11703, 2]

// Module 16889 (AccountAgeGroupNonAdultSetting)
import intl3 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5847 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6806 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6809 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8046 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16842 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["/52UYy"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const obj = AgeVerificationUtils;
    const isAgeVerified = obj.useIsAgeVerified();
    const intl = intl3.intl;
    let stringResult = intl.string(intl3.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(tmp(1113).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const obj = AgeVerificationUtils;
    const isAgeVerified = obj.useIsAgeVerified();
    const obj2 = AgeVerificationUtils;
    const isVerifiedTeen = obj2.useIsVerifiedTeen();
    const obj3 = RegionalFeatureConfigUtils;
    let hasTeenDefaults = obj3.useHasTeenDefaults();
    const obj4 = AgeNoticeSettingsPredicate;
    const isAgeNoticeSettingsEnabled = obj4.useIsAgeNoticeSettingsEnabled();
    if (hasTeenDefaults) {
      let tmp5 = !isAgeVerified;
      if (isAgeVerified) {
        tmp5 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp5;
    }
    if (hasTeenDefaults) {
      hasTeenDefaults = !isAgeNoticeSettingsEnabled;
    }
    return hasTeenDefaults;
  }
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
