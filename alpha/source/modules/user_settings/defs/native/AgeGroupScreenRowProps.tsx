// Module ID: 16575
// Function ID: 16576
// Name: AgeGroupScreenRowProps
// Dependencies: [7947, 6723, 1114, 3093, 6720, 16529, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 16575 (AgeGroupScreenRowProps)
import intl2 from "intl" /* 1114 */;
import _modDef3093 from "module_3093" /* 3093 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 16529 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3093.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3093.rJiO86);
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
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
}
export function useShowAccountStatusAgeGroupRow() {
  const obj = AgeVerificationUtils;
  let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
}
