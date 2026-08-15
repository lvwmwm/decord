// Module ID: 13935
// Function ID: 13936
// Name: usePlainTextExperiment
// Dependencies: [1472, 2]
// Exports: usePlainTextExperiment

// Module 13935 (usePlainTextExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-react-native-plain-text", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/design/PlainTextExperiment.tsx");

export const usePlainTextExperiment = function usePlainTextExperiment(RootThemeContextProvider) {
  return closure_0.useConfig({ location: RootThemeContextProvider }).enabled;
};
