// Module ID: 14682
// Function ID: 14683
// Name: AGE_GROUP_CONFIRM_ROW_PROPS
// Dependencies: [8341, 8343, 1233, 2918, 4741, 14607, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 14682 (AGE_GROUP_CONFIRM_ROW_PROPS)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4741 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8341 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8343 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14607 */;

let result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.SH6Tcv);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = openIncodeAgeVerificationModalDefault;
    obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true
};
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  let showAssignedAgeGroupSettings = useAgeVerificationRunner.useShowAssignedAgeGroupSettings();
  useIsTinyBroncoSettingsEnabled;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  let showAssignedAgeGroupSettings = useAgeVerificationRunner.useShowAssignedAgeGroupSettings();
  useIsTinyBroncoSettingsEnabled;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
};
