// Module ID: 17053
// Function ID: 17054
// Name: PlainTextExperiment
// Dependencies: [1455, 2]
// Exports: usePlainTextExperiment

// Module 17053 (PlainTextExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-react-native-plain-text", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlainTextExperiment.tsx");

export const usePlainTextExperiment = function usePlainTextExperiment(RootThemeContextProvider) {
  const obj = { location: RootThemeContextProvider };
  return closure_0.useConfig(obj).enabled;
};
