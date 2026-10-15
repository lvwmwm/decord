// Module ID: 7133
// Function ID: 7134
// Name: showNSFWGuildJoinGate
// Dependencies: [6150, 7134, 2000, 2]
// Exports: showNSFWGuildJoinGate

// Module 7133 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7134, dependencyMap.paths), obj2);
};
