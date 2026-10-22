// Module ID: 15912
// Function ID: 15913
// Name: TinyBroncoSettingsPredicate
// Dependencies: [6650, 558, 6651, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 15912 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 6650 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6651 */;
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
