// Module ID: 11321
// Function ID: 11322
// Name: openPlaintextFilePreview
// Dependencies: [6707, 11322, 1999, 2]
// Exports: openPlaintextFilePreview

// Module 11321 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11322, dependencyMap.paths), merged, PlaintextFilePreview);
};
