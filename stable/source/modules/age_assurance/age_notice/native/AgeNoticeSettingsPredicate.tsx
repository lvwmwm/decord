// Module ID: 17211
// Function ID: 17212
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6831, 6832, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 17211 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6831 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6832 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
