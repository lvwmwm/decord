// Module ID: 15976
// Function ID: 15977
// Name: showNSFWGuildJoinGate
// Dependencies: [6833, 15977, 2121, 2]
// Exports: showNSFWGuildJoinGate

// Module 15976 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(15977, dependencyMap.paths), obj2);
}
