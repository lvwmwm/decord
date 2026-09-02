// Module ID: 757
// Function ID: 758
// Name: mapCacheHas
// Dependencies: [754]

// Module 757 (mapCacheHas)
import getMapData from "getMapData" /* 754 */;


export default function mapCacheHas(arg0) {
  return getMapData(this, arg0).has(arg0);
};
