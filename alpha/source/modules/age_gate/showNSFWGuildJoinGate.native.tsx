// Module ID: 7441
// Function ID: 7442
// Name: showNSFWGuildJoinGate
// Dependencies: [6004, 7442, 2119, 2]
// Exports: showNSFWGuildJoinGate

// Module 7441 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7442, dependencyMap.paths), obj2);
}
