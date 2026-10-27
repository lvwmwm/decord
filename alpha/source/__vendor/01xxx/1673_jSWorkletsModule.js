// Module ID: 1673
// Function ID: 1674
// Name: jSWorkletsModule
// Dependencies: [1658, 1674, 1675]

// Module 1673 (jSWorkletsModule)
import _mod1674 from "module_1674" /* 1674 */;
import _mod1675 from "module_1675" /* 1675 */;
import module_1658 from "module_1658" /* 1658 */;

let jSWorkletsModule;
if (module_1658.shouldBeUseWeb()) {
  const _module1 = _mod1674;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1675;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
