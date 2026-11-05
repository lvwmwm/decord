// Module ID: 16632
// Function ID: 16633
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11114, 11068, 6992, 2]
// Exports: default

// Module 16632 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6992 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11068 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11114 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
