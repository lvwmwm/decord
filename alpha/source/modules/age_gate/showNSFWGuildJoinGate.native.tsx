// Module ID: 6907
// Function ID: 6908
// Name: showNSFWGuildJoinGate
// Dependencies: [5941, 6908, 2000, 2]
// Exports: showNSFWGuildJoinGate

// Module 6907 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6908, dependencyMap.paths), obj2);
};
