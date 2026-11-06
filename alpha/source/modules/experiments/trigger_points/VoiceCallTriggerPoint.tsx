// Module ID: 19742
// Function ID: 19743
// Name: VoiceCallTriggerPoint
// Dependencies: [5385, 10814, 19743, 19218, 19744, 19745, 15319, 2]

// Module 19742 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5385 */;
import Helpers from "Helpers" /* 10814 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15319 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19218 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19743 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19744 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19745 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
