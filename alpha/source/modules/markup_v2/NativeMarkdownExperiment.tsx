// Module ID: 8102
// Function ID: 8103
// Name: NativeMarkdownExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 8102 (NativeMarkdownExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdown(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : (function useNativeMarkdown(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/markup_v2/NativeMarkdownExperiment.tsx");

export const NativeMarkdownExperiment = apexExperiment;
export const useNativeMarkdown = tmp3;
