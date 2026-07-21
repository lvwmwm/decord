// Module ID: 14959
// Function ID: 112545
// Name: experiment
// Dependencies: []
// Exports: useGameClaimCoachmarkEnabled

// Module 14959 (experiment)
const _module = require(dependencyMap[0]);
const obj = { -1174339580: null, -1169096700: null, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
