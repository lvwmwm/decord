// Module ID: 13029
// Function ID: 13030
// Name: openConjureModal
// Dependencies: [6785, 13030, 2118, 2]
// Exports: default

// Module 13029 (openConjureModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(13030, dependencyMap.paths);
  pushLazy(tmp2, obj, "conjure_modal_" + guildId);
};
