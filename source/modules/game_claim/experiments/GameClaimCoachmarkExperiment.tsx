// Module ID: 15133
// Function ID: 115111
// Name: items
// Dependencies: [4042, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 15133 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
