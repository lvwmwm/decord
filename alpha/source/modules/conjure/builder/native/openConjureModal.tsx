// Module ID: 11744
// Function ID: 11745
// Name: openConjureModal
// Dependencies: [6672, 11745, 2002, 2]
// Exports: default

// Module 11744 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11745, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
