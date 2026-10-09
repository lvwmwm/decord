// Module ID: 14925
// Function ID: 14926
// Name: AgeGroupScreenRowProps
// Dependencies: [7497, 5916, 1126, 3117, 558, 5906, 14879, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 14925 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5906 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14879 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3117.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3117.rJiO86);
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
