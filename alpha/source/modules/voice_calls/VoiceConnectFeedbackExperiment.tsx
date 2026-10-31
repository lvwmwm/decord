// Module ID: 18285
// Function ID: 18286
// Name: VoiceConnectFeedbackExperiment
// Dependencies: [1448, 2]

// Module 18285 (VoiceConnectFeedbackExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-voice-connect-feedback", defaultConfig: { rtcConnectionJoinSounds: false, showSelfConnectingUI: false }, variations: obj2 };
obj2 = { 1: null, 2: { rtcConnectionJoinSounds: true, showSelfConnectingUI: false } };
obj2[2] = { rtcConnectionJoinSounds: true, showSelfConnectingUI: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceConnectFeedbackExperiment.tsx");

export default tmp2;
