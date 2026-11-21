// Module ID: 14696
// Function ID: 14697
// Name: showNSFWGuildJoinGate
// Dependencies: [6429, 14697, 2119, 2]
// Exports: showNSFWGuildJoinGate

// Module 14696 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(14697, dependencyMap.paths), obj2);
}
