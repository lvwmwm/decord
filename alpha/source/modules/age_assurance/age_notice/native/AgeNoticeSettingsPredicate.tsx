// Module ID: 16727
// Function ID: 16728
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6857, 6858, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 16727 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6857 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6858 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
}
