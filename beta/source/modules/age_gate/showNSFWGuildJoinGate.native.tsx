// Module ID: 7446
// Function ID: 7447
// Name: showNSFWGuildJoinGate
// Dependencies: [6799, 7447, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 7446 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7447, dependencyMap.paths), obj2);
}
