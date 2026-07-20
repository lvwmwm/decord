// Module ID: 11882
// Function ID: 92043
// Name: getRandomCustomStatusPrompt
// Dependencies: []
// Exports: default

// Module 11882 (getRandomCustomStatusPrompt)
const _module = require(dependencyMap[0]);
({ CustomStatusPrompts: closure_2, CustomStatusPromptValues: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/custom_status/utils/getRandomCustomStatusPrompt.tsx");

export default function getRandomCustomStatusPrompt(size) {
  const require = size;
  if (null != size) {
    if (size.size > 0) {
      let found = closure_2.filter((value) => !value.has(value.value));
    }
    if (0 === found.length) {
      const obj = {
        value: constants.ADD_STATUS,
        label() {
              const intl = arg0(closure_1[1]).intl;
              return intl.string(arg0(closure_1[1]).t.Vq4UmS);
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
