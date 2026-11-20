// Module ID: 12509
// Function ID: 12510
// Name: openPlaintextFilePreview
// Dependencies: [6838, 12510, 2121, 2]
// Exports: openPlaintextFilePreview

// Module 12509 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12510, dependencyMap.paths), merged, PlaintextFilePreview);
}
