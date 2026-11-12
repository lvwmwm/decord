// Module ID: 16720
// Function ID: 16721
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11084, 11037, 6942, 2]
// Exports: default

// Module 16720 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6942 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11037 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11084 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
