// Module ID: 18474
// Function ID: 18475
// Name: GameClaimCoachmarkExperiment
// Dependencies: [5359, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 18474 (GameClaimCoachmarkExperiment)
import createExperiment from "module_5359" /* 5359 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2026-02_game_claim_coachmark", label: "Game Claim Coachmark", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_claim/experiments/GameClaimCoachmarkExperiment.tsx");

export const GameClaimCoachmarkExperiment = experiment;
export function useGameClaimCoachmarkEnabled(guildId, useCanShowGameClaimCoachmark) {
  const obj = { guildId, location: useCanShowGameClaimCoachmark };
  return experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
}
