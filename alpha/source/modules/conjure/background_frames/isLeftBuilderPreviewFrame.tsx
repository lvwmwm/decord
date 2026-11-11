// Module ID: 16876
// Function ID: 16877
// Name: isLeftBuilderPreviewFrame
// Dependencies: [15859, 7275, 6965, 2]
// Exports: default

// Module 16876 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6965 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7275 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15859 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
