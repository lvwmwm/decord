// Module ID: 7315
// Function ID: 7316
// Name: showNSFWGuildJoinGate
// Dependencies: [6673, 7316, 1999, 2]
// Exports: showNSFWGuildJoinGate

// Module 7315 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(7316, dependencyMap.paths), obj2);
};
