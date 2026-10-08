// Module ID: 6900
// Function ID: 6901
// Name: showNSFWGuildJoinGate
// Dependencies: [5940, 6901, 1999, 2]
// Exports: showNSFWGuildJoinGate

// Module 6900 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6901, dependencyMap.paths), obj2);
};
