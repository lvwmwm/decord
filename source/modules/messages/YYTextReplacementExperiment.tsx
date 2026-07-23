// Module ID: 16513
// Function ID: 128845
// Name: shouldEnableYYTextReplacement
// Dependencies: [1428, 2]
// Exports: shouldEnableYYTextReplacement

// Module 16513 (shouldEnableYYTextReplacement)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-yytext-replacement-ios", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  return config.getConfig({ location: location.location }).enabled;
};
