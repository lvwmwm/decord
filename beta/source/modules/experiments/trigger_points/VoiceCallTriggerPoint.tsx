// Module ID: 19478
// Function ID: 19479
// Name: VoiceCallTriggerPoint
// Dependencies: [5531, 9239, 19479, 18591, 19480, 19481, 14287, 2]

// Module 19478 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5531 */;
import Helpers from "Helpers" /* 9239 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14287 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18591 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19479 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19480 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19481 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
