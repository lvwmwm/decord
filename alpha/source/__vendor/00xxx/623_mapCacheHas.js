// Module ID: 623
// Function ID: 624
// Name: mapCacheHas
// Dependencies: [620]

// Module 623 (mapCacheHas)
import getMapData from "getMapData" /* 620 */;


export default function mapCacheHas(arg0) {
  const obj = getMapData(this, arg0);
  return obj.has(arg0);
};
