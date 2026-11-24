// Module ID: 8196
// Function ID: 8197
// Name: DidBackgroundAppNativeExperiment
// Dependencies: [1450, 2]

// Module 8196 (DidBackgroundAppNativeExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-11-mobile-did-background-app-native", defaultConfig: { useNative: false }, variations: { 0: { useNative: false }, 1: { useNative: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/DidBackgroundAppNativeExperiment.tsx");

export default apexExperiment;
