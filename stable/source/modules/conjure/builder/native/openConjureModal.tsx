// Module ID: 12266
// Function ID: 12267
// Name: openConjureModal
// Dependencies: [6831, 12267, 2118, 2]
// Exports: default

// Module 12266 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(12267, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
