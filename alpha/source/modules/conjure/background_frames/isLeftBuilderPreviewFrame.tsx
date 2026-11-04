// Module ID: 16619
// Function ID: 16620
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11105, 11062, 6989, 2]
// Exports: default

// Module 16619 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6989 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11105 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
