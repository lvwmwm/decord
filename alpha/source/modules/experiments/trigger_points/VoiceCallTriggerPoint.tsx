// Module ID: 18687
// Function ID: 18688
// Name: VoiceCallTriggerPoint
// Dependencies: [5177, 10541, 18688, 18206, 18689, 18690, 14455, 2]

// Module 18687 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5177 */;
import Helpers from "Helpers" /* 10541 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14455 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18206 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18688 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18689 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18690 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
