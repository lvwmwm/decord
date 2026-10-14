// Module ID: 11274
// Function ID: 11275
// Name: openConjureModal
// Dependencies: [5939, 11275, 2000, 2]
// Exports: default

// Module 11274 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(11275, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
