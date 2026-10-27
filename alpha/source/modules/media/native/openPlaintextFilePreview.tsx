// Module ID: 11284
// Function ID: 11285
// Name: openPlaintextFilePreview
// Dependencies: [6673, 11285, 1999, 2]
// Exports: openPlaintextFilePreview

// Module 11284 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11285, dependencyMap.paths), merged, PlaintextFilePreview);
};
