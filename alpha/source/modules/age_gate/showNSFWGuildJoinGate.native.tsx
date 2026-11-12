// Module ID: 15818
// Function ID: 15819
// Name: showNSFWGuildJoinGate
// Dependencies: [6785, 15819, 2118, 2]
// Exports: showNSFWGuildJoinGate

// Module 15818 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(15819, dependencyMap.paths), obj2);
}
