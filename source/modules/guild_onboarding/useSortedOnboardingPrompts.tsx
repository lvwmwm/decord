// Module ID: 9974
// Function ID: 77046
// Name: useSortedOnboardingPrompts
// Dependencies: [31, 5058, 624, 2]
// Exports: default

// Module 9974 (useSortedOnboardingPrompts)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/guild_onboarding/useSortedOnboardingPrompts.tsx");

export default function useSortedOnboardingPrompts(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  stateFromStoresArray = _require(stateFromStoresArray[2]).useStateFromStoresArray(items, () => outer1_3.getEnabledOnboardingPrompts(closure_0));
  let items1 = [stateFromStoresArray];
  return React.useMemo(() => {
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < stateFromStoresArray.length) {
      do {
        let tmp = stateFromStoresArray;
        let tmp2 = stateFromStoresArray[num3];
        if (tmp2.isNew) {
          let arr = items.push(tmp2);
          let sum = num2;
        } else if (tmp2.hasNewAnswers) {
          arr = items1.push(tmp2);
          let options = tmp2.options;
          sum = num2 + options.filter((isUnseen) => isUnseen.isUnseen).length;
        } else if (tmp2.inOnboarding) {
          let arr1 = items3.push(tmp2);
          sum = num2;
        } else {
          let arr2 = items2.push(tmp2);
          sum = num2;
        }
        num3 = num3 + 1;
        let tmp8 = stateFromStoresArray;
        num2 = sum;
        num = sum;
      } while (num3 < stateFromStoresArray.length);
    }
    const obj = { onboardingPromptsRaw: stateFromStoresArray, newOnboardingPrompts: items, onboardingPromptsWithNewAnswers: items1, newAnswersCount: num, onboardingPrompts: items2.concat(items3) };
    return obj;
  }, items1);
};
