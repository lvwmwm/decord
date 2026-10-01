// Module ID: 9750
// Function ID: 9751
// Name: SoundmojiSendingExperiment
// Dependencies: [1435, 2]
// Exports: getSoundmojiSendExperiment, useSoundmojiEmojiPickerSectionExperiment, useSoundmojiSendExperiment

// Module 9750 (SoundmojiSendingExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-soundmoji-sending", kind: "user", defaultConfig: { enabled: false, showSoundmojiInEmojiPicker: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, showSoundmojiInEmojiPicker: false } };
obj2[2] = { enabled: true, showSoundmojiInEmojiPicker: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiSendingExperiment.tsx");

export const getSoundmojiSendExperiment = function getSoundmojiSendExperiment(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
};
export const useSoundmojiSendExperiment = function useSoundmojiSendExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
};
export const useSoundmojiEmojiPickerSectionExperiment = function useSoundmojiEmojiPickerSectionExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).showSoundmojiInEmojiPicker;
};
