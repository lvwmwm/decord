// Module ID: 17448
// Function ID: 17449
// Name: VoiceCallTriggerPoint
// Dependencies: [4553, 10941, 9304, 17449, 16947, 17450, 17451, 13317, 2]

// Module 17448 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9304 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17450 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17451 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17449).VoiceChannelHoistingExperiment, fn(16947).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13317).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10941).CommonTriggerPointConfiguration(items, fn(4553).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
