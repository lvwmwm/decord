// Module ID: 11037
// Function ID: 11038
// Name: getRandomCustomStatusPrompt
// Dependencies: [11036, 1128, 2]
// Exports: default

// Module 11037 (getRandomCustomStatusPrompt)
import Constants from "Constants" /* 11036 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
({ CustomStatusPrompts: c2, CustomStatusPromptValues: c3 } = Constants);
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_status/utils/getRandomCustomStatusPrompt.tsx");

export default function getRandomCustomStatusPrompt(size) {
  function label() {
    const intl = size(dependencyMap[1]).intl;
    return intl.string(size(dependencyMap[1]).t.Vq4UmS);
  }
  if (null != size) {
    let found;
    let tmp3;
    if (size.size > 0) {
      found = closure_2.filter((value) => !size.has(value.value));
    }
    if (0 === found.length) {
      tmp3 = { value: constants.ADD_STATUS, label };
      const obj = { value: constants.ADD_STATUS, label };
    } else {
      const _Math = Math;
      const _Math2 = Math;
      tmp3 = found[Math.floor(Math, Math.random(Math) * found.length)];
    }
    return tmp3;
  }
  found = closure_2;
};
