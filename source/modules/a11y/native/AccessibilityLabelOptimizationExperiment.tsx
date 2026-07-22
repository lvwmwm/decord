// Module ID: 7635
// Function ID: 61149
// Name: apexExperiment
// Dependencies: []
// Exports: shouldSkipAccessibilityLabels

// Module 7635 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const config = apexExperiment.getConfig({ location: "default" });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx");

export default apexExperiment;
export const shouldSkipAccessibilityLabels = function shouldSkipAccessibilityLabels() {
  let enabled = enabled.enabled;
  if (enabled) {
    enabled = !require(dependencyMap[1]).getIsScreenReaderEnabled();
    const obj = require(dependencyMap[1]);
  }
  return enabled;
};
