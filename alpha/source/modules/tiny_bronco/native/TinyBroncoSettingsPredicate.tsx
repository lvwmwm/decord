// Module ID: 15615
// Function ID: 15616
// Name: TinyBroncoSettingsPredicate
// Dependencies: [6143, 558, 6144, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 15615 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 6143 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6144 */;
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
