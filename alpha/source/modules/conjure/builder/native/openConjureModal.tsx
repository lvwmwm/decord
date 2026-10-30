// Module ID: 12031
// Function ID: 12032
// Name: openConjureModal
// Dependencies: [6738, 12032, 1995, 2]
// Exports: default

// Module 12031 (openConjureModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(12032, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
