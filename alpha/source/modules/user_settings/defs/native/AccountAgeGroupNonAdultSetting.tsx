// Module ID: 15950
// Function ID: 15951
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [8624, 7704, 6322, 6319, 1113, 5485, 15903, 11897, 2]

// Module 15950 (AccountAgeGroupNonAdultSetting)
import intl3 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5485 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6319 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6322 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7704 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 15903 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
