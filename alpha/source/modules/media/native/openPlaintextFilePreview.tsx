// Module ID: 11807
// Function ID: 11808
// Name: openPlaintextFilePreview
// Dependencies: [6879, 11808, 2123, 2]
// Exports: openPlaintextFilePreview

// Module 11807 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11808, dependencyMap.paths), merged, PlaintextFilePreview);
}
