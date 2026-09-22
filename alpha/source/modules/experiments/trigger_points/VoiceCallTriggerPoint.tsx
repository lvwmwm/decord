// Module ID: 17767
// Function ID: 17768
// Name: VoiceCallTriggerPoint
// Dependencies: [4673, 11077, 10001, 17768, 17312, 17769, 17770, 13495, 2]

// Module 17767 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 10001 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17769 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17770 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17768).VoiceChannelHoistingExperiment, fn(17312).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13495).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11077).CommonTriggerPointConfiguration(items, fn(4673).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
