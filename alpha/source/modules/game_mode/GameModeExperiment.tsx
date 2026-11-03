// Module ID: 5145
// Function ID: 5146
// Name: GameModeExperiment
// Dependencies: [1449, 2]
// Exports: getGameModeExperimentConfig, useGameModeExperimentConfig

// Module 5145 (GameModeExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-08-game-mode", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/game_mode/GameModeExperiment.tsx");

export function getGameModeExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj);
}
export function useGameModeExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj);
}
