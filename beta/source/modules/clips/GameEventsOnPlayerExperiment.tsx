// Module ID: 5383
// Function ID: 5384
// Name: GameEventsOnPlayerExperiment
// Dependencies: [1438, 2]
// Exports: isGameEventsOnPlayerEnabled

// Module 5383 (GameEventsOnPlayerExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-07-clips-game-events-on-player", defaultConfig: { enableGameEventsOnPlayer: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableGameEventsOnPlayer: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
