// Module ID: 14769
// Function ID: 14770
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14770, 14771, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14769 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14770 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14771 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
