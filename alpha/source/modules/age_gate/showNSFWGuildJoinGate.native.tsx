// Module ID: 7298
// Function ID: 7299
// Name: showNSFWGuildJoinGate
// Dependencies: [6657, 7299, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7298 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7299, dependencyMap.paths), obj2);
};
