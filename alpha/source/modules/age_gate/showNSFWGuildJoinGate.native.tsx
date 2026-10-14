// Module ID: 6919
// Function ID: 6920
// Name: showNSFWGuildJoinGate
// Dependencies: [5939, 6920, 2000, 2]
// Exports: showNSFWGuildJoinGate

// Module 6919 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6920, dependencyMap.paths), obj2);
};
