// Module ID: 11217
// Function ID: 11218
// Name: openPlaintextFilePreview
// Dependencies: [5099, 11218, 1987, 2]
// Exports: openPlaintextFilePreview

// Module 11217 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11218, dependencyMap.paths), merged, PlaintextFilePreview);
};
