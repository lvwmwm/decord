// Module ID: 7522
// Function ID: 7523
// Name: showNSFWGuildJoinGate
// Dependencies: [6879, 7523, 2123, 2]
// Exports: showNSFWGuildJoinGate

// Module 7522 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7523, dependencyMap.paths), obj2);
}
