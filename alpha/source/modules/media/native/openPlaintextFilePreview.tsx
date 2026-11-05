// Module ID: 11816
// Function ID: 11817
// Name: openPlaintextFilePreview
// Dependencies: [6882, 11817, 2123, 2]
// Exports: openPlaintextFilePreview

// Module 11816 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11817, dependencyMap.paths), merged, PlaintextFilePreview);
}
