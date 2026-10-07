// Module ID: 634
// Function ID: 635
// Name: mapCacheGet
// Dependencies: [632]

// Module 634 (mapCacheGet)
import getMapData from "getMapData" /* 632 */;


export default function mapCacheGet(arg0) {
  const obj = getMapData(this, arg0);
  return obj.get(arg0);
};
