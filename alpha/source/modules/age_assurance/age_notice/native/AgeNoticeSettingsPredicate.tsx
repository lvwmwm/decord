// Module ID: 16928
// Function ID: 16929
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6794, 6795, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16928 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6794 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6795 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
