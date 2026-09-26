// Module ID: 17760
// Function ID: 17761
// Name: VoiceCallTriggerPoint
// Dependencies: [4704, 11102, 10027, 17761, 17304, 17762, 17763, 13516, 2]

// Module 17760 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 10027 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17762 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17763 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17761).VoiceChannelHoistingExperiment, fn(17304).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13516).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11102).CommonTriggerPointConfiguration(items, fn(4704).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
