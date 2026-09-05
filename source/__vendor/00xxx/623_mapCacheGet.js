// Module ID: 623
// Function ID: 624
// Name: mapCacheGet
// Dependencies: [621]

// Module 623 (mapCacheGet)
import getMapData from "getMapData" /* 621 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};
