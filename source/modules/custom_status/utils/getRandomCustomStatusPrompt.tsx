// Module ID: 11902
// Function ID: 92145
// Name: getRandomCustomStatusPrompt
// Dependencies: [11901, 1212, 2]
// Exports: default

// Module 11902 (getRandomCustomStatusPrompt)
import StatusTypes from "StatusTypes";

let closure_2;
let closure_3;
({ CustomStatusPrompts: closure_2, CustomStatusPromptValues: closure_3 } = StatusTypes);
const result = require("set").fileFinishedImporting("modules/custom_status/utils/getRandomCustomStatusPrompt.tsx");

export default function getRandomCustomStatusPrompt(size) {
  let closure_0 = size;
  if (null != size) {
    if (size.size > 0) {
      let found = closure_2.filter((value) => !size.has(value.value));
    }
    if (0 === found.length) {
      const obj = {
        value: constants.ADD_STATUS,
        label() {
              const intl = size(outer1_1[1]).intl;
              return intl.string(size(outer1_1[1]).t.Vq4UmS);
            }
      };
      let tmp3 = obj;
    } else {
      const _Math = Math;
      const _Math2 = Math;
      tmp3 = found[Math.floor(Math, Math.random(Math) * found.length)];
    }
    return tmp3;
  }
  found = closure_2;
};
