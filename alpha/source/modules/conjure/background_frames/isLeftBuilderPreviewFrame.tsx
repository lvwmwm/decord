// Module ID: 17029
// Function ID: 17030
// Name: isLeftBuilderPreviewFrame
// Dependencies: [16011, 7349, 7036, 2]
// Exports: default

// Module 17029 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 7036 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7349 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16011 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
