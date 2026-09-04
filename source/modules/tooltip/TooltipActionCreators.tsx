// Module ID: 9623
// Function ID: 9624
// Name: dispatcher
// Dependencies: [706, 2]

// Module 9623 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    let obj = dispatcherDefault;
    obj = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj);
  },
  attemptToShowTooltip(closure_0, flag) {
    if (flag === undefined) {
      flag = false;
    }
    let obj = dispatcherDefault;
    obj = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip: closure_0, ignoreMaxShownLimit: flag };
    obj.dispatch(obj);
  }
};
