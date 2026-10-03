// Module ID: 14491
// Function ID: 14492
// Name: TinyBroncoSettingsPredicate
// Dependencies: [9421, 558, 9424, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14491 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 9421 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9424 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = () => {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_2);
};
