// Module ID: 11988
// Function ID: 11989
// Name: openPlaintextFilePreview
// Dependencies: [6337, 11989, 2121, 2]
// Exports: openPlaintextFilePreview

// Module 11988 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11989, dependencyMap.paths), merged, PlaintextFilePreview);
}
