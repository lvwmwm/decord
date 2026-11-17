// Module ID: 17290
// Function ID: 17291
// Name: AccountAgeGroupAdultSetting
// Dependencies: [9213, 6815, 5989, 17246, 12612, 1113, 2]

// Module 17290 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5989 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17246 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
    const obj4 = AgeNoticeSettingsPredicate;
    const isAgeNoticeSettingsEnabled = obj4.useIsAgeNoticeSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isAgeNoticeSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
