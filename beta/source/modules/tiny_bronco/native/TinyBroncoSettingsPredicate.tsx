// Module ID: 14988
// Function ID: 14989
// Name: TinyBroncoSettingsPredicate
// Dependencies: [10071, 10075, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14988 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 10071 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 10075 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
