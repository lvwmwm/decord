// Module ID: 9284
// Function ID: 9285
// Name: useIsVoiceChannelGamesExperimentEnabled
// Dependencies: [1368, 2]
// Exports: default

// Module 9284 (useIsVoiceChannelGamesExperimentEnabled)
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let c0 = tmp2;
const result = require("set").fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default function useIsVoiceChannelGamesExperimentEnabled(location) {
  return tmp2.useConfig({ location }).enabled;
};
export const VoiceChannelGamesExperiment = tmp2;
