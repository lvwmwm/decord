// Module ID: 1668
// Function ID: 1669
// Name: jSWorkletsModule
// Dependencies: [1653, 1669, 1670]

// Module 1668 (jSWorkletsModule)
import _mod1669 from "module_1669" /* 1669 */;
import _mod1670 from "module_1670" /* 1670 */;
import module_1653 from "module_1653" /* 1653 */;

let jSWorkletsModule;
if (module_1653.shouldBeUseWeb()) {
  const _module1 = _mod1669;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1670;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
