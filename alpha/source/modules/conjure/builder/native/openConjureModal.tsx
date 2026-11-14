// Module ID: 13125
// Function ID: 13126
// Name: openConjureModal
// Dependencies: [6848, 13126, 2121, 2]
// Exports: default

// Module 13125 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(13126, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
