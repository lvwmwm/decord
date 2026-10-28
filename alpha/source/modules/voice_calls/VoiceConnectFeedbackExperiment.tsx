// Module ID: 17944
// Function ID: 17945
// Name: VoiceConnectFeedbackExperiment
// Dependencies: [1453, 2]

// Module 17944 (VoiceConnectFeedbackExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-voice-connect-feedback", defaultConfig: { rtcConnectionJoinSounds: false, showSelfConnectingUI: false }, variations: obj2 };
obj2 = { 1: null, 2: { rtcConnectionJoinSounds: true, showSelfConnectingUI: false } };
obj2[2] = { rtcConnectionJoinSounds: true, showSelfConnectingUI: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceConnectFeedbackExperiment.tsx");

export default tmp2;
