// Module ID: 15761
// Function ID: 15762
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14743, 6943, 6632, 2]
// Exports: default

// Module 15761 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6632 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14743 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
