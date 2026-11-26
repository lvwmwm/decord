// Module ID: 15953
// Function ID: 15954
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14740, 7677, 6945, 2]
// Exports: default

// Module 15953 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6945 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7677 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14740 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
