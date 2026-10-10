// Module ID: 6913
// Function ID: 6914
// Name: showNSFWGuildJoinGate
// Dependencies: [5934, 6914, 2000, 2]
// Exports: showNSFWGuildJoinGate

// Module 6913 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6914, dependencyMap.paths), obj2);
};
