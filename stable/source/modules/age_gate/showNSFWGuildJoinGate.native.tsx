// Module ID: 7345
// Function ID: 7346
// Name: showNSFWGuildJoinGate
// Dependencies: [6704, 7346, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7345 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7346, dependencyMap.paths), obj2);
};
