// Module ID: 12069
// Function ID: 12070
// Name: openConjureModal
// Dependencies: [6744, 12070, 1994, 2]
// Exports: default

// Module 12069 (openConjureModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(12070, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
