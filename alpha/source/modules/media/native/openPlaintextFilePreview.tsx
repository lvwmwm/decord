// Module ID: 11578
// Function ID: 11579
// Name: openPlaintextFilePreview
// Dependencies: [6738, 11579, 1995, 2]
// Exports: openPlaintextFilePreview

// Module 11578 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11579, dependencyMap.paths), merged, PlaintextFilePreview);
}
