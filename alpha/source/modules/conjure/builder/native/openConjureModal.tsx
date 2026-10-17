// Module ID: 11574
// Function ID: 11575
// Name: openConjureModal
// Dependencies: [6190, 11575, 2002, 2]
// Exports: default

// Module 11574 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11575, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
