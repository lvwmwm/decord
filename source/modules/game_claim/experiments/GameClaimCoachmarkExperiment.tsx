// Module ID: 16262
// Function ID: 16263
// Name: experiment
// Dependencies: [4474, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 16262 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4474 */;

const items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export const useGameClaimCoachmarkEnabled = function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  return experiment.useExperiment({ guildId, location: useCanShowGameClaimCoachmark }, { autoTrackExposure: false }).enabled;
};
