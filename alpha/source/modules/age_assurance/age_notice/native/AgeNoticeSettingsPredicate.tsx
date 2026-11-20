// Module ID: 15858
// Function ID: 15859
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6303, 6304, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 15858 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6303 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6304 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
