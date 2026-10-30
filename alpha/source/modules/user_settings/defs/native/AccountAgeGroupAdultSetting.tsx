// Module ID: 16573
// Function ID: 16574
// Name: AccountAgeGroupAdultSetting
// Dependencies: [8424, 6720, 5688, 16529, 11505, 1114, 2]

// Module 16573 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1114 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 16529 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/52UYy"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = intl2.intl;
    return intl.string(intl2.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const obj = AgeVerificationUtils;
    const isAgeVerified = obj.useIsAgeVerified();
    const obj2 = AgeVerificationUtils;
    const isVerifiedTeen = obj2.useIsVerifiedTeen();
    const obj3 = RegionalFeatureConfigUtils;
    let hasAgeGatedFeatures = obj3.useHasAgeGatedFeatures();
    const obj4 = TinyBroncoSettingsPredicate;
    const isTinyBroncoSettingsEnabled = obj4.useIsTinyBroncoSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
