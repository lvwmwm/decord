// Module ID: 9578
// Function ID: 74640
// Dependencies: []

// Module 9578
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj);
  },
  attemptToShowTooltip(tooltip, flag) {
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag };
    obj.dispatch(obj);
  }
};
