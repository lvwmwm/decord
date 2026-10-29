// Module ID: 11375
// Function ID: 11376
// Name: openPlaintextFilePreview
// Dependencies: [6731, 11376, 2000, 2]
// Exports: openPlaintextFilePreview

// Module 11375 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11376, dependencyMap.paths), merged, PlaintextFilePreview);
}
