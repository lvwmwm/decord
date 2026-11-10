// Module ID: 11615
// Function ID: 11616
// Name: openPlaintextFilePreview
// Dependencies: [6744, 11616, 1994, 2]
// Exports: openPlaintextFilePreview

// Module 11615 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11616, dependencyMap.paths), merged, PlaintextFilePreview);
}
