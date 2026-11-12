// Module ID: 7479
// Function ID: 7480
// Name: showNSFWGuildJoinGate
// Dependencies: [6831, 7480, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 7479 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7480, dependencyMap.paths), obj2);
}
