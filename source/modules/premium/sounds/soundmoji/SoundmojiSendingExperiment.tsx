// Module ID: 9328
// Function ID: 72897
// Name: getSoundmojiSendExperiment
// Dependencies: []
// Exports: getSoundmojiSendExperiment, useSoundmojiEmojiPickerSectionExperiment, useSoundmojiSendExperiment

// Module 9328 (getSoundmojiSendExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: true, 0: true, defaultConfig: { paddingHorizontal: null, colors: null }, variations: { [1]: { paddingHorizontal: true, colors: true }, [2]: { paddingHorizontal: null, colors: null } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiSendExperiment = function useSoundmojiSendExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const useSoundmojiEmojiPickerSectionExperiment = function useSoundmojiEmojiPickerSectionExperiment(location) {
  return closure_0.useConfig({ location: location.location }).showSoundmojiInEmojiPicker;
};
