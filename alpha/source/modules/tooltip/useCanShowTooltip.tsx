// Module ID: 12064
// Function ID: 12065
// Name: useCanShowTooltip
// Dependencies: [19, 12065, 504, 10429, 2]
// Exports: useCanShowTooltip

// Module 12064 (useCanShowTooltip)
import TooltipActionCreatorsDefault from "TooltipActionCreators" /* 10429 */;
import react from "react" /* 19 */;
import TooltipStore from "TooltipStore" /* 12065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/tooltip/useCanShowTooltip.tsx");

export function useCanShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, arg1) {
  _require = SCREENSHARE_SWIPE_UP_CONTROLS;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let obj = require("get initialized");
  const items = [TooltipStore];
  const items1 = [flag2, flag, SCREENSHARE_SWIPE_UP_CONTROLS];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = TooltipStore.canShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS) && flag2;
    return tmp;
  });
  const effect = react.useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const obj = TooltipActionCreatorsDefault;
      obj.attemptToShowTooltip(SCREENSHARE_SWIPE_UP_CONTROLS, flag);
    }
  }, items1);
  return stateFromStores;
}
