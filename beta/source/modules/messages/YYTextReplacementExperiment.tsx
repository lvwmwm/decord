// Module ID: 17648
// Function ID: 17649
// Name: YYTextReplacementExperiment
// Dependencies: [1441, 2]
// Exports: shouldEnableYYTextReplacement

// Module 17648 (YYTextReplacementExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-01-yytext-replacement-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  const obj = { location: location.location };
  return config.getConfig(obj).enabled;
};
