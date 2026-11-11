// Module ID: 12418
// Function ID: 12419
// Name: openPlaintextFilePreview
// Dependencies: [6785, 12419, 2118, 2]
// Exports: openPlaintextFilePreview

// Module 12418 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12419, dependencyMap.paths), merged, PlaintextFilePreview);
}
