// Module ID: 8215
// Function ID: 8216
// Name: GameEventsOnPlayerExperiment
// Dependencies: [1447, 2]
// Exports: isGameEventsOnPlayerEnabled

// Module 8215 (GameEventsOnPlayerExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-clips-game-events-on-player", defaultConfig: { enableGameEventsOnPlayer: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableGameEventsOnPlayer: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  const obj = { location: getClipEventsTimeline };
  return apexExperiment.getConfig(obj).enableGameEventsOnPlayer;
}
