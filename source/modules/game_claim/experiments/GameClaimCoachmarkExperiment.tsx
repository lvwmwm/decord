// Module ID: 14962
// Function ID: 112579
// Name: items
// Dependencies: []
// Exports: useGameClaimCoachmarkEnabled

// Module 14962 (items)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, defaultConfig: { enabled: false } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
