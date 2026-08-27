// Module ID: 759
// Function ID: 760
// Name: mapCacheGet
// Dependencies: [757]

// Module 759 (mapCacheGet)
import getMapData from "getMapData" /* 757 */;


export default function mapCacheGet(arg0) {
  return getMapData(this, arg0).get(arg0);
};
