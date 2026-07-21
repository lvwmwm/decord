// Module ID: 8559
// Function ID: 68030
// Name: useTooltipPosition
// Dependencies: []
// Exports: default

// Module 8559 (useTooltipPosition)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  let num = arg4;
  const React = arg0;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return React.useMemo((self, self2, self3) => {
    if (null != self) {
      if (null != self2) {
        const width = self.width;
        const width2 = self2.width;
        const diff = self3.y - self2.y;
        const diff1 = self3.x - self2.x + self3.width / 2 - width / 2;
        if (diff1 < 12) {
          let num = 12 - diff1;
        } else {
          num = 0;
          if (diff1 + width > width2 - 12) {
            num = width2 - diff1 - width - 12;
          }
        }
        const obj = { tooltipX: diff1 + num };
        if ("top" === arg3) {
          let diff2 = diff - self.height - num;
        } else {
          diff2 = diff + self3.height + num;
        }
        obj.tooltipY = diff2;
        obj.adjustmentX = num;
        return obj;
      }
    }
    return { -9223372036854775808: false, 9223372036854775807: false, 9223372036854775807: false };
  }, items);
};
