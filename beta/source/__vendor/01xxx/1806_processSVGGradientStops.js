// Module ID: 1806
// Function ID: 1807
// Name: processSVGGradientStops
// Dependencies: [1665, 1801, 1803]
// Exports: processSVGGradientStops

// Module 1806 (processSVGGradientStops)
import _mod1665 from "module_1665" /* 1665 */;
import _mod1801 from "module_1801" /* 1801 */;
import processPercentage3 from "processPercentage" /* 1803 */;

let color;


export const processSVGGradientStops = (arr) => {
  const tmp = arr;
  if (tmp) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      let num = 0;
      if (0 !== arr.length) {
        const mapped = arr.map((color) => {
          color = color.color;
          if (color) {
            const obj = _mod1801;
            color = obj.processColorSVG(color.color);
          }
          const processStyleValue = _mod1665.processStyleValue;
          let num = color.opacity;
          _mod1665;
          const processPercentage = processPercentage3.processPercentage;
          if (num == null) {
            num = 1;
          }
          const processStyleValueResult = processStyleValue(processPercentage, num);
          let tmp7 = color;
          if (typeof color === "number") {
            tmp7 = color;
            if (typeof processStyleValueResult === "number") {
              const _Math = Math;
              tmp7 = (Math.round((color >>> 24 & 255) * processStyleValueResult) << 24 | 16777215 & color) >>> 0;
            }
          }
          const processStyleValue2 = _mod1665.processStyleValue;
          let num2 = color.offset;
          _mod1665;
          const processPercentage2 = tmp3(tmp4[2]).processPercentage;
          if (num2 == null) {
            num2 = 0;
          }
          const obj2 = { offset: processStyleValue2(processPercentage2, num2), color: tmp7 };
          return obj2;
        });
        const sorted = mapped.sort((offset, offset2) => {
          const NumberResult = Number(offset.offset);
          return NumberResult - Number(offset2.offset);
        });
        const items = [];
        const tmp4 = mapped;
        for (const item10018 of mapped) {
          arr = items.push(item10018.offset);
          let arr3 = items.push(item10018.color);
          continue;
        }
        return items;
      }
    }
  }
  const logger = _mod1665.logger;
  logger.warn("No stops in SVG gradient");
  return [];
};
