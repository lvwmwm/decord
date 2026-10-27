// Module ID: 7190
// Function ID: 7191
// Name: showNSFWGuildJoinGate
// Dependencies: [6190, 7191, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7190 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7191, dependencyMap.paths), obj2);
};
