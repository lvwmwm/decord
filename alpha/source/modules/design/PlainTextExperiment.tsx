// Module ID: 16417
// Function ID: 16418
// Name: PlainTextExperiment
// Dependencies: [1447, 2]
// Exports: usePlainTextExperiment

// Module 16417 (PlainTextExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-react-native-plain-text", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlainTextExperiment.tsx");

export function usePlainTextExperiment(RootThemeContextProvider) {
  const obj = { location: RootThemeContextProvider };
  return closure_0.useConfig(obj).enabled;
}
