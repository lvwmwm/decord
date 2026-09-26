// Module ID: 14244
// Function ID: 14245
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9231, 9235, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14244 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9231 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9235 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
