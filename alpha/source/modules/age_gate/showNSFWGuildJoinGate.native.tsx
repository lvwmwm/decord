// Module ID: 7380
// Function ID: 7381
// Name: showNSFWGuildJoinGate
// Dependencies: [6738, 7381, 1995, 2]
// Exports: showNSFWGuildJoinGate

// Module 7380 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7381, dependencyMap.paths), obj2);
}
