// Module ID: 18242
// Function ID: 18243
// Name: VoiceConnectFeedbackExperiment
// Dependencies: [1449, 2]

// Module 18242 (VoiceConnectFeedbackExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-voice-connect-feedback", defaultConfig: { rtcConnectionJoinSounds: false, showSelfConnectingUI: false }, variations: obj2 };
obj2 = { 1: null, 2: { rtcConnectionJoinSounds: true, showSelfConnectingUI: false } };
obj2[2] = { rtcConnectionJoinSounds: true, showSelfConnectingUI: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceConnectFeedbackExperiment.tsx");

export default tmp2;
