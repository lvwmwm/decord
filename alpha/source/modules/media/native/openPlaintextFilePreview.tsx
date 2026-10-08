// Module ID: 11332
// Function ID: 11333
// Name: openPlaintextFilePreview
// Dependencies: [5940, 11333, 1999, 2]
// Exports: openPlaintextFilePreview

// Module 11332 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11333, dependencyMap.paths), merged, PlaintextFilePreview);
};
