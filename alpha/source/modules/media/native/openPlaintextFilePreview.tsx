// Module ID: 11966
// Function ID: 11967
// Name: openPlaintextFilePreview
// Dependencies: [6308, 11967, 2121, 2]
// Exports: openPlaintextFilePreview

// Module 11966 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11967, dependencyMap.paths), merged, PlaintextFilePreview);
}
