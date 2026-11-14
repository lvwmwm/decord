// Module ID: 12507
// Function ID: 12508
// Name: openPlaintextFilePreview
// Dependencies: [6848, 12508, 2121, 2]
// Exports: openPlaintextFilePreview

// Module 12507 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12508, dependencyMap.paths), merged, PlaintextFilePreview);
}
