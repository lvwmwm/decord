// Module ID: 8553
// Function ID: 8554
// Name: NativeMarkdownExperiment
// Dependencies: [8554, 1448, 8556, 2]
// Exports: isNativeMarkdownEnabled, useNativeMarkdown

// Module 8553 (NativeMarkdownExperiment)
import useLabFeatureDefault from "useLabFeature" /* 8556 */;
import LabFeatureStore from "LabFeatureStore" /* 8554 */;
import ApexExperiment_mod from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj2 = { name: "2026-10-native-markdown-setting", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
const enable_native_markdown = "enable_native_markdown";
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
export function useNativeMarkdown(location) {
  const _location = location.location;
  const enabled = apexExperiment1.useConfig({ location: _location }).enabled;
  const tmp = useLabFeatureDefault(enable_native_markdown);
  let enabled2 = apexExperiment.useConfig({ location: _location }).enabled;
  if (enabled) {
    enabled2 = tmp;
  }
  return { enabled: enabled2 };
}
