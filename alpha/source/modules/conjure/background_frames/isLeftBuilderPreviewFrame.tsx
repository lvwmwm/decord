// Module ID: 15630
// Function ID: 15631
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14613, 6824, 6513, 2]
// Exports: default

// Module 15630 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6513 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6824 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14613 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
