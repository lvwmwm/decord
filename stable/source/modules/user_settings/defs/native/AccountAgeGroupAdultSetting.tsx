// Module ID: 14275
// Function ID: 14276
// Name: AccountAgeGroupAdultSetting
// Dependencies: [7421, 558, 5049, 5736, 14231, 10874, 1127, 2]

// Module 14275 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1127 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5049 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5736 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14231 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
