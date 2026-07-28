// Module ID: 9582
// Function ID: 74609
// Name: dispatcher
// Dependencies: [686, 2]

// Module 9582 (dispatcher)
const result = require("set").fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    let obj = importDefault(686);
    obj = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj);
  },
  attemptToShowTooltip(closure_0, flag) {
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(686);
    obj = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip: closure_0, ignoreMaxShownLimit: flag };
    obj.dispatch(obj);
  }
};
