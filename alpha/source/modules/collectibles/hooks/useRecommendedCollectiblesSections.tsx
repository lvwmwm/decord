// Module ID: 15064
// Function ID: 15065
// Name: useRecommendedCollectiblesSections
// Dependencies: [19, 15065, 15066, 5612, 15067, 2]
// Exports: default

// Module 15064 (useRecommendedCollectiblesSections)
import react from "react" /* 19 */;
import reactDefault from "react" /* 5612 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 15065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let useMemo = react.useMemo;
let closure_5 = [];
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default function useRecommendedCollectiblesSections(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_2;
  let length;
  _require = arg0;
  importDefault = arg1;
  let obj = require("EditProfileCollectiblesOrderingExperiment");
  dependencyMap = obj.useIsEditProfileCollectiblesOrderingEnabled("collectibles_picker");
  let tmp = reactDefault(() => {
    let tmp2;
    const tmp = closure_2;
    if (tmp) {
      const recommendations = CollectiblesRecommendationStore.getRecommendations();
      let skuIds;
      if (recommendations != null) {
        skuIds = recommendations.skuIds;
      }
      if (skuIds == null) {
        skuIds = closure_5;
      }
      tmp2 = skuIds;
    } else {
      tmp2 = closure_5;
    }
    return tmp2;
  });
  useMemo = tmp;
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
          const obj = closure_0(closure_2[4]);
          const result = obj.reorderCollectiblesByRecommendation(section.items, length);
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
