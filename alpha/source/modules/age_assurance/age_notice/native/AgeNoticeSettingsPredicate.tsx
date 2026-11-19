// Module ID: 15894
// Function ID: 15895
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6301, 6302, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 15894 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6301 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6302 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
