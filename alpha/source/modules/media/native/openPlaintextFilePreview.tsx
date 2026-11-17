// Module ID: 12703
// Function ID: 12704
// Name: openPlaintextFilePreview
// Dependencies: [6833, 12704, 2121, 2]
// Exports: openPlaintextFilePreview

// Module 12703 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12704, dependencyMap.paths), merged, PlaintextFilePreview);
}
