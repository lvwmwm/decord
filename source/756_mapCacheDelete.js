// Module ID: 756
// Function ID: 757
// Name: mapCacheDelete
// Dependencies: [757]

// Module 756 (mapCacheDelete)
import getMapData from "getMapData" /* 757 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = getMapData(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};
