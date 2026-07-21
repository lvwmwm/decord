// Module ID: 9965
// Function ID: 76993
// Name: useSortedOnboardingPrompts
// Dependencies: []
// Exports: default

// Module 9965 (useSortedOnboardingPrompts)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_onboarding/useSortedOnboardingPrompts.tsx");

export default function useSortedOnboardingPrompts(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const stateFromStoresArray = arg1(dependencyMap[2]).useStateFromStoresArray(items, () => enabledOnboardingPrompts.getEnabledOnboardingPrompts(arg0));
  const dependencyMap = stateFromStoresArray;
  const items1 = [stateFromStoresArray];
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
        let tmp = closure_1;
        let tmp2 = closure_1[num3];
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
        let tmp8 = closure_1;
        num2 = sum;
        num = sum;
      } while (num3 < closure_1.length);
    }
    const obj = { onboardingPromptsRaw: stateFromStoresArray, newOnboardingPrompts: items, onboardingPromptsWithNewAnswers: items1, newAnswersCount: num, onboardingPrompts: items2.concat(items3) };
    return obj;
  }, items1);
};
