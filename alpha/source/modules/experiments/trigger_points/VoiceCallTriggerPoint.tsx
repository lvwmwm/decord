// Module ID: 17505
// Function ID: 17506
// Name: VoiceCallTriggerPoint
// Dependencies: [4783, 10553, 17506, 17037, 17507, 17508, 13041, 2]

// Module 17505 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import Helpers from "Helpers" /* 10553 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13041 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17037 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17506 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17507 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17508 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
