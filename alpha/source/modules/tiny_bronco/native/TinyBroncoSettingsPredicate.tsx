// Module ID: 16529
// Function ID: 16530
// Name: TinyBroncoSettingsPredicate
// Dependencies: [6731, 6732, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 16529 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 6731 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6732 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
}
