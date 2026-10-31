// Module ID: 14780
// Function ID: 14781
// Name: MediaViewerEntranceJankExperiment
// Dependencies: [1447, 2]
// Exports: useIsMediaViewerEntranceJankFixEnabled

// Module 14780 (MediaViewerEntranceJankExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-media-viewer-entrance-jank", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerEntranceJankExperiment.tsx");

export function useIsMediaViewerEntranceJankFixEnabled() {
  return closure_0.useConfig({ location: "mediaViewerEntranceJank" }).enabled;
}
