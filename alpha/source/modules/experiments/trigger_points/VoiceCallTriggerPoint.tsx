// Module ID: 18350
// Function ID: 18351
// Name: VoiceCallTriggerPoint
// Dependencies: [5073, 10388, 18351, 17873, 18352, 18353, 14157, 2]

// Module 18350 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5073 */;
import Helpers from "Helpers" /* 10388 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14157 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17873 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18351 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18352 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18353 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
