// Module ID: 7262
// Function ID: 7263
// Name: showNSFWGuildJoinGate
// Dependencies: [6623, 7263, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7262 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7263, dependencyMap.paths), obj2);
};
