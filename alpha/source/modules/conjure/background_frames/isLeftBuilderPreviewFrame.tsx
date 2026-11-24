// Module ID: 15781
// Function ID: 15782
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14565, 7551, 6819, 2]
// Exports: default

// Module 15781 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6819 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7551 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14565 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
