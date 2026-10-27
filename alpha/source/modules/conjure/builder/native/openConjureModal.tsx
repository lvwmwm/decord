// Module ID: 11746
// Function ID: 11747
// Name: openConjureModal
// Dependencies: [6673, 11747, 1999, 2]
// Exports: default

// Module 11746 (openConjureModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11747, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
