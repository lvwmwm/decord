// Module ID: 17759
// Function ID: 17760
// Name: VoiceCallTriggerPoint
// Dependencies: [4675, 11108, 9973, 17760, 17304, 17761, 17762, 13490, 2]

// Module 17759 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9973 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17761 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17762 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17760).VoiceChannelHoistingExperiment, fn(17304).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13490).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11108).CommonTriggerPointConfiguration(items, fn(4675).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
