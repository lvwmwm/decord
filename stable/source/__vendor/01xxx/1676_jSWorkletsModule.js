// Module ID: 1676
// Function ID: 1677
// Name: jSWorkletsModule
// Dependencies: [1661, 1677, 1678]

// Module 1676 (jSWorkletsModule)
import _mod1677 from "module_1677" /* 1677 */;
import _mod1678 from "module_1678" /* 1678 */;
import module_1661 from "module_1661" /* 1661 */;

let jSWorkletsModule;
if (module_1661.shouldBeUseWeb()) {
  const _module1 = _mod1677;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1678;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
