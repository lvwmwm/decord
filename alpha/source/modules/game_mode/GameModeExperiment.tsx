// Module ID: 5018
// Function ID: 5019
// Name: GameModeExperiment
// Dependencies: [1447, 2]
// Exports: getGameModeExperimentConfig, useGameModeExperimentConfig

// Module 5018 (GameModeExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
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
