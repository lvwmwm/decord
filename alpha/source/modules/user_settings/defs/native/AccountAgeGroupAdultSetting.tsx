// Module ID: 14534
// Function ID: 14535
// Name: AccountAgeGroupAdultSetting
// Dependencies: [7634, 558, 5102, 5580, 14491, 11129, 1126, 2]

// Module 14534 (AccountAgeGroupAdultSetting)
import intl2 from "intl" /* 1126 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14491 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
