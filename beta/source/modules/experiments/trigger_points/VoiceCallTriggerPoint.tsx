// Module ID: 17769
// Function ID: 17770
// Name: VoiceCallTriggerPoint
// Dependencies: [4707, 11144, 10005, 17770, 17314, 17771, 17772, 13526, 2]

// Module 17769 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 10005 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17771 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17772 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17770).VoiceChannelHoistingExperiment, fn(17314).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13526).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11144).CommonTriggerPointConfiguration(items, fn(4707).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
