// Module ID: 11882
// Function ID: 91988
// Name: items
// Dependencies: []
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 11882 (items)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, defaultConfig: { enabled: false } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};
