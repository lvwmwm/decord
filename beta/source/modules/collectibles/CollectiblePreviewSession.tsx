// Module ID: 11423
// Function ID: 11424
// Name: CollectiblePreviewSession
// Dependencies: [2]
// Exports: commitCollectiblePreview, currentPreviewGeneration

// Module 11423 (CollectiblePreviewSession)
import size from "module_2" /* 2 */;

let closure_0 = 0;
const result = size.fileFinishedImporting("modules/collectibles/CollectiblePreviewSession.tsx");

export function currentPreviewGeneration() {
  return closure_0;
}
export function commitCollectiblePreview() {
  closure_0 = closure_0 + 1;
}
