// Module ID: 14619
// Function ID: 14620
// Name: showNSFWGuildJoinGate
// Dependencies: [6337, 14620, 2121, 2]
// Exports: showNSFWGuildJoinGate

// Module 14619 (showNSFWGuildJoinGate)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(14620, dependencyMap.paths), obj2);
}
