// Module ID: 7311
// Function ID: 7312
// Name: showNSFWGuildJoinGate
// Dependencies: [6670, 7312, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7311 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7312, dependencyMap.paths), obj2);
};
