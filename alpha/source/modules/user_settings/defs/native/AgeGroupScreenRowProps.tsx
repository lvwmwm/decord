// Module ID: 15940
// Function ID: 15941
// Name: AgeGroupScreenRowProps
// Dependencies: [7674, 6293, 1113, 3343, 6290, 15894, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 15940 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1113 */;
import _modDef3343 from "module_3343" /* 3343 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6290 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6293 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7674 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 15894 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3343.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3343.rJiO86);
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
