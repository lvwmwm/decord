// Module ID: 7641
// Function ID: 61186
// Name: apexExperiment
// Dependencies: [1428, 4528, 2]
// Exports: shouldSkipAccessibilityLabels

// Module 7641 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { kind: "user", name: "2026-03-mobile-accessibility-label-optimization", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const config = apexExperiment.getConfig({ location: "default" });
const result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  enabled = enabled.enabled;
  if (enabled) {
    enabled = !require(4528) /* SCREEN_READER_ENABLED_GETTER */.getIsScreenReaderEnabled();
    const obj = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  }
  return enabled;
};
