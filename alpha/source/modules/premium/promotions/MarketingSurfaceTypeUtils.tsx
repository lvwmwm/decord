// Module ID: 9560
// Function ID: 9561
// Name: MarketingSurfaceTypeUtils
// Dependencies: [9561, 2]
// Exports: classifyMarketingSurfaceType, isMarketingSurface

// Module 9560 (MarketingSurfaceTypeUtils)
import MarketingSurfaceType from "MarketingSurfaceType" /* 9561 */;
import size from "module_2" /* 2 */;

function isMarketingSurfaceType(items) {
  let hasOwnResult = typeof items === "number";
  if (typeof items === "number") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, items);
  }
  return hasOwnResult;
}
function isMarketingSurfaceProperties(properties, items) {
  if (typeof items === "number") {
    const tmp7 = isMarketingSurfaceType(items) && properties.properties.oneofKind === MarketingSurfaceType.MarketingSurfaceKindByType[items];
    return tmp7;
  } else {
    const obj = items[Symbol.iterator]();
    while (obj !== undefined) {
      if (isMarketingSurfaceProperties(properties, tmp2)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingSurfaceTypeUtils.tsx");

export { isMarketingSurfaceType };
export { isMarketingSurfaceProperties };
export function isMarketingSurface(properties, items) {
  return isMarketingSurfaceProperties(properties.properties, items);
}
export function classifyMarketingSurfaceType(component_type) {
  if (typeof component_type === "number") {
    const _Object = Object;
    Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, component_type);
  }
  return component_type;
}
