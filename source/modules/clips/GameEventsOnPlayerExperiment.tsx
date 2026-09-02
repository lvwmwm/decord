// Module ID: 5084
// Function ID: 5085
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: isGameEventsOnPlayerEnabled

// Module 5084 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enableGameEventsOnPlayer: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-clips-game-events-on-player", defaultConfig: { enableGameEventsOnPlayer: false }, variations: obj });
const result = set.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
