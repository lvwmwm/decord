// Module ID: 14367
// Function ID: 108471
// Name: calculateTotalGaps
// Dependencies: []
// Exports: useCardLayout

// Module 14367 (calculateTotalGaps)
function calculateTotalGaps(arg0, arg1) {
  return arg1 + require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_GAP * (arg0 - 1);
}
function calculateCardWidth(arg0, arg1, arg2) {
  return (arg1 - calculateTotalGaps(arg0, arg2)) / arg0;
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export const useCardLayout = function useCardLayout() {
  const width = importDefault(dependencyMap[1])().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    let obj = { columns: num, cardWidth: undefined, rowWidth: undefined };
    return obj;
  } else {
    let num2 = 2;
    if (width >= 768) {
      num2 = 4;
    }
    const result = require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = width - (result + require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_GAP * (num - 1));
    if (diff < 2 * require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      let bound = Math.max(4, diff);
    } else {
      bound = 2 * require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_GAP;
    }
    const tmp10 = calculateCardWidth(num, width, bound);
    let tmp14 = num;
    let tmp15 = tmp10;
    if (tmp10 > require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp16 = num;
      tmp15 = tmp10;
      tmp14 = num;
      if (num < num2) {
        const sum = tmp16 + 1;
        const tmp19 = calculateCardWidth(sum, width, bound);
        tmp14 = sum;
        tmp15 = tmp19;
        while (tmp19 > require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp16 = sum;
          tmp15 = tmp19;
          tmp14 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp15, require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_WIDTH);
    const bound2 = Math.min(bound1, require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result1 = bound2 * tmp14;
    if (result1 + calculateTotalGaps(tmp14, bound) > width) {
      if (tmp14 > 1) {
        obj = { columns: 1, cardWidth: undefined, rowWidth: undefined };
      }
      return obj;
    }
    obj = { columns: tmp14, cardWidth: bound2 };
    const result2 = bound2 * tmp14;
    obj.rowWidth = result2 + require(dependencyMap[0]).COLLECTIBLES_SHOP_CARD_GAP * (tmp14 - 1) + bound;
  }
};
