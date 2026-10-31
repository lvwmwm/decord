// Module ID: 19178
// Function ID: 19179
// Name: SoundboardSoundPreviewMenuExperiment
// Dependencies: [1447, 2]
// Exports: useSoundboardSoundPreviewMenuEnabled

// Module 19178 (SoundboardSoundPreviewMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-08-mobile-soundboard-sound-preview-menu", defaultConfig: { enabled: false, returnOnUpsellDismiss: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true, returnOnUpsellDismiss: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardSoundPreviewMenuExperiment.tsx");

export const SoundboardSoundPreviewMenuExperiment = apexExperiment;
export function useSoundboardSoundPreviewMenuEnabled(SoundboardSoundPreviewActionSheet) {
  const obj = { location: SoundboardSoundPreviewActionSheet };
  return apexExperiment.useConfig(obj).enabled;
}
