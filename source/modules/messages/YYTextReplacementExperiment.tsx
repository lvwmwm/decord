// Module ID: 16560
// Function ID: 129169
// Name: shouldEnableYYTextReplacement
// Dependencies: [1428, 2]
// Exports: shouldEnableYYTextReplacement

// Module 16560 (shouldEnableYYTextReplacement)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-yytext-replacement-ios", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  return config.getConfig({ location: location.location }).enabled;
};
