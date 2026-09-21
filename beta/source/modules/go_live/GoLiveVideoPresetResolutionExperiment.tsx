// Module ID: 10209
// Function ID: 10210
// Name: GoLiveVideoPresetResolutionExperiment
// Dependencies: [4805, 1439, 2]

// Module 10209 (GoLiveVideoPresetResolutionExperiment)
import StreamSettingsConstants from "StreamSettingsConstants" /* 4805 */;
import ApexExperiment from "apex/ApexExperiment" /* 1439 */;
import size from "module_2" /* 2 */;

const ApplicationStreamResolutions = StreamSettingsConstants.ApplicationStreamResolutions;
const obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
const obj2 = { name: "2026-02-go-live-video-preset-resolution", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.videoPresetResolutionMax = ApplicationStreamResolutions.RESOLUTION_1080;
obj3[1] = obj4;
obj2.variations = obj3;
const result = size.fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default ApexExperiment(obj2);
