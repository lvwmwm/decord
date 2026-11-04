// Module ID: 622
// Function ID: 623
// Name: mapCacheGet
// Dependencies: [620]

// Module 622 (mapCacheGet)
import getMapData from "getMapData" /* 620 */;


export default function mapCacheGet(arg0) {
  const obj = getMapData(this, arg0);
  return obj.get(arg0);
};
