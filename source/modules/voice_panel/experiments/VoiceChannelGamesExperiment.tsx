// Module ID: 9178
// Function ID: 9179
// Name: useIsVoiceChannelGamesExperimentEnabled
// Dependencies: [1434, 2]
// Exports: default

// Module 9178 (useIsVoiceChannelGamesExperimentEnabled)
import getUnitIdDefault from "getUnitId" /* 1434 */;

const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default function useIsVoiceChannelGamesExperimentEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const VoiceChannelGamesExperiment = tmp2;
