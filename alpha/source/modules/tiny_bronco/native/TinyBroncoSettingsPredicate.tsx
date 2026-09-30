// Module ID: 14450
// Function ID: 14451
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9430, 9433, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14450 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9430 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9433 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
