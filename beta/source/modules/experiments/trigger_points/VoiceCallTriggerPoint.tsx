// Module ID: 17119
// Function ID: 17120
// Name: VoiceCallTriggerPoint
// Dependencies: [4753, 10309, 17120, 16656, 17121, 17122, 12758, 2]

// Module 17119 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4753 */;
import Helpers from "Helpers" /* 10309 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12758 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16656 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17120 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17121 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17122 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
