// Module ID: 16576
// Function ID: 16577
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [8424, 7947, 6723, 6720, 1114, 5688, 16529, 11505, 2]

// Module 16576 (AccountAgeGroupNonAdultSetting)
import intl3 from "intl" /* 1114 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 16529 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.sK0dmH);
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
    const obj4 = TinyBroncoSettingsPredicate;
    const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
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
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
