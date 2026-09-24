// Module ID: 10008
// Function ID: 10009
// Name: VoiceChannelGamesExperiment
// Dependencies: [1439, 558, 568, 2]

// Module 10008 (VoiceChannelGamesExperiment)
import c from "c" /* 568 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

require = fn;
let tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-08-mobile-voice-channel-games", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_2 = tmp2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/experiments/VoiceChannelGamesExperiment.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : ((location) => closure_2.useConfig({ location }).enabled);
export const VoiceChannelGamesExperiment = tmp2;
