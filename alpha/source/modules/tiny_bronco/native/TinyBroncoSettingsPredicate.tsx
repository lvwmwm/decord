// Module ID: 14456
// Function ID: 14457
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9424, 9427, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14456 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9424 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9427 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
