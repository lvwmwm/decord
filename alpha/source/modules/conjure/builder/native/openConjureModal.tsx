// Module ID: 11515
// Function ID: 11516
// Name: openConjureModal
// Dependencies: [6153, 11516, 2002, 2]
// Exports: default

// Module 11515 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11516, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
