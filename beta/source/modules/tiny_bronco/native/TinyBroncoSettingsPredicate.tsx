// Module ID: 14984
// Function ID: 14985
// Name: TinyBroncoSettingsPredicate
// Dependencies: [10038, 558, 10042, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14984 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 10038 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 10042 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = () => TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
