// Module ID: 19736
// Function ID: 19737
// Name: VoiceCallTriggerPoint
// Dependencies: [5365, 10862, 19737, 19226, 19738, 19739, 15325, 2]

// Module 19736 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5365 */;
import Helpers from "Helpers" /* 10862 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15325 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19226 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19737 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19738 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19739 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
