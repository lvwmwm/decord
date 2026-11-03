// Module ID: 16515
// Function ID: 16516
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11056, 11013, 6974, 2]
// Exports: default

// Module 16515 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6974 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11013 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11056 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
