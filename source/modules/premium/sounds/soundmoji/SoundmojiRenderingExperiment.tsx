// Module ID: 4639
// Function ID: 4640
// Name: getSoundmojiRenderingExperiment
// Dependencies: [1452, 2]
// Exports: getSoundmojiRenderingExperiment, useSoundmojiRenderingExperiment

// Module 4639 (getSoundmojiRenderingExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-soundmoji-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export const getSoundmojiRenderingExperiment = function getSoundmojiRenderingExperiment(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useSoundmojiRenderingExperiment = function useSoundmojiRenderingExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
