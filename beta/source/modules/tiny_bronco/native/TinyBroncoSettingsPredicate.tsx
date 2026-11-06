// Module ID: 16579
// Function ID: 16580
// Name: TinyBroncoSettingsPredicate
// Dependencies: [6737, 6738, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 16579 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 6737 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6738 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export function useIsTinyBroncoSettingsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
}
