// Module ID: 11700
// Function ID: 11701
// Name: openConjureModal
// Dependencies: [6657, 11701, 2002, 2]
// Exports: default

// Module 11700 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11701, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
