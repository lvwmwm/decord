// Module ID: 13127
// Function ID: 13128
// Name: openConjureModal
// Dependencies: [6838, 13128, 2121, 2]
// Exports: default

// Module 13127 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(13128, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
