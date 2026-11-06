// Module ID: 7469
// Function ID: 7470
// Name: showNSFWGuildJoinGate
// Dependencies: [6824, 7470, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 7469 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7470, dependencyMap.paths), obj2);
}
