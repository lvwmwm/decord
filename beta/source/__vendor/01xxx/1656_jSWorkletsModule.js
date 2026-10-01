// Module ID: 1656
// Function ID: 1657
// Name: jSWorkletsModule
// Dependencies: [1641, 1657, 1658]

// Module 1656 (jSWorkletsModule)
import _mod1657 from "module_1657" /* 1657 */;
import _mod1658 from "module_1658" /* 1658 */;
import module_1641 from "module_1641" /* 1641 */;

let jSWorkletsModule;
if (module_1641.shouldBeUseWeb()) {
  const _module1 = _mod1657;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1658;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
