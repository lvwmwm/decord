// Module ID: 4578
// Function ID: 40150
// Name: getSoundmojiRenderingExperiment
// Dependencies: []
// Exports: getSoundmojiRenderingExperiment, useSoundmojiRenderingExperiment

// Module 4578 (getSoundmojiRenderingExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: 24, 1387159956: 24, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
