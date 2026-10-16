// Module ID: 7137
// Function ID: 7138
// Name: showNSFWGuildJoinGate
// Dependencies: [6153, 7138, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7137 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7138, dependencyMap.paths), obj2);
};
