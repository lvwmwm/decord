// Module ID: 15044
// Function ID: 15045
// Name: TinyBroncoSettingsPredicate
// Dependencies: [10118, 10122, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 15044 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 10118 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 10122 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
