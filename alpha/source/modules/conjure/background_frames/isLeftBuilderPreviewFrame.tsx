// Module ID: 15902
// Function ID: 15903
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14687, 7646, 6914, 2]
// Exports: default

// Module 15902 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6914 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7646 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14687 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
