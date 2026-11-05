// Module ID: 7524
// Function ID: 7525
// Name: showNSFWGuildJoinGate
// Dependencies: [6882, 7525, 2123, 2]
// Exports: showNSFWGuildJoinGate

// Module 7524 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7525, dependencyMap.paths), obj2);
}
