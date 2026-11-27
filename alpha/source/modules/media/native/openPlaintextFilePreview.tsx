// Module ID: 12077
// Function ID: 12078
// Name: openPlaintextFilePreview
// Dependencies: [6130, 12078, 2120, 2]
// Exports: openPlaintextFilePreview

// Module 12077 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12078, dependencyMap.paths), merged, PlaintextFilePreview);
}
