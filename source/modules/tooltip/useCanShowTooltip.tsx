// Module ID: 10632
// Function ID: 83024
// Name: useCanShowTooltip
// Dependencies: []
// Exports: useCanShowTooltip

// Module 10632 (useCanShowTooltip)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = function useCanShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, arg1) {
  let flag = arg1;
  let flag2 = arg2;
  arg1 = SCREENSHARE_SWIPE_UP_CONTROLS;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const dependencyMap = flag2;
  const items = [closure_4];
  const items1 = [flag2, flag, SCREENSHARE_SWIPE_UP_CONTROLS];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => closure_4.canShowTooltip(arg0) && flag2);
  const effect = React.useEffect(() => {
    if (flag2) {
      flag(flag2[3]).attemptToShowTooltip(arg0, flag);
      const obj = flag(flag2[3]);
    }
  }, items1);
  return stateFromStores;
};
