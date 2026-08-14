// Module ID: 4917
// Function ID: 4918
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: isGameEventsOnPlayerEnabled

// Module 4917 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enableGameEventsOnPlayer: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-clips-game-events-on-player", defaultConfig: { enableGameEventsOnPlayer: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
