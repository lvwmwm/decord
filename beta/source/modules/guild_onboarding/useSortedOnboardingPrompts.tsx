// Module ID: 11709
// Function ID: 11710
// Name: useSortedOnboardingPrompts
// Dependencies: [19, 7379, 565, 2]
// Exports: default

// Module 11709 (useSortedOnboardingPrompts)
import noop from "module_19" /* 19 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7379 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useSortedOnboardingPrompts.tsx");

export default function useSortedOnboardingPrompts(arg0) {
  _require = arg0;
  let items = [GuildOnboardingPromptsStore];
  stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => GuildOnboardingPromptsStore.getEnabledOnboardingPrompts(closure_0));
  let items1 = [stateFromStoresArray];
  return noop.useMemo(() => {
    let arr5;
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let tmp = stateFromStoresArray;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < stateFromStoresArray.length) {
      do {
        arr5 = stateFromStoresArray;
        let tmp2 = stateFromStoresArray[num];
        if (tmp2.isNew) {
          let arr = items.push(tmp2);
          let sum = num2;
        } else if (tmp2.hasNewAnswers) {
          let arr2 = items1.push(tmp2);
          options = tmp2.options;
          sum = num2 + options.filter((isUnseen) => isUnseen.isUnseen).length;
        } else if (tmp2.inOnboarding) {
          let arr3 = items3.push(tmp2);
          sum = num2;
        } else {
          let arr4 = items2.push(tmp2);
          sum = num2;
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
        tmp = arr5;
      } while (num < arr5.length);
    }
    return { onboardingPromptsRaw: tmp, newOnboardingPrompts: items, onboardingPromptsWithNewAnswers: items1, newAnswersCount: num3, onboardingPrompts: items2.concat(items3) };
  }, items1);
};
