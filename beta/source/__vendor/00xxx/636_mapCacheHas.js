// Module ID: 636
// Function ID: 637
// Name: mapCacheHas
// Dependencies: [633]

// Module 636 (mapCacheHas)
import getMapData from "getMapData" /* 633 */;


export default function mapCacheHas(arg0) {
  const obj = getMapData(this, arg0);
  return obj.has(arg0);
};
