// Module ID: 15442
// Function ID: 15443
// Name: useCardLayout
// Dependencies: [8226, 1479, 2]
// Exports: useCardLayout

// Module 15442 (useCardLayout)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8226 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export const useCardLayout = function useCardLayout() {
  let result4;
  const width = useWindowDimensionsDefault().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    return { columns: num, cardWidth: "Array", rowWidth: "paddingHorizontal" };
  } else {
    let bound;
    let num2 = 2;
    if (width >= 768) {
      num2 = 4;
    }
    const result = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = width - (result + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      bound = Math.max(4, diff1);
    } else {
      bound = 2 * tmp2(8226).COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (width - (bound + tmp2(8226).COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp10 = tmp2;
    let tmp11 = result1;
    let tmp12 = num;
    let tmp14 = tmp2;
    if (result1 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp19 = num;
      tmp10 = tmp2;
      tmp11 = result1;
      tmp14 = tmp2;
      tmp12 = num;
      if (num < num2) {
        const sum = tmp19 + 1;
        const result2 = (width - (bound + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
        tmp10 = require;
        tmp11 = result2;
        tmp12 = sum;
        tmp14 = require;
        while (result2 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp19 = sum;
          tmp10 = tmp16;
          tmp11 = result2;
          tmp14 = tmp16;
          tmp12 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp11, tmp14(8226).COLLECTIBLES_SHOP_CARD_WIDTH);
    const minResult = min(bound1, tmp14(8226).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = minResult * tmp12;
    const diff2 = tmp12 - 1;
    if (result3 + (bound + tmp10(8226).COLLECTIBLES_SHOP_CARD_GAP * diff2) > width) {
      let obj;
      if (1 < tmp12) {
        obj = { columns: 1, cardWidth: "Array", rowWidth: "channel" };
      }
      return obj;
    }
    obj = { columns: tmp12, cardWidth: minResult, rowWidth: result4 + tmp14(8226).COLLECTIBLES_SHOP_CARD_GAP * diff2 };
    result4 = minResult * tmp12;
  }
};
