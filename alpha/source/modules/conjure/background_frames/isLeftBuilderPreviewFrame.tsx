// Module ID: 15679
// Function ID: 15680
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14658, 6854, 6540, 2]
// Exports: default

// Module 15679 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6540 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6854 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14658 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
