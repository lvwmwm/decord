// Module ID: 11063
// Function ID: 11064
// Name: openPlaintextFilePreview
// Dependencies: [6150, 11064, 2000, 2]
// Exports: openPlaintextFilePreview

// Module 11063 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11064, dependencyMap.paths), merged, PlaintextFilePreview);
};
