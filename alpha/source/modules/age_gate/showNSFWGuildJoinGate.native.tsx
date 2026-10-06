// Module ID: 6724
// Function ID: 6725
// Name: showNSFWGuildJoinGate
// Dependencies: [5099, 6725, 1987, 2]
// Exports: showNSFWGuildJoinGate

// Module 6724 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6725, dependencyMap.paths), obj2);
};
