// Module ID: 16629
// Function ID: 16630
// Name: isLeftBuilderPreviewFrame
// Dependencies: [11067, 11021, 6934, 2]
// Exports: default

// Module 16629 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6934 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11021 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11067 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  const result = obj.isConjurePreviewSurface(surface.surface) && isConjureApplicationDefault(surface.applicationId) && ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  return result;
};
