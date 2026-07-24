// Module ID: 11570
// Function ID: 90122
// Name: useIsNewGamesCoachmarkEnabled
// Dependencies: [1428, 2]
// Exports: useIsNewGamesCoachmarkEnabled

// Module 11570 (useIsNewGamesCoachmarkEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  return closure_0.useConfig({ location: useGuildPowerupsChannelListPopout }).enabled;
};
