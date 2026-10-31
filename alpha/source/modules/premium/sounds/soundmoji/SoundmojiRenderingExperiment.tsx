// Module ID: 13412
// Function ID: 13413
// Name: SoundmojiRenderingExperiment
// Dependencies: [1447, 2]
// Exports: getSoundmojiRenderingExperiment, useSoundmojiRenderingExperiment

// Module 13412 (SoundmojiRenderingExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-soundmoji-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/SoundmojiRenderingExperiment.tsx");

export function getSoundmojiRenderingExperiment(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
}
export function useSoundmojiRenderingExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
