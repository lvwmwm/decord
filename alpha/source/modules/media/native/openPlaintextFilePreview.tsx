// Module ID: 11922
// Function ID: 11923
// Name: openPlaintextFilePreview
// Dependencies: [6004, 11923, 2119, 2]
// Exports: openPlaintextFilePreview

// Module 11922 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11923, dependencyMap.paths), merged, PlaintextFilePreview);
}
