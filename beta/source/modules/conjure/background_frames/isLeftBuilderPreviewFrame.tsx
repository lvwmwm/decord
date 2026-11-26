// Module ID: 15765
// Function ID: 15766
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14746, 6943, 6632, 2]
// Exports: default

// Module 15765 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6632 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14746 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
