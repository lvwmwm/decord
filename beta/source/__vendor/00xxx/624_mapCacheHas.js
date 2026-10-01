// Module ID: 624
// Function ID: 625
// Name: mapCacheHas
// Dependencies: [621]

// Module 624 (mapCacheHas)
import getMapData from "getMapData" /* 621 */;


export default function mapCacheHas(arg0) {
  const obj = getMapData(this, arg0);
  return obj.has(arg0);
};
