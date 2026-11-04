// Module ID: 16819
// Function ID: 16820
// Name: AgeNoticeSettingsPredicate
// Dependencies: [6872, 6873, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 16819 (AgeNoticeSettingsPredicate)
import AgeNoticeConstants from "AgeNoticeConstants" /* 6872 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6873 */;
import size from "module_2" /* 2 */;

let closure_2 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
}
