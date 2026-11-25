// Module ID: 7536
// Function ID: 7537
// Name: showNSFWGuildJoinGate
// Dependencies: [6099, 7537, 2119, 2]
// Exports: showNSFWGuildJoinGate

// Module 7536 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7537, dependencyMap.paths), obj2);
}
