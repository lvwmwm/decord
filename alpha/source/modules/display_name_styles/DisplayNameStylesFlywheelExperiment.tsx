// Module ID: 14685
// Function ID: 14686
// Name: DisplayNameStylesFlywheelExperiment
// Dependencies: [1452, 558, 576, 2]

// Module 14685 (DisplayNameStylesFlywheelExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-06-gummy-bears", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisplayNameStylesFlywheelSettersEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useIsDisplayNameStylesFlywheelSettersEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx");

export const DisplayNameStylesFlywheelSettersExperiment = apexExperiment;
export const useIsDisplayNameStylesFlywheelSettersEnabled = tmp3;
