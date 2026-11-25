// Module ID: 12033
// Function ID: 12034
// Name: openPlaintextFilePreview
// Dependencies: [6429, 12034, 2119, 2]
// Exports: openPlaintextFilePreview

// Module 12033 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12034, dependencyMap.paths), merged, PlaintextFilePreview);
}
