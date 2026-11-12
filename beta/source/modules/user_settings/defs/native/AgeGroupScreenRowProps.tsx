// Module ID: 16978
// Function ID: 16979
// Name: AgeGroupScreenRowProps
// Dependencies: [8057, 6816, 1113, 3252, 6813, 16932, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 16978 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1113 */;
import _modDef3252 from "module_3252" /* 3252 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6816 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8057 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16932 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3252.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3252.rJiO86);
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
