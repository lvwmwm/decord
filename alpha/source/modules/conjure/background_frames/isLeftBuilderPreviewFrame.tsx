// Module ID: 16677
// Function ID: 16678
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11052, 11005, 6909, 2]
// Exports: default

// Module 16677 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6909 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11005 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11052 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
