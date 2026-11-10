// Module ID: 16715
// Function ID: 16716
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11061, 11014, 6912, 2]
// Exports: default

// Module 16715 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6912 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11014 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11061 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
