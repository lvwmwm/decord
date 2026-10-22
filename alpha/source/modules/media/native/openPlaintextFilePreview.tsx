// Module ID: 11253
// Function ID: 11254
// Name: openPlaintextFilePreview
// Dependencies: [6657, 11254, 2002, 2]
// Exports: openPlaintextFilePreview

// Module 11253 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11254, dependencyMap.paths), merged, PlaintextFilePreview);
};
