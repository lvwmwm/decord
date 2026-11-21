// Module ID: 15753
// Function ID: 15754
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14735, 6943, 6632, 2]
// Exports: default

// Module 15753 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6632 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14735 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
