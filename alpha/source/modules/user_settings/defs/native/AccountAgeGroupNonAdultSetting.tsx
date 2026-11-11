// Module ID: 17138
// Function ID: 17139
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [9136, 8124, 6770, 6767, 1113, 5932, 17091, 12317, 2]

// Module 17138 (AccountAgeGroupNonAdultSetting)
import intl3 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17091 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
