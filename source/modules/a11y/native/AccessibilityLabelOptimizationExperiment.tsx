// Module ID: 7871
// Function ID: 7872
// Name: apexExperiment
// Dependencies: [1452, 4681, 2]
// Exports: shouldSkipAccessibilityLabels

// Module 7871 (apexExperiment)
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
    enabled = !require(4681) /* SCREEN_READER_ENABLED_GETTER */.getIsScreenReaderEnabled();
    const obj = require(4681) /* SCREEN_READER_ENABLED_GETTER */;
  }
  return enabled;
};
