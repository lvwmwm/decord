// Module ID: 11784
// Function ID: 11785
// Name: openConjureModal
// Dependencies: [6707, 11785, 1999, 2]
// Exports: default

// Module 11784 (openConjureModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11785, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
