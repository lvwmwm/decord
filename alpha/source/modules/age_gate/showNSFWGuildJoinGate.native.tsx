// Module ID: 7290
// Function ID: 7291
// Name: showNSFWGuildJoinGate
// Dependencies: [6651, 7291, 2002, 2]
// Exports: showNSFWGuildJoinGate

// Module 7290 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7291, dependencyMap.paths), obj2);
};
