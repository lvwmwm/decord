// Module ID: 7297
// Function ID: 7298
// Name: showNSFWGuildJoinGate
// Dependencies: [6658, 7298, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7297 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7298, dependencyMap.paths), obj2);
};
