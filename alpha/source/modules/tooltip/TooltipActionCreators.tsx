// Module ID: 9785
// Function ID: 9786
// Name: TooltipActionCreators
// Dependencies: [573, 2]

// Module 9785 (TooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
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
