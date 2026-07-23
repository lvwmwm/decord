// Module ID: 8567
// Function ID: 68082
// Name: useTooltipPosition
// Dependencies: [31, 2]
// Exports: default

// Module 8567 (useTooltipPosition)
import result from "result";

const result = require("set").fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  let num = arg4;
  const React = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return React.useMemo(() => {
    if (null != styles) {
      if (null != styles2) {
        const width = styles.width;
        const width2 = styles2.width;
        const diff = styles3.y - styles2.y;
        const diff1 = styles3.x - styles2.x + styles3.width / 2 - width / 2;
        if (diff1 < 12) {
          let num = 12 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - 12) {
            num = width2 - diff1 - width - 12;
          }
        }
        const obj = { tooltipX: diff1 + num };
        if ("top" === closure_3) {
          let diff2 = diff - styles.height - num;
        } else {
          diff2 = diff + styles3.height + num;
        }
        obj.tooltipY = diff2;
        obj.adjustmentX = num;
        return obj;
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
  }, items);
};
