// Module ID: 12267
// Function ID: 12268
// Name: openConjureModal
// Dependencies: [6879, 12268, 2123, 2]
// Exports: default

// Module 12267 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(12268, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
