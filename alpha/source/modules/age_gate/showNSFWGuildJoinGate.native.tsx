// Module ID: 7449
// Function ID: 7450
// Name: showNSFWGuildJoinGate
// Dependencies: [6801, 7450, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 7449 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7450, dependencyMap.paths), obj2);
}
