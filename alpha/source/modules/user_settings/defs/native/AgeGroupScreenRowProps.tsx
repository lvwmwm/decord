// Module ID: 17137
// Function ID: 17138
// Name: AgeGroupScreenRowProps
// Dependencies: [8124, 6770, 1113, 3273, 6767, 17091, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 17137 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1113 */;
import _modDef3273 from "module_3273" /* 3273 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17091 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3273.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3273.rJiO86);
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
