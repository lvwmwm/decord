// Module ID: 11838
// Function ID: 11839
// Name: openConjureModal
// Dependencies: [6731, 11839, 2000, 2]
// Exports: default

// Module 11838 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11839, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
