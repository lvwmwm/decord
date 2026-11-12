// Module ID: 16935
// Function ID: 16936
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6824, 6825, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16935 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6824 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6825 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
