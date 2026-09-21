// Module ID: 17758
// Function ID: 17759
// Name: VoiceCallTriggerPoint
// Dependencies: [4675, 11108, 9973, 17759, 17303, 17760, 17761, 13490, 2]

// Module 17758 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9973 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17760 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17761 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17759).VoiceChannelHoistingExperiment, fn(17303).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13490).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11108).CommonTriggerPointConfiguration(items, fn(4675).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
