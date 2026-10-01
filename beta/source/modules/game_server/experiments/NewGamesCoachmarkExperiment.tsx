// Module ID: 12004
// Function ID: 12005
// Name: NewGamesCoachmarkExperiment
// Dependencies: [1435, 2]
// Exports: useIsNewGamesCoachmarkEnabled

// Module 12004 (NewGamesCoachmarkExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-04-new-games-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/NewGamesCoachmarkExperiment.tsx");

export const useIsNewGamesCoachmarkEnabled = function useIsNewGamesCoachmarkEnabled(useGuildPowerupsChannelListPopout) {
  const obj = { location: useGuildPowerupsChannelListPopout };
  return closure_0.useConfig(obj).enabled;
};
