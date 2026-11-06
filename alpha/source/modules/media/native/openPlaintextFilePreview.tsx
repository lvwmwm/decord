// Module ID: 11782
// Function ID: 11783
// Name: openPlaintextFilePreview
// Dependencies: [6824, 11783, 2118, 2]
// Exports: openPlaintextFilePreview

// Module 11782 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11783, dependencyMap.paths), merged, PlaintextFilePreview);
}
