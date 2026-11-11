// Module ID: 15823
// Function ID: 15824
// Name: showNSFWGuildJoinGate
// Dependencies: [6785, 15824, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 15823 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(15824, dependencyMap.paths), obj2);
}
