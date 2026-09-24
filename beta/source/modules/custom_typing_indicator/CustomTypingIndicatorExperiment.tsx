// Module ID: 12133
// Function ID: 12134
// Name: CustomTypingIndicatorExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: getCustomTypingIndicatorConfig

// Module 12133 (CustomTypingIndicatorExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-custom-typing-indicator", defaultConfig: { canSet: false, canView: false, entryPoint: null }, variations: { 0: { canSet: false, canView: false, entryPoint: null }, 1: { canSet: true, canView: true, entryPoint: "settings" }, 2: { canSet: true, canView: true, entryPoint: "profile" }, 3: { canSet: false, canView: true, entryPoint: null } } });
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorExperiment.tsx");

export const CustomTypingIndicatorExperiment = apexExperiment;
export const useCustomTypingIndicatorConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : ((location) => apexExperiment.useConfig({ location }));
export const getCustomTypingIndicatorConfig = function getCustomTypingIndicatorConfig(location) {
  return apexExperiment.getConfig({ location });
};
