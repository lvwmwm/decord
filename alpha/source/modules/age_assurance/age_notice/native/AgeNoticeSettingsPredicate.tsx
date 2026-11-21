// Module ID: 15981
// Function ID: 15982
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6422, 6423, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 15981 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6422 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6423 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
