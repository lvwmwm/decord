// Module ID: 11804
// Function ID: 11805
// Name: openPlaintextFilePreview
// Dependencies: [6831, 11805, 2118, 2]
// Exports: openPlaintextFilePreview

// Module 11804 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11805, dependencyMap.paths), merged, PlaintextFilePreview);
}
