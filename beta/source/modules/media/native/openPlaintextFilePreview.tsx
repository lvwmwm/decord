// Module ID: 12028
// Function ID: 12029
// Name: openPlaintextFilePreview
// Dependencies: [6429, 12029, 2119, 2]
// Exports: openPlaintextFilePreview

// Module 12028 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12029, dependencyMap.paths), merged, PlaintextFilePreview);
}
