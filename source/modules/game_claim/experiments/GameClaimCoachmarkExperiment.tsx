// Module ID: 15223
// Function ID: 15224
// Name: experiment
// Dependencies: [4101, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 15223 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
