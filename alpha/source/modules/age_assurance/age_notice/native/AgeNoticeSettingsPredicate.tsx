// Module ID: 16854
// Function ID: 16855
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6875, 6876, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16854 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6875 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6876 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
