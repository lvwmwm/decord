// Module ID: 7349
// Function ID: 7350
// Name: showNSFWGuildJoinGate
// Dependencies: [6707, 7350, 1999, 2]
// Exports: showNSFWGuildJoinGate

// Module 7349 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7350, dependencyMap.paths), obj2);
};
