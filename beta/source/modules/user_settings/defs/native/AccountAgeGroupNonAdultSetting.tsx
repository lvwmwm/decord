// Module ID: 15033
// Function ID: 15034
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [8233, 8682, 8684, 4968, 1115, 5640, 14957, 11725, 2]

// Module 15033 (AccountAgeGroupNonAdultSetting)
import util from "util" /* 1115 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5640 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8682 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8684 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14957 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const intl = util.intl;
    let stringResult = intl.string(util.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasTeenDefaults) {
      let tmp5 = !isAgeVerified;
      if (isAgeVerified) {
        tmp5 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp5;
    }
    if (hasTeenDefaults) {
      hasTeenDefaults = !isTinyBroncoSettingsEnabled;
    }
    return hasTeenDefaults;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
