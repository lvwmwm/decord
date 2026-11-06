// Module ID: 16842
// Function ID: 16843
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6817, 6818, 2]
// Exports: useIsAgeNoticeSettingsEnabled

// Module 16842 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6817 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6818 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsAgeNoticeSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_2);
}
