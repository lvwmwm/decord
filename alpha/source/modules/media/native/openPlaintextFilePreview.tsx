// Module ID: 11276
// Function ID: 11277
// Name: openPlaintextFilePreview
// Dependencies: [6670, 11277, 2002, 2]
// Exports: openPlaintextFilePreview

// Module 11276 (openPlaintextFilePreview)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(11277, dependencyMap.paths), merged, PlaintextFilePreview);
};
