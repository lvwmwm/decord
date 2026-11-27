// Module ID: 16193
// Function ID: 16194
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6836, 6837, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16193 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6836 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6837 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
