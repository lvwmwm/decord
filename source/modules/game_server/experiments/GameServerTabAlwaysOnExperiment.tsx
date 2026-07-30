// Module ID: 15219
// Function ID: 15220
// Name: useIsGameServerTabAlwaysOnEnabled
// Dependencies: [1452, 2]
// Exports: useIsGameServerTabAlwaysOnEnabled

// Module 15219 (useIsGameServerTabAlwaysOnEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-game-server-tab-always-on", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_server/experiments/GameServerTabAlwaysOnExperiment.tsx");

export const useIsGameServerTabAlwaysOnEnabled = function useIsGameServerTabAlwaysOnEnabled(useGuildActionRows) {
  return closure_0.useConfig({ location: useGuildActionRows }).enabled;
};
