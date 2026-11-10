// Module ID: 7386
// Function ID: 7387
// Name: showNSFWGuildJoinGate
// Dependencies: [6744, 7387, 1994, 2]
// Exports: showNSFWGuildJoinGate

// Module 7386 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7387, dependencyMap.paths), obj2);
}
