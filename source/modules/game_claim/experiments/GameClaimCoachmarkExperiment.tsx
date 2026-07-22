// Module ID: 14970
// Function ID: 112622
// Name: items
// Dependencies: []
// Exports: useGameClaimCoachmarkEnabled

// Module 14970 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: "justifyContent", flex: "shapes", sk: "accessibilityRole", defaultConfig: { enabled: false } };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
