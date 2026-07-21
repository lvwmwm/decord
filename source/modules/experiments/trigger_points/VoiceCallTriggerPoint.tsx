// Module ID: 15884
// Function ID: 121668
// Name: commonTriggerPointConfiguration
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15884 (commonTriggerPointConfiguration)
import result from "result";

const items = [require("result"), require("result").VoiceChannelHoistingExperiment, require("result").HangoutWindowExperiment, require("result"), require("result"), require("result").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("result").CommonTriggerPointConfiguration(items, require("result").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
result = result.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
