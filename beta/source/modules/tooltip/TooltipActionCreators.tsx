// Module ID: 10192
// Function ID: 10193
// Name: TooltipActionCreators
// Dependencies: [577, 2]

// Module 10192 (TooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    DispatcherDefault.dispatch({ type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP });
  },
  attemptToShowTooltip(tooltip, flag) {
    if (flag === undefined) {
      flag = false;
    }
    DispatcherDefault.dispatch({ type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag });
  }
};
