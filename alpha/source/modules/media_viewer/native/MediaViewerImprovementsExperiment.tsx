// Module ID: 14765
// Function ID: 14766
// Name: MediaViewerImprovementsExperiment
// Dependencies: [1448, 2]
// Exports: useIsMediaViewerImprovementsEnabled

// Module 14765 (MediaViewerImprovementsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-media-viewer-improvements", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerImprovementsExperiment.tsx");

export function useIsMediaViewerImprovementsEnabled() {
  return closure_0.useConfig({ location: "mediaViewerImprovements" }).enabled;
}
