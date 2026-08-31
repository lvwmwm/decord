// Module ID: 15813
// Function ID: 15814
// Name: useIsGameServerTabAlwaysOnEnabled
// Dependencies: [1468, 2]
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 15813 (useIsGameServerTabAlwaysOnEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};
