// Module ID: 8847
// Function ID: 8848
// Name: MediaViewerVideoPerfExperiment
// Dependencies: [1447, 1375, 2]

// Module 8847 (MediaViewerVideoPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-media-viewer-video-perf-android", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const tmp2 = PlatformUtils.isAndroid() ? (function useIsMediaViewerVideoPerfEnabledOnAndroid() {
  return closure_0.useConfig({ location: "mediaViewerVideoPerf" }).enabled;
}) : (() => false);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerVideoPerfExperiment.tsx");

export const useIsMediaViewerVideoPerfEnabled = tmp2;
