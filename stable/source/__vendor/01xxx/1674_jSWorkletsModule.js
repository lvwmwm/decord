// Module ID: 1674
// Function ID: 1675
// Name: jSWorkletsModule
// Dependencies: [1659, 1675, 1676]

// Module 1674 (jSWorkletsModule)
import _mod1675 from "module_1675" /* 1675 */;
import _mod1676 from "module_1676" /* 1676 */;
import module_1659 from "module_1659" /* 1659 */;

let jSWorkletsModule;
if (module_1659.shouldBeUseWeb()) {
  const _module1 = _mod1675;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1676;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
