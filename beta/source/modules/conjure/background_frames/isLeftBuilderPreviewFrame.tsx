// Module ID: 16994
// Function ID: 16995
// Name: isLeftBuilderPreviewFrame
// Dependencies: [15974, 7339, 7028, 2]
// Exports: default

// Module 16994 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 7028 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7339 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15974 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
