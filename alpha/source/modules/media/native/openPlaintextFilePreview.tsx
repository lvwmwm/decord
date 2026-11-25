// Module ID: 12021
// Function ID: 12022
// Name: openPlaintextFilePreview
// Dependencies: [6099, 12022, 2119, 2]
// Exports: openPlaintextFilePreview

// Module 12021 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(12022, dependencyMap.paths), merged, PlaintextFilePreview);
}
