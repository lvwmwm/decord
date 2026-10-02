// Module ID: 9390
// Function ID: 9391
// Name: TooltipActionCreators
// Dependencies: [585, 2]

// Module 9390 (TooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

let obj = {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj2);
  },
  attemptToShowTooltip(tooltip, flag) {
    if (flag === undefined) {
      flag = false;
    }
    const obj = DispatcherDefault;
    const obj2 = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default obj;
