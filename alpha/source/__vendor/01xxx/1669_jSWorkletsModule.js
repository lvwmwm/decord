// Module ID: 1669
// Function ID: 1670
// Name: jSWorkletsModule
// Dependencies: [1654, 1670, 1671]

// Module 1669 (jSWorkletsModule)
import _mod1670 from "module_1670" /* 1670 */;
import _mod1671 from "module_1671" /* 1671 */;
import module_1654 from "module_1654" /* 1654 */;

let jSWorkletsModule;
if (module_1654.shouldBeUseWeb()) {
  const _module1 = _mod1670;
  jSWorkletsModule = _module1.createJSWorkletsModule();
} else {
  const _module2 = _mod1671;
  jSWorkletsModule = _module2.createNativeWorkletsModule();
}

export const WorkletsModule = jSWorkletsModule;
