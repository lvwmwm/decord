// Module ID: 11808
// Function ID: 11809
// Name: openPlaintextFilePreview
// Dependencies: [6879, 11809, 2123, 2]
// Exports: openPlaintextFilePreview

// Module 11808 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11809, dependencyMap.paths), merged, PlaintextFilePreview);
}
