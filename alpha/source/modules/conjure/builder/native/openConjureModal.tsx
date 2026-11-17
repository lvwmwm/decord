// Module ID: 14371
// Function ID: 14372
// Name: openConjureModal
// Dependencies: [6833, 14372, 2121, 2]
// Exports: default

// Module 14371 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(14372, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
