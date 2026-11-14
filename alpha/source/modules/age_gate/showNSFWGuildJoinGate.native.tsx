// Module ID: 15938
// Function ID: 15939
// Name: showNSFWGuildJoinGate
// Dependencies: [6848, 15939, 2121, 2]
// Exports: showNSFWGuildJoinGate

// Module 15938 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(15939, dependencyMap.paths), obj2);
}
