// Module ID: 10593
// Function ID: 10594
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 10593 (react)
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return react.useMemo(() => {
    let diff2;
    size = closure_0;
    if (null != closure_0) {
      const point = closure_1;
      if (null != closure_1) {
        const width = size.width;
        const width2 = point.width;
        const diff = styles.y - point.y;
        const diff1 = styles.x - point.x + styles.width / 2 - width / 2;
        const height = size.height;
        const height2 = styles.height;
        if (diff1 < 12) {
          num = 12 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - 12) {
            num = width2 - diff1 - width - 12;
          }
        }
        const obj = { tooltipX: diff1 + num, tooltipY: diff2, adjustmentX: num };
        if ("top" === closure_3) {
          diff2 = diff - height - num;
        } else {
          diff2 = diff + height2 + num;
        }
        return obj;
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0 };
  }, items);
};
