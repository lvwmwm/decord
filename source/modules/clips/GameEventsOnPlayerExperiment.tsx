// Module ID: 5133
// Function ID: 5134
// Name: apexExperiment
// Dependencies: [1433, 2]
// Exports: isGameEventsOnPlayerEnabled

// Module 5133 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enableGameEventsOnPlayer: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-clips-game-events-on-player", defaultConfig: { enableGameEventsOnPlayer: false }, variations: obj });
const result = set.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
