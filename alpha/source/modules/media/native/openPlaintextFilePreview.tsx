// Module ID: 11752
// Function ID: 11753
// Name: openPlaintextFilePreview
// Dependencies: [6864, 11753, 2123, 2]
// Exports: openPlaintextFilePreview

// Module 11752 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11753, dependencyMap.paths), merged, PlaintextFilePreview);
}
