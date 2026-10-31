// Module ID: 15067
// Function ID: 15068
// Name: CollectiblesRecommendationUtils
// Dependencies: [2]
// Exports: reorderCollectiblesByRecommendation

// Module 15067 (CollectiblesRecommendationUtils)
import size from "module_2" /* 2 */;

let map;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesRecommendationUtils.tsx");

export function reorderCollectiblesByRecommendation(items, arg1) {
  if (items.length > 1) {
    if (0 !== arg1.length) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(items.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      items = [];
      const iter = arg1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let value = map.get(nextResult);
        if (null != value) {
          let arr = items.push(tmp6);
          let deleteResult = map.delete(tmp4);
        }
        continue;
      }
      let tmp11 = items;
      if (items.length > 0) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 0);
        HermesBuiltin.arraySpread(items1, map.values(), arraySpreadResult);
        tmp11 = items1;
      }
      return tmp11;
    }
  }
  return items;
}
