// Module ID: 17755
// Function ID: 17756
// Name: VoiceCallTriggerPoint
// Dependencies: [4672, 11071, 9995, 17756, 17300, 17757, 17758, 13487, 2]

// Module 17755 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9995 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17757 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17758 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17756).VoiceChannelHoistingExperiment, fn(17300).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13487).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11071).CommonTriggerPointConfiguration(items, fn(4672).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
