// Module ID: 11498
// Function ID: 11499
// Name: openConjureModal
// Dependencies: [6150, 11499, 2000, 2]
// Exports: default

// Module 11498 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11499, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
