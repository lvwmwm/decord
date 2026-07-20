// Module ID: 14952
// Function ID: 112521
// Name: experiment
// Dependencies: []
// Exports: useGameClaimCoachmarkEnabled

// Module 14952 (experiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
