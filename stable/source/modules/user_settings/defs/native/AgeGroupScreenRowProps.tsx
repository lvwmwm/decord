// Module ID: 15034
// Function ID: 15035
// Name: AgeGroupScreenRowProps
// Dependencies: [8714, 8716, 1115, 3034, 5000, 14988, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 15034 (AgeGroupScreenRowProps)
import util from "util" /* 1115 */;
import _modDef3034 from "module_3034" /* 3034 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5000 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8714 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8716 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14988 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3034.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3034.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true
};
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
};
