// Module ID: 11078
// Function ID: 11079
// Name: openPlaintextFilePreview
// Dependencies: [6152, 11079, 2002, 2]
// Exports: openPlaintextFilePreview

// Module 11078 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11079, dependencyMap.paths), merged, PlaintextFilePreview);
};
