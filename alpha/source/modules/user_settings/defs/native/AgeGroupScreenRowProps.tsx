// Module ID: 15770
// Function ID: 15771
// Name: AgeGroupScreenRowProps
// Dependencies: [7764, 6174, 1128, 3143, 558, 6165, 15724, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 15770 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1128 */;
import _modDef3143 from "module_3143" /* 3143 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6165 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6174 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7764 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 15724 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3143.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3143.rJiO86);
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
