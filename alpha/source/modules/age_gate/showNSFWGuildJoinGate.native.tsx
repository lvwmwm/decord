// Module ID: 7567
// Function ID: 7568
// Name: showNSFWGuildJoinGate
// Dependencies: [6130, 7568, 2120, 2]
// Exports: showNSFWGuildJoinGate

// Module 7567 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7568, dependencyMap.paths), obj2);
}
