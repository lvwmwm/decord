// Module ID: 11600
// Function ID: 11601
// Name: useIsNewGamesCoachmarkEnabled
// Dependencies: [1452, 2]
// Exports: useIsNewGamesCoachmarkEnabled

// Module 11600 (useIsNewGamesCoachmarkEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  return closure_0.useConfig({ location: useGuildPowerupsChannelListPopout }).enabled;
};
