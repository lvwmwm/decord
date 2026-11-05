// Module ID: 12276
// Function ID: 12277
// Name: openConjureModal
// Dependencies: [6882, 12277, 2123, 2]
// Exports: default

// Module 12276 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(12277, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
