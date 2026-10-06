// Module ID: 1662
// Function ID: 1663
// Name: jSWorkletsModule
// Dependencies: [1647, 1663, 1664]

// Module 1662 (jSWorkletsModule)
import _mod1663 from "module_1663" /* 1663 */;
import _mod1664 from "module_1664" /* 1664 */;
import module_1647 from "module_1647" /* 1647 */;

let jSWorkletsModule;
if (module_1647.shouldBeUseWeb()) {
  const _module1 = _mod1663;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1664;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
