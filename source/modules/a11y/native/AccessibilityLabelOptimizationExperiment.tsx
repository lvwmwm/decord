// Module ID: 8127
// Function ID: 8128
// Name: apexExperiment
// Dependencies: [1471, 4763, 2]
// Exports: shouldSkipAccessibilityLabels

// Module 8127 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-mobile-accessibility-label-optimization", defaultConfig: { enabled: false }, variations: obj });
const config = apexExperiment.getConfig({ location: "default" });
const result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  enabled = enabled.enabled;
  if (enabled) {
    enabled = !require(4763) /* SCREEN_READER_ENABLED_GETTER */.getIsScreenReaderEnabled();
    const obj = require(4763) /* SCREEN_READER_ENABLED_GETTER */;
  }
  return enabled;
};
