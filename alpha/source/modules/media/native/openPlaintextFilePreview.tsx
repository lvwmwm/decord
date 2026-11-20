// Module ID: 11908
// Function ID: 11909
// Name: openPlaintextFilePreview
// Dependencies: [6310, 11909, 2119, 2]
// Exports: openPlaintextFilePreview

// Module 11908 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11909, dependencyMap.paths), merged, PlaintextFilePreview);
}
