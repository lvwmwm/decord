// Module ID: 10013
// Function ID: 77391
// Name: isNewLayoutBetter
// Dependencies: [284214097]
// Exports: default

// Module 10013 (isNewLayoutBetter)
function isNewLayoutBetter(unusedSpace, unusedSpace2) {
  if (0 !== unusedSpace2.unusedSpace) {
    if (unusedSpace.unusedSpace !== unusedSpace2.unusedSpace) {
      if (0 !== unusedSpace.unusedSpace) {
        if (unusedSpace2.unusedSpace !== Infinity) {
          if (unusedSpace2.unusedSpace > 0) {
            if (unusedSpace.unusedSpace < 0) {
              return false;
            }
          }
          if (unusedSpace.unusedSpace > 0) {
            if (unusedSpace2.unusedSpace < 0) {
              return true;
            }
          }
          const _Math = Math;
          const absolute = Math.abs(unusedSpace2.unusedSpace);
          const _Math2 = Math;
          const absolute1 = Math.abs(unusedSpace.unusedSpace);
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.max(absolute, absolute1);
          if (bound - Math.min(absolute, absolute1) < 5000) {
            const _Math5 = Math;
            const _Math6 = Math;
            const bound1 = Math.max(unusedSpace.rows, unusedSpace.columns);
            const diff = bound1 - Math.min(unusedSpace.rows, unusedSpace.columns);
            const _Math7 = Math;
            const _Math8 = Math;
            const bound2 = Math.max(unusedSpace2.rows, unusedSpace2.columns);
            const diff1 = bound2 - Math.min(unusedSpace2.rows, unusedSpace2.columns);
            return diff1 !== diff && diff < diff1;
          } else {
            return absolute1 < absolute;
          }
        }
      }
      return true;
    }
  }
  return false;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/fitCardsInGrid.tsx");

export default function fitCardsInGrid(arg0) {
  let availableHeight;
  let availableWidth;
  let cardCount;
  let gutterSize;
  ({ cardCount, gutterSize, availableWidth, availableHeight } = arg0);
  let obj = { icon: null, forEach: null, variant: null, application: null, r: null };
  let num = 1;
  let tmp = obj;
  if (1 <= cardCount) {
    do {
      let result = (availableWidth - (num - 1) * gutterSize) / num;
      let _Math = Math;
      let result1 = cardCount % num;
      let num2 = 0;
      let rounded = Math.floor(cardCount / num);
      if (result1 > 0) {
        num2 = 1;
      }
      let sum = rounded + num2;
      obj = {};
      let sum1 = result * sum + (sum - 1) * gutterSize;
      obj.unusedSpace = availableWidth * availableHeight - (result * num + (num - 1) * gutterSize) * sum1;
      obj.columns = num;
      obj.overscroll = availableHeight - sum1;
      obj.rows = sum;
      obj.cardSize = result;
      let tmp7 = closure_0;
      let tmp8 = obj;
      if (closure_0(obj, obj)) {
        tmp8 = obj;
      }
      let tmp9 = tmp8;
      if (obj.overscroll < 0) {
        let result2 = (availableHeight - (obj.rows - 1) * gutterSize) / obj.rows;
        let sum2 = result2 * obj.rows + (obj.rows - 1) * gutterSize;
        obj = {};
        let tmp13 = obj;
        let tmp14 = obj;
        let merged = Object.assign(obj);
        obj["unusedSpace"] = availableWidth * availableHeight - (result2 * obj.columns + (obj.columns - 1) * gutterSize) * sum2;
        obj["overscroll"] = availableHeight - sum2;
        obj["cardSize"] = result2;
        let tmp16 = closure_0;
        tmp9 = tmp8;
        let tmp17 = obj;
        if (closure_0(obj, tmp8)) {
          tmp9 = obj;
          let tmp10 = obj;
        }
      }
      num = num + 1;
      obj = tmp9;
      tmp = tmp9;
    } while (num <= cardCount);
  }
  ({ columns: obj3.columns, cardSize: obj3.cardSize } = tmp);
  return {};
};
