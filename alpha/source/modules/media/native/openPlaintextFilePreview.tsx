// Module ID: 11204
// Function ID: 11205
// Name: openPlaintextFilePreview
// Dependencies: [5093, 11205, 1987, 2]
// Exports: openPlaintextFilePreview

// Module 11204 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11205, dependencyMap.paths), merged, PlaintextFilePreview);
};
