// Module ID: 11204
// Function ID: 11205
// Name: openConjureModal
// Dependencies: [5934, 11205, 2000, 2]
// Exports: default

// Module 11204 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11205, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
