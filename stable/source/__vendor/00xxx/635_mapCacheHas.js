// Module ID: 635
// Function ID: 636
// Name: mapCacheHas
// Dependencies: [632]

// Module 635 (mapCacheHas)
import getMapData from "getMapData" /* 632 */;


export default function mapCacheHas(arg0) {
  const obj = getMapData(this, arg0);
  return obj.has(arg0);
};
