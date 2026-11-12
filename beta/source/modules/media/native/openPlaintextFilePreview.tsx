// Module ID: 11805
// Function ID: 11806
// Name: openPlaintextFilePreview
// Dependencies: [6831, 11806, 2118, 2]
// Exports: openPlaintextFilePreview

// Module 11805 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11806, dependencyMap.paths), merged, PlaintextFilePreview);
}
