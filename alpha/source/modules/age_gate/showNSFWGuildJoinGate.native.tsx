// Module ID: 7373
// Function ID: 7374
// Name: showNSFWGuildJoinGate
// Dependencies: [6731, 7374, 2000, 2]
// Exports: showNSFWGuildJoinGate

// Module 7373 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7374, dependencyMap.paths), obj2);
}
