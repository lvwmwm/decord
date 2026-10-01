// Module ID: 15890
// Function ID: 15891
// Name: GameServerTabAlwaysOnExperiment
// Dependencies: [1435, 2]
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 15890 (GameServerTabAlwaysOnExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  const obj = { location: useGuildActionRows };
  return closure_0.useConfig(obj).enabled;
};
