// Module ID: 14606
// Function ID: 14607
// Name: showNSFWGuildJoinGate
// Dependencies: [6308, 14607, 2121, 2]
// Exports: showNSFWGuildJoinGate

// Module 14606 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(14607, dependencyMap.paths), obj2);
}
