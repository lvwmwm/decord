// Module ID: 16014
// Function ID: 16015
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6710, 6711, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16014 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6710 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6711 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
