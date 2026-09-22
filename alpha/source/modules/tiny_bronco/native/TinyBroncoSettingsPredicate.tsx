// Module ID: 14964
// Function ID: 14965
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14965, 14966, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14964 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14965 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14966 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
