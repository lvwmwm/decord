// Module ID: 4665
// Function ID: 40519
// Name: apexExperiment
// Dependencies: []
// Exports: isGameEventsOnPlayerEnabled

// Module 4665 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enableGameEventsOnPlayer: false }, variations: { [1]: { enableGameEventsOnPlayer: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
