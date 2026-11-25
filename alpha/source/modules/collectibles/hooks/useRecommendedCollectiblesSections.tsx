// Module ID: 14409
// Function ID: 14410
// Name: useRecommendedCollectiblesSections
// Dependencies: [19, 14410, 5591, 14411, 2]
// Exports: default

// Module 14409 (useRecommendedCollectiblesSections)
import react from "react" /* 19 */;
import reactDefault from "react" /* 5591 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 14410 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, recommendations;

const useMemo = react.useMemo;
let closure_5 = [];
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default function useRecommendedCollectiblesSections(arg0, arg1) {
  let closure_1;
  let length;
  let closure_0 = arg0;
  importDefault = arg1;
  const tmp = reactDefault(() => {
    recommendations = recommendations.getRecommendations();
    let skuIds;
    if (recommendations != null) {
      skuIds = recommendations.skuIds;
    }
    if (skuIds == null) {
      skuIds = closure_1_5;
    }
    return skuIds;
  });
  dependencyMap = tmp;
  const items = [arg1, tmp, arg0];
  return useMemo(() => {
    let mapped;
    if (0 === length.length) {
      mapped = closure_0;
    } else {
      mapped = closure_0.map((section) => {
        if (section.section !== closure_1_1) {
          return section;
        } else {
          const obj = closure_0(closure_2[3]);
          const result = obj.reorderCollectiblesByRecommendation(section.items, closure_1_2);
          let tmp5 = section;
          if (result !== section.items) {
            const obj2 = { items: result };
            const merged = Object.assign(section);
            tmp5 = obj2;
          }
          return tmp5;
        }
      });
    }
    return mapped;
  }, items);
};
