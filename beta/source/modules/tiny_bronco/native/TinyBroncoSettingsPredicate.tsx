// Module ID: 14946
// Function ID: 14947
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14947, 558, 14948, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14946 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14947 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14948 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = () => TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
