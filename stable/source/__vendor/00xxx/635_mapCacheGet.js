// Module ID: 635
// Function ID: 636
// Name: mapCacheGet
// Dependencies: [633]

// Module 635 (mapCacheGet)
import getMapData from "getMapData" /* 633 */;


export default function mapCacheGet(arg0) {
  const obj = getMapData(this, arg0);
  return obj.get(arg0);
};
