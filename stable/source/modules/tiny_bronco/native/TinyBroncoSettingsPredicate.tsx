// Module ID: 15728
// Function ID: 15729
// Name: TinyBroncoSettingsPredicate
// Dependencies: [6183, 558, 6184, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 15728 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 6183 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6184 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
};
