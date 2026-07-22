// Module ID: 9329
// Function ID: 72921
// Name: getSoundmojiSendExperiment
// Dependencies: []
// Exports: getSoundmojiSendExperiment, useSoundmojiEmojiPickerSectionExperiment, useSoundmojiSendExperiment

// Module 9329 (getSoundmojiSendExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "5f09a79d208de30c6568041c7b77048f", DateToSystemTimezoneSetter: "img_search_empty_dark", defaultConfig: { channelId: true, allowLinks: true }, variations: { [1]: { channelId: "<string:1040334421>", allowLinks: "<string:1040334338>" }, [2]: { channelId: null, allowLinks: null } } };
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
