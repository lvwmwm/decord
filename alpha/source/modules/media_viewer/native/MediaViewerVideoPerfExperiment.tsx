// Module ID: 15224
// Function ID: 15225
// Name: MediaViewerVideoPerfExperiment
// Dependencies: [1452, 1380, 2]

// Module 15224 (MediaViewerVideoPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
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
