// Module ID: 7135
// Function ID: 7136
// Name: showNSFWGuildJoinGate
// Dependencies: [6152, 7136, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7135 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7136, dependencyMap.paths), obj2);
};
