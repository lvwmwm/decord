// Module ID: 16035
// Function ID: 16036
// Name: AgeGroupScreenRowProps
// Dependencies: [7793, 6414, 1112, 3444, 6411, 15989, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 16035 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1112 */;
import _modDef3444 from "module_3444" /* 3444 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6414 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 15989 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3444.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3444.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true
};
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = obj;
export function useShowAssignedAdultAgeGroupRow() {
  const obj = AgeVerificationUtils;
  let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
  AgeNoticeSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
}
export function useShowAccountStatusAgeGroupRow() {
  const obj = AgeVerificationUtils;
  let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
  AgeNoticeSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
}
