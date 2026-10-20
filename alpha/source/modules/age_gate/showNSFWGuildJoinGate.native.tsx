// Module ID: 7259
// Function ID: 7260
// Name: showNSFWGuildJoinGate
// Dependencies: [6620, 7260, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7259 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7260, dependencyMap.paths), obj2);
};
