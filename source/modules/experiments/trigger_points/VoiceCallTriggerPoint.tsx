// Module ID: 16912
// Function ID: 16913
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10583, 9866, 16913, 16412, 16914, 16915, 8137, 2]

// Module 16912 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9866 */;
import experimentDefault2 from "experiment" /* 16914 */;
import experimentDefault3 from "experiment" /* 16915 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
