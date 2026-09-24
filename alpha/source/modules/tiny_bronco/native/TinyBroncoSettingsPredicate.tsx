// Module ID: 15053
// Function ID: 15054
// Name: TinyBroncoSettingsPredicate
// Dependencies: [10123, 10127, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 15053 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 10123 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 10127 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
