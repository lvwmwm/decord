// Module ID: 7313
// Function ID: 7314
// Name: showNSFWGuildJoinGate
// Dependencies: [6672, 7314, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7313 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7314, dependencyMap.paths), obj2);
};
