// Module ID: 15661
// Function ID: 15662
// Name: AgeGroupScreenRowProps
// Dependencies: [7714, 6134, 1126, 3122, 558, 6125, 15615, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 15661 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1126 */;
import _modDef3122 from "module_3122" /* 3122 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6125 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6134 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7714 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 15615 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3122.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3122.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAgeGroupRowPredicate(arg0) {
  const obj = AgeVerificationUtils;
  let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === arg0;
  }
  return showAssignedAgeGroupSettings;
}) : (function useAgeGroupRowPredicate(arg0) {
  const obj = AgeVerificationUtils;
  let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === arg0;
  }
  return showAssignedAgeGroupSettings;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = obj;
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  return closure_3(false);
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  return closure_3(true);
};
