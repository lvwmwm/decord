// Module ID: 8519
// Function ID: 8520
// Name: NativeMarkdownExperiment
// Dependencies: [8520, 1453, 558, 576, 8522, 2]
// Exports: isNativeMarkdownEnabled

// Module 8519 (NativeMarkdownExperiment)
import react from "react" /* 576 */;
import useLabFeatureDefault from "useLabFeature" /* 8522 */;
import LabFeatureStore from "LabFeatureStore" /* 8520 */;
import ApexExperiment_mod from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = { name: "2026-10-native-markdown-setting", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
const enable_native_markdown = "enable_native_markdown";
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdown(location) {
  let tmp3;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(6);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const enabled = apexExperiment1.useConfig(tmp3).enabled;
  const tmp4 = useLabFeatureDefault(enable_native_markdown);
  if (cResult[2] !== _location) {
    const obj3 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  let enabled2 = apexExperiment.useConfig(tmp5).enabled;
  if (enabled) {
    enabled2 = tmp4;
  }
  if (cResult[4] !== enabled2) {
    const obj4 = { enabled: enabled2 };
    cResult[4] = enabled2;
    cResult[5] = obj4;
    tmp6 = obj4;
  } else {
    tmp6 = cResult[5];
  }
  return tmp6;
}) : (function useNativeMarkdown(location) {
  const _location = location.location;
  const enabled = apexExperiment1.useConfig({ location: _location }).enabled;
  const tmp = useLabFeatureDefault(enable_native_markdown);
  let enabled2 = apexExperiment.useConfig({ location: _location }).enabled;
  if (enabled) {
    enabled2 = tmp;
  }
  return { enabled: enabled2 };
});
const result = size.fileFinishedImporting("modules/markup_v2/NativeMarkdownExperiment.tsx");

export const NativeMarkdownExperiment = apexExperiment;
export const NativeMarkdownSettingExperiment = apexExperiment1;
export const NATIVE_MARKDOWN_LAB_FEATURE = "enable_native_markdown";
export function isNativeMarkdownEnabled(location, arg1) {
  let enabled;
  const _location = location.location;
  if (apexExperiment1.getConfig({ location: _location }, arg1).enabled) {
    enabled = LabFeatureStore.get(enable_native_markdown);
  } else {
    const obj = { location: _location };
    enabled = apexExperiment.getConfig(obj, arg1).enabled;
  }
  return enabled;
}
export const useNativeMarkdown = tmp4;
