// Module ID: 4582
// Function ID: 40194
// Name: getSoundmojiRenderingExperiment
// Dependencies: [1428, 2]
// Exports: getSoundmojiRenderingExperiment, useSoundmojiRenderingExperiment

// Module 4582 (getSoundmojiRenderingExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-soundmoji-rendering", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
