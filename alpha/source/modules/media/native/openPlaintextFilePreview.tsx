// Module ID: 10705
// Function ID: 10706
// Name: openPlaintextFilePreview
// Dependencies: [5941, 10706, 2000, 2]
// Exports: openPlaintextFilePreview

// Module 10705 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(10706, dependencyMap.paths), merged, PlaintextFilePreview);
};
