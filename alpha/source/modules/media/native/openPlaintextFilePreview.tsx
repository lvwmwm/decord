// Module ID: 11773
// Function ID: 11774
// Name: openPlaintextFilePreview
// Dependencies: [6799, 11774, 2118, 2]
// Exports: openPlaintextFilePreview

// Module 11773 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11774, dependencyMap.paths), merged, PlaintextFilePreview);
}
