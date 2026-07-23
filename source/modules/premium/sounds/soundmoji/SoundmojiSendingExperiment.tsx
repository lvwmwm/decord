// Module ID: 9336
// Function ID: 72962
// Name: getSoundmojiSendExperiment
// Dependencies: [1428, 2]
// Exports: getSoundmojiSendExperiment, useSoundmojiEmojiPickerSectionExperiment, useSoundmojiSendExperiment

// Module 9336 (getSoundmojiSendExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: { [1]: { enabled: true, showSoundmojiInEmojiPicker: false }, [2]: { enabled: true, showSoundmojiInEmojiPicker: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiSendExperiment = function useSoundmojiSendExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const useSoundmojiEmojiPickerSectionExperiment = function useSoundmojiEmojiPickerSectionExperiment(location) {
  return closure_0.useConfig({ location: location.location }).showSoundmojiInEmojiPicker;
};
