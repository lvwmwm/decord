// Module ID: 9190
// Function ID: 9191
// Name: VoiceChannelGamesExperiment
// Dependencies: [1436, 2]
// Exports: default

// Module 9190 (VoiceChannelGamesExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default function useIsVoiceChannelGamesExperimentEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
};
export const VoiceChannelGamesExperiment = tmp2;
