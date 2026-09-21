// Module ID: 15032
// Function ID: 15033
// Name: AgeGroupScreenRowProps
// Dependencies: [8682, 8684, 1115, 3034, 4968, 14957, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 15032 (AgeGroupScreenRowProps)
import util from "util" /* 1115 */;
import _modDef3034 from "module_3034" /* 3034 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8682 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8684 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14957 */;
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
