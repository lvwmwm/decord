// Module ID: 11290
// Function ID: 11291
// Name: openPlaintextFilePreview
// Dependencies: [5048, 11291, 1981, 2]
// Exports: openPlaintextFilePreview

// Module 11290 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11291, dependencyMap.paths), merged, PlaintextFilePreview);
};
