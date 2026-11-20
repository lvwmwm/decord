// Module ID: 15940
// Function ID: 15941
// Name: showNSFWGuildJoinGate
// Dependencies: [6838, 15941, 2121, 2]
// Exports: showNSFWGuildJoinGate

// Module 15940 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(15941, dependencyMap.paths), obj2);
}
