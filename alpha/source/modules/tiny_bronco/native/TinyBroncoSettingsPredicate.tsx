// Module ID: 14219
// Function ID: 14220
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9220, 9224, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14219 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9220 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9224 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
