// Module ID: 16615
// Function ID: 16616
// Name: AccountAgeGroupAdultSetting
// Dependencies: [8432, 6726, 5693, 16571, 11539, 1113, 2]

// Module 16615 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 16571 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
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
