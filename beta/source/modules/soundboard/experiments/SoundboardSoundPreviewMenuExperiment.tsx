// Module ID: 16897
// Function ID: 16898
// Name: SoundboardSoundPreviewMenuExperiment
// Dependencies: [1435, 2]
// Exports: useSoundboardSoundPreviewMenuEnabled

// Module 16897 (SoundboardSoundPreviewMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true, returnOnUpsellDismiss: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export const useSoundboardSoundPreviewMenuEnabled = function useSoundboardSoundPreviewMenuEnabled(SoundboardSoundPreviewActionSheet) {
  const obj = { location: SoundboardSoundPreviewActionSheet };
  return apexExperiment.useConfig(obj).enabled;
};
