// Module ID: 11227
// Function ID: 11228
// Name: openPlaintextFilePreview
// Dependencies: [6651, 11228, 2002, 2]
// Exports: openPlaintextFilePreview

// Module 11227 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11228, dependencyMap.paths), merged, PlaintextFilePreview);
};
