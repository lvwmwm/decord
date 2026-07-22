// Module ID: 16219
// Function ID: 125354
// Name: experiment
// Dependencies: []
// Exports: useApplicationIdentityLinkedRolesEnabled

// Module 16219 (experiment)
const _module = require(dependencyMap[0]);
const obj = { displayNameStylesEnabled: true, submitButtonEnabled: true, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
