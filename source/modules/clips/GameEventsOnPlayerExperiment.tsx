// Module ID: 4666
// Function ID: 40504
// Name: apexExperiment
// Dependencies: []
// Exports: isGameEventsOnPlayerEnabled

// Module 4666 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: null, paddingHorizontal: true, defaultConfig: { enableGameEventsOnPlayer: false }, variations: { [1]: { enableGameEventsOnPlayer: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
