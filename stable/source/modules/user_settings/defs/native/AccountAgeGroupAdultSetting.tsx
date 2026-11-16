// Module ID: 16976
// Function ID: 16977
// Name: AccountAgeGroupAdultSetting
// Dependencies: [8536, 6813, 5849, 16932, 11717, 1113, 2]

// Module 16976 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1113 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5849 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16932 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
