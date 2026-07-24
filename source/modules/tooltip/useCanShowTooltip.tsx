// Module ID: 10671
// Function ID: 83266
// Name: useCanShowTooltip
// Dependencies: [31, 10672, 566, 9621, 2]
// Exports: useCanShowTooltip

// Module 10671 (useCanShowTooltip)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export const useCanShowTooltip = function useCanShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, arg1) {
  let flag = arg1;
  let flag2 = arg2;
  const _require = SCREENSHARE_SWIPE_UP_CONTROLS;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [flag2, flag, SCREENSHARE_SWIPE_UP_CONTROLS];
  const stateFromStores = _require(flag2[2]).useStateFromStores(items, () => outer1_4.canShowTooltip(closure_0) && flag2);
  const effect = React.useEffect(() => {
    if (flag2) {
      flag(flag2[3]).attemptToShowTooltip(closure_0, flag);
      const obj = flag(flag2[3]);
    }
  }, items1);
  return stateFromStores;
};
