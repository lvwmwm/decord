// Module ID: 14243
// Function ID: 14244
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9231, 9235, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14243 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9231 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9235 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
};
