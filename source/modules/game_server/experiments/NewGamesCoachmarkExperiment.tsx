// Module ID: 11872
// Function ID: 11873
// Name: useIsNewGamesCoachmarkEnabled
// Dependencies: [1471, 2]
// Exports: useIsNewGamesCoachmarkEnabled

// Module 11872 (useIsNewGamesCoachmarkEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  return closure_0.useConfig({ location: useGuildPowerupsChannelListPopout }).enabled;
};
