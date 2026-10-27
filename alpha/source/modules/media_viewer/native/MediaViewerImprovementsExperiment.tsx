// Module ID: 14273
// Function ID: 14274
// Name: MediaViewerImprovementsExperiment
// Dependencies: [1452, 558, 576, 2]

// Module 14273 (MediaViewerImprovementsExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-media-viewer-improvements", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMediaViewerImprovementsEnabled() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "mediaViewerImprovements" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return closure_2.useConfig(first).enabled;
}) : (function useIsMediaViewerImprovementsEnabled() {
  return closure_2.useConfig({ location: "mediaViewerImprovements" }).enabled;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerImprovementsExperiment.tsx");

export const useIsMediaViewerImprovementsEnabled = tmp2;
