// Module ID: 14419
// Function ID: 14420
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9396, 9399, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14419 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9396 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9399 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
