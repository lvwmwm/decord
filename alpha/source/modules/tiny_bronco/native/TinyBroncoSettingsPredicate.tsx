// Module ID: 14771
// Function ID: 14772
// Name: TinyBroncoSettingsPredicate
// Dependencies: [5933, 558, 5934, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14771 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 5933 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 5934 */;
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
