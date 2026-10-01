// Module ID: 7536
// Function ID: 7537
// Name: NativeMarkdownExperiment
// Dependencies: [1435, 2]
// Exports: useNativeMarkdown

// Module 7536 (NativeMarkdownExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/markup_v2/NativeMarkdownExperiment.tsx");

export const NativeMarkdownExperiment = apexExperiment;
export const useNativeMarkdown = function useNativeMarkdown(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj);
};
