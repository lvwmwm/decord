// Module ID: 16017
// Function ID: 16018
// Name: AccountAgeGroupAdultSetting
// Dependencies: [8332, 558, 6654, 5644, 15973, 11208, 1128, 2]

// Module 16017 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1128 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5644 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6654 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 15973 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupAdultSettingPredicate() {
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
}) : (function useAccountAgeGroupAdultSettingPredicate() {
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
});
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
  usePredicate: tmp2
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
