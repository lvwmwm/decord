// Module ID: 15666
// Function ID: 15667
// Name: isLeftBuilderPreviewFrame
// Dependencies: [14645, 6824, 6511, 2]
// Exports: default

// Module 15666 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6511 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6824 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14645 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
