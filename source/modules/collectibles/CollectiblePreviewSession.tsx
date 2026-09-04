// Module ID: 11020
// Function ID: 11021
// Name: currentPreviewGeneration
// Dependencies: [2]
// Exports: commitCollectiblePreview, currentPreviewGeneration

// Module 11020 (currentPreviewGeneration)
import set from "set" /* 2 */;

let c0 = 0;
const result = set.fileFinishedImporting("modules/collectibles/CollectiblePreviewSession.tsx");

export function currentPreviewGeneration() {
  return c0;
}
export function commitCollectiblePreview() {
  closure_0 = closure_0 + 1;
}
