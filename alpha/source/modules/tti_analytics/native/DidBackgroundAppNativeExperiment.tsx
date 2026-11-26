// Module ID: 8337
// Function ID: 8338
// Name: DidBackgroundAppNativeExperiment
// Dependencies: [1451, 2]

// Module 8337 (DidBackgroundAppNativeExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-11-mobile-did-background-app-native", defaultConfig: { useNative: false }, variations: { 0: { useNative: false }, 1: { useNative: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/DidBackgroundAppNativeExperiment.tsx");

export default apexExperiment;
