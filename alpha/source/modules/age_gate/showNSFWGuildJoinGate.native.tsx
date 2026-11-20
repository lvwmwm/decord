// Module ID: 14574
// Function ID: 14575
// Name: showNSFWGuildJoinGate
// Dependencies: [6310, 14575, 2119, 2]
// Exports: showNSFWGuildJoinGate

// Module 14574 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(14575, dependencyMap.paths), obj2);
}
