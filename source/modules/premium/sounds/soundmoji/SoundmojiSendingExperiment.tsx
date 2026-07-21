// Module ID: 9328
// Function ID: 72908
// Name: getSoundmojiSendExperiment
// Dependencies: []
// Exports: getSoundmojiSendExperiment, useSoundmojiEmojiPickerSectionExperiment, useSoundmojiSendExperiment

// Module 9328 (getSoundmojiSendExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "5f09a79d208de30c6568041c7b77048f", 1387159956: "img_search_empty_dark", defaultConfig: { isArray: null, get: null }, variations: { [1]: { isArray: null, get: null }, [2]: { isArray: null, get: null } } };
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
