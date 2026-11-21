// Module ID: 17781
// Function ID: 17782
// Name: GameServerTabAlwaysOnExperiment
// Dependencies: [1450, 2]
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 17781 (GameServerTabAlwaysOnExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  const obj = { location: useGuildActionRows };
  return closure_0.useConfig(obj).enabled;
}
