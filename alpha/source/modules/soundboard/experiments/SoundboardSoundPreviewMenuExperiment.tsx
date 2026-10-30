// Module ID: 19129
// Function ID: 19130
// Name: SoundboardSoundPreviewMenuExperiment
// Dependencies: [1448, 2]
// Exports: useSoundboardSoundPreviewMenuEnabled

// Module 19129 (SoundboardSoundPreviewMenuExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
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
