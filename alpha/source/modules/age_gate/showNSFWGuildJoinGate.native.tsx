// Module ID: 7506
// Function ID: 7507
// Name: showNSFWGuildJoinGate
// Dependencies: [6864, 7507, 2123, 2]
// Exports: showNSFWGuildJoinGate

// Module 7506 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7507, dependencyMap.paths), obj2);
}
