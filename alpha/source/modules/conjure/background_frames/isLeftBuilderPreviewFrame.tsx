// Module ID: 16372
// Function ID: 16373
// Name: isLeftBuilderPreviewFrame
// Dependencies: [16294, 10883, 6854, 2]
// Exports: default

// Module 16372 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6854 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16294 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
