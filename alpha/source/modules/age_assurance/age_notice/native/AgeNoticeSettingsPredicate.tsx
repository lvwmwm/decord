// Module ID: 17086
// Function ID: 17087
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6778, 6779, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 17086 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6778 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6779 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
