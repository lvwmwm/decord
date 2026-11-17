// Module ID: 19030
// Function ID: 19031
// Name: GameClaimCoachmarkExperiment
// Dependencies: [5524, 2]
// Exports: useGameClaimCoachmarkEnabled

// Module 19030 (GameClaimCoachmarkExperiment)
import createExperiment from "module_5524" /* 5524 */;
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
