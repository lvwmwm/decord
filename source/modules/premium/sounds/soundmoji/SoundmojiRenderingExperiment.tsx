// Module ID: 4579
// Function ID: 40143
// Name: getSoundmojiRenderingExperiment
// Dependencies: []
// Exports: getSoundmojiRenderingExperiment, useSoundmojiRenderingExperiment

// Module 4579 (getSoundmojiRenderingExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: 24, 0: 24, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
