// Module ID: 16917
// Function ID: 16918
// Name: shouldEnableYYTextReplacement
// Dependencies: [1471, 2]
// Exports: shouldEnableYYTextReplacement

// Module 16917 (shouldEnableYYTextReplacement)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-yytext-replacement-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  return config.getConfig({ location: location.location }).enabled;
};
