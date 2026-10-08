// Module ID: 14818
// Function ID: 14819
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [7966, 7492, 5915, 558, 576, 5905, 1126, 5918, 14771, 11262, 2]

// Module 14818 (AccountAgeGroupNonAdultSetting)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5905 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5918 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14771 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupNonAdultSettingTrailing() {
  let first;
  let tmp7;
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = AgeVerificationUtils;
  const isAgeVerified = obj2.useIsAgeVerified();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.lKDPGA);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isAgeVerified) {
    if (isAgeVerified) {
      const intl2 = tmp(1126).intl;
      first = intl2.string(tmp(1126).t.sK0dmH);
    }
    cResult[1] = isAgeVerified;
    cResult[2] = first;
    tmp7 = first;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function useAccountAgeGroupNonAdultSettingTrailing() {
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const intl = intl3.intl;
  let stringResult = intl.string(intl3.t.lKDPGA);
  if (isAgeVerified) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(tmp(1126).t.sK0dmH);
  }
  return stringResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccountAgeGroupNonAdultSettingPredicate() {
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
}) : (function AccountAgeGroupNonAdultSettingPredicate() {
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
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["/52UYy"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp2,
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true,
  usePredicate: tmp3
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
