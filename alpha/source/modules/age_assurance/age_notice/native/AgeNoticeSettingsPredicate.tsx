// Module ID: 15903
// Function ID: 15904
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6330, 6331, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 15903 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6330 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6331 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
