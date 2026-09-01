// Module ID: 12072
// Function ID: 12073
// Name: useIsNewGamesCoachmarkEnabled
// Dependencies: [1468, 2]
// Exports: useIsNewGamesCoachmarkEnabled

// Module 12072 (useIsNewGamesCoachmarkEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  return closure_0.useConfig({ location: useGuildPowerupsChannelListPopout }).enabled;
};
