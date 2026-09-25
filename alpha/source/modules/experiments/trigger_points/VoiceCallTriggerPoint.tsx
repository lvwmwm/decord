// Module ID: 17085
// Function ID: 17086
// Name: VoiceCallTriggerPoint
// Dependencies: [4747, 10259, 17086, 16621, 17087, 17088, 12740, 2]

// Module 17085 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4747 */;
import Helpers from "Helpers" /* 10259 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12740 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16621 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17086 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17087 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17088 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
