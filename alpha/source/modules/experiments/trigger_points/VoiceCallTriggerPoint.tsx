// Module ID: 17787
// Function ID: 17788
// Name: VoiceCallTriggerPoint
// Dependencies: [4977, 10150, 17788, 17318, 17789, 17790, 13319, 2]

// Module 17787 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import Helpers from "Helpers" /* 10150 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13319 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17318 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17788 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17789 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17790 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
